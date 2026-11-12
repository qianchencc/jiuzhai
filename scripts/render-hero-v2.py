"""Internal art-direction preview; actual website remains live 3D geometry."""
import argparse
import math
import os
import sys

import bpy
from mathutils import Vector


parser = argparse.ArgumentParser()
parser.add_argument('--gltf', required=True)
parser.add_argument('--out', required=True)
parser.add_argument('--samples', type=int, default=64)
parser.add_argument('--width', type=int, default=1600)
parser.add_argument('--height', type=int, default=1100)
args = parser.parse_args(sys.argv[sys.argv.index('--') + 1:])
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath=args.gltf)
scene = bpy.context.scene
model_meshes = [obj for obj in scene.objects if obj.type == 'MESH']
corners = [obj.matrix_world @ Vector(corner) for obj in model_meshes for corner in obj.bound_box]
minimum = Vector(tuple(min(point[i] for point in corners) for i in range(3)))
maximum = Vector(tuple(max(point[i] for point in corners) for i in range(3)))
center = (minimum + maximum) * .5

for material in bpy.data.materials:
    if not material.use_nodes:
        continue
    nodes = material.node_tree.nodes
    principled = next((node for node in nodes if node.type == 'BSDF_PRINCIPLED'), None)
    if not principled:
        continue
    principled.inputs['Roughness'].default_value = .84
    principled.inputs['Metallic'].default_value = 0
    if 'mineral-water' in material.name.lower():
        principled.inputs['Roughness'].default_value = .27
        continue
    noise = nodes.new('ShaderNodeTexNoise')
    noise.inputs['Scale'].default_value = 130
    noise.inputs['Detail'].default_value = 2
    noise.inputs['Roughness'].default_value = .7
    bump = nodes.new('ShaderNodeBump')
    bump.inputs['Strength'].default_value = .11
    bump.inputs['Distance'].default_value = .018
    material.node_tree.links.new(noise.outputs['Fac'], bump.inputs['Height'])
    material.node_tree.links.new(bump.outputs['Normal'], principled.inputs['Normal'])

floor = bpy.data.materials.new('Warm ivory photographic ground')
floor.use_nodes = True
floor.node_tree.nodes.get('Principled BSDF').inputs['Base Color'].default_value = (.89, .826, .726, 1)
floor.node_tree.nodes.get('Principled BSDF').inputs['Roughness'].default_value = .93
bpy.ops.mesh.primitive_plane_add(size=240, location=(0, 0, minimum.z - .13))
bpy.context.object.name = 'Preview ground only'
bpy.context.object.data.materials.append(floor)

def area(name, location, energy, size, color):
    data = bpy.data.lights.new(name, type='AREA')
    data.energy = energy
    data.shape = 'DISK'
    data.size = size
    data.color = color
    obj = bpy.data.objects.new(name, data)
    scene.collection.objects.link(obj)
    obj.location = location
    obj.rotation_euler = (center - obj.location).to_track_quat('-Z', 'Y').to_euler()
    return obj

area('Large warm paper key', (-17, -12, 27), 3100, 13, (1.0, .88, .73))
area('Soft open-sky fill', (18, 4, 20), 950, 20, (.79, .88, 1.0))
sun_data = bpy.data.lights.new('Soft afternoon sun', type='SUN')
sun_data.energy = 1.75
sun_data.angle = .15
sun_data.color = (1.0, .93, .83)
sun_object = bpy.data.objects.new('Soft afternoon sun', sun_data)
scene.collection.objects.link(sun_object)
sun_object.rotation_euler = Vector((.5, .35, -.8)).to_track_quat('-Z', 'Y').to_euler()

world = bpy.data.worlds.new('Ivory studio atmosphere')
world.use_nodes = True
world.node_tree.nodes.get('Background').inputs['Color'].default_value = (.83, .86, .88, 1)
world.node_tree.nodes.get('Background').inputs['Strength'].default_value = .65
scene.world = world

camera_data = bpy.data.cameras.new('Hero camera')
camera = bpy.data.objects.new('Hero camera', camera_data)
scene.collection.objects.link(camera)
camera_data.type = 'ORTHO'
camera_data.lens = 45
direction = Vector((.38, -.78, .58)).normalized()
camera.location = center + direction * 70
camera.rotation_euler = (center - camera.location).to_track_quat('-Z', 'Y').to_euler()
rotation = camera.rotation_euler.to_matrix()
right, up = rotation @ Vector((1, 0, 0)), rotation @ Vector((0, 1, 0))
horizontal = [point.dot(right) for point in corners]
vertical = [point.dot(up) for point in corners]
aspect = args.width / args.height
camera_data.ortho_scale = max((max(vertical) - min(vertical)) * aspect, max(horizontal) - min(horizontal)) * 1.14
scene.camera = camera
scene.render.engine = 'CYCLES'
scene.cycles.device = 'CPU'
scene.cycles.samples = args.samples
# This Blender build has Cycles but no OpenImageDenoise library.
scene.cycles.use_denoising = False
scene.cycles.max_bounces = 6
scene.cycles.diffuse_bounces = 3
scene.render.resolution_x = args.width
scene.render.resolution_y = args.height
scene.render.resolution_percentage = 100
scene.render.image_settings.file_format = 'PNG'
scene.render.film_transparent = False
scene.view_settings.view_transform = 'AgX'
try:
    scene.view_settings.look = 'AgX - Medium High Contrast'
except TypeError:
    pass
scene.view_settings.exposure = .25
scene.render.filepath = args.out
os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
bpy.ops.wm.save_as_mainfile(filepath=os.path.splitext(args.out)[0] + '.blend')
bpy.ops.render.render(write_still=True)
print(f'Hero preview written: {args.out}', flush=True)
