"""Blender's C BVH performs visibility queries; no renderer or add-on required.

Invoked by bake-light-v2.mjs, not with system Python. The arrays are in the
unchanged Three.js coordinate system (Y up). Output retains original vertices.
"""
import argparse
import json
import math
import os
import sys
import time

import numpy as np
from mathutils import Vector
from mathutils.bvhtree import BVHTree


def arguments():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', required=True)
    return parser.parse_args(sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else sys.argv[1:])


def main():
    start = time.perf_counter()
    args = arguments()
    with open(args.input, encoding='utf-8') as source:
        metadata = json.load(source)
    directory = os.path.dirname(args.input)
    positions = np.fromfile(os.path.join(directory, 'positions.f32'), dtype='<f4').reshape((-1, 3))
    normals = np.fromfile(os.path.join(directory, 'normals.f32'), dtype='<f4').reshape((-1, 3))
    triangles = np.fromfile(os.path.join(directory, 'triangles.u32'), dtype='<u4').reshape((-1, 3))
    flags = np.fromfile(os.path.join(directory, 'flags.u8'), dtype=np.uint8)
    if positions.shape != normals.shape or len(flags) != len(positions):
        raise ValueError('Bake input arrays have inconsistent vertex counts.')
    if not np.isfinite(positions).all() or not np.isfinite(normals).all():
        raise ValueError('Bake input contains nonfinite geometry.')
    settings = metadata['settings']
    print(f"BVH: {len(positions):,} vertices, {len(triangles):,} opaque triangles", flush=True)
    bvh = BVHTree.FromPolygons(positions.tolist(), triangles.tolist(), all_triangles=True, epsilon=0.0)
    # Position + oriented normal, not position alone: paper creases stay crisp.
    keys = np.empty((len(positions), 7), dtype=np.int32)
    keys[:, :3] = np.rint(positions * 100000).astype(np.int32)
    keys[:, 3:6] = np.rint(normals * 1000).astype(np.int32)
    keys[:, 6] = flags
    _, first, inverse = np.unique(keys, axis=0, return_index=True, return_inverse=True)
    del keys
    print(f"Visibility cache: {len(first):,} unique position/normal pairs ({len(first)/len(positions):.1%})", flush=True)

    ao_rays = settings['aoRays']
    sun_rays = settings['shadowRays']
    distance = settings['aoDistance']
    epsilon = settings['epsilon']
    sun = Vector(settings['sunDirection']).normalized()
    sun_tangent = sun.cross(Vector((0, 1, 0))).normalized()
    sun_bitangent = sun.cross(sun_tangent).normalized()
    sun_directions = []
    for j in range(sun_rays):
        angle = math.tau * (j + .27) / sun_rays
        radius = settings['sunRadius'] * math.sqrt((j + .5) / sun_rays)
        sun_directions.append((sun + sun_tangent * (math.cos(angle) * radius) + sun_bitangent * (math.sin(angle) * radius)).normalized())
    # Cosine-distributed directions with a fixed low-discrepancy azimuth.
    local_rays = []
    for j in range(ao_rays):
        u = (j + .5) / ao_rays
        angle = j * 2.399963229728653 + .31
        local_rays.append((math.cos(angle) * math.sqrt(u), math.sin(angle) * math.sqrt(u), math.sqrt(1 - u)))
    visibility = np.empty((len(first), 2), dtype=np.uint8)
    last_report = time.perf_counter()
    for i, original_index in enumerate(first):
        point = Vector(positions[original_index])
        normal = Vector(normals[original_index])
        if normal.length_squared < .00001:
            normal = Vector((0, 1, 0))
        else:
            normal.normalize()
        reference = Vector((0, 1, 0)) if abs(normal.y) < .94 else Vector((1, 0, 0))
        tangent = normal.cross(reference).normalized()
        bitangent = normal.cross(tangent).normalized()
        origin = point + normal * epsilon
        occlusion = 0.0
        for dx, dy, dz in local_rays:
            ray = tangent * dx + bitangent * dy + normal * dz
            _, _, _, hit_distance = bvh.ray_cast(origin, ray, distance)
            if hit_distance is not None:
                # Nearby contact is strong; far foliage never dirties the page.
                occlusion += max(0.0, 1 - hit_distance / distance) ** 1.35
        ambient = max(0.0, min(1.0, 1 - occlusion / ao_rays))
        sunlight = 1.0
        if normal.dot(sun) > .035:
            unblocked = 0
            for ray in sun_directions:
                _, _, _, hit_distance = bvh.ray_cast(origin, ray, settings['shadowDistance'])
                if hit_distance is None:
                    unblocked += 1
            sunlight = unblocked / sun_rays
        visibility[i, 0] = round(ambient * 255)
        visibility[i, 1] = round(sunlight * 255)
        if i % 20000 == 0 and time.perf_counter() - last_report > 8:
            elapsed = time.perf_counter() - start
            print(f"Visibility: {i:,}/{len(first):,} ({i/len(first):.0%}), elapsed {elapsed:.1f}s", flush=True)
            last_report = time.perf_counter()
    expanded = visibility[inverse]
    expanded.tofile(os.path.join(directory, 'visibility.u8'))
    report = {
        'seconds': round(time.perf_counter() - start, 3),
        'vertices': len(positions),
        'uniqueSamples': len(first),
        'opaqueTriangles': len(triangles),
        'ambientMean': float(expanded[:, 0].mean() / 255),
        'ambientMinimum': int(expanded[:, 0].min()) / 255,
        'ambientPercentiles': [float(value / 255) for value in np.percentile(expanded[:, 0], [5, 25, 50, 75, 95])],
        'sunMean': float(expanded[:, 1].mean() / 255),
        'fullyShadowedFraction': float(np.mean(expanded[:, 1] == 0)),
    }
    with open(os.path.join(directory, 'bake-report.json'), 'w', encoding='utf-8') as target:
        json.dump(report, target, indent=2)
    print(json.dumps(report), flush=True)


if __name__ == '__main__':
    main()
