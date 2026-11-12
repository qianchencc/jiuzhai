# Revision 5 — close-view structure, confined waves and flowing water

## Request and scope

The owner supplied three close views showing intersecting tree crowns, waves extending beyond their lake, and a waterfall resembling a thick folded curtain. This revision keeps the compact composition and free camera, and rebuilds those local structures. People, linear tours and destination popup cards remain absent.

## Trees

Each autumn tree now has one continuous closed bowed paper fan, with shallow internal pleats and a rounded outer edge. Five continuous fir skirts have distinct vertical ranges. Crowns are spaced using their actual projected convex hulls, including branch and trunk thickness, rather than a small circle around the trunk. The composed view has predominantly front-facing autumn crowns with fixed, varied physical orientations; they are not billboards.

The final forest has 274 trees: 145 firs and 129 autumn trees, including 126 smaller saplings. There are 104,364 forest triangles. The full-footprint check finds zero overlap pairs and zero geometry outside the conservative footprints. Minimum projected clearance is 0.0840849 world units. Wind weights are bounded at 0.10, keeping the largest theoretical full-gust displacement under 0.029 per tree. The placement margin accounts for two trees moving in opposite directions.

The lower tree count is intentional: readable, separated crowns replace density produced by interpenetration. The original grove regions and colour families remain.

## Water interaction

The two large screen-space pointer rings were replaced with a small point and quiet label. A click creates two low-contrast wave fronts at the selected lake's elevation plus 0.005. Every wave sector is intersected with that lake's visible inner shoreline. The implementation handles concave coves and splits self-crossing inset contours into valid planar faces before triangulation. It does not rely on the wave centre being inside the lake.

`water-surface-validation-v5.json` records 6,624 edge, corner, radius and width cases across all eight lakes. The 681,489 resulting triangles have no escaped vertices, edge midpoints or centroids against an independent winding check. Actual Float32 buffers also remain within the mask. Maximum height error is 1.15e-7. Waterfall meshes are rejected as ripple targets. The largest tested ring has 470 triangles, below the fixed capacity of 1,024. A reduced-motion interaction uses a static small front that fades.

The same geometric mask is used for ambient lake currents and the receiving-water foam. The actual browser recording includes a click close to the upper lake's spill edge; the resulting wave remains on the horizontal surface.

## Waterfalls

The previous broad overlapping lobes, deep brown channels and solid foam beads have been removed. The main body is a thin continuous surface with a rounded source, downward profile and shallow runout. Its geometry and aeration colour move continuously. Fine descending strokes sample the same surface and normal, with only 0.008 of normal offset. The water is authored in cool white and pale cyan with irregular deeper channels, so warm surface lighting cannot turn it brown.

The inlet follows the source lake's actual boundary. The lower water blends into per-position pigment sampled from the receiving lake. The water foot contains connected and broken flat scalloped foam, followed by rounded flat foam islands. Every horizontal foam triangle is clipped to the receiving lake. Shore layers taper away at the real spill openings.

There are 5,417 animated main-water vertices and 8,358 dedicated atmosphere vertices, including 88 descending strokes. A 0–90 second check over 721 time samples covers 761,653 nondegenerate water-effect triangles, with zero out-of-water centre points, wrong heights, nonfinite values or buffer overflows. The main fall height remains monotone downward. Details are in `waterfall-validation-v5.json`.

### Defects found by actual visual inspection

The first thin-water pass still resembled a pale sheet. Stronger irregular channel colour, travelling white aeration, source-pigment transition, a receiving-pigment fade and connected foam were added after inspecting the real close view.

Small vegetation was also being placed on the carved cliff between lake polygons. Both understory and grass now exclude the actual falling-water corridor.

The analytic cliff sampler originally sat below water, but its coarser triangulated surface still pierced the moving veil. This was visible as small tan slivers in the browser. Excavation clearance was increased to 0.18 and checked against the actual terrain triangles, not just the analytic sampler. `fall-clearance-validation-v5.json` tests 371,912 actual water vertices, triangle edge midpoints and centroids over eight moving phases. All four waterfalls have zero detected penetrations; the smallest measured clearance is 0.016819 at Pearl Shoal.

## Daylight and colour

Daylight now uses a warm, softer key and a brighter near-neutral sky fill. Ambient visibility strength is 0.27, the software cast-shadow strength is 0.19, and the minimum brightness is 0.66. Occluded paper receives a pale cool bounce instead of the previous yellow shadow multiplier. Terrain around the exposed waterfall shoulders is warm chalk rather than grass green. The GPU uses Neutral tone mapping; the software renderer has a brighter wrapped key and sky fill while retaining paper-face shading.

The visibility bake samples twelve ambient rays and four sun rays against 181,436 opaque triangles. Runtime fingerprint is `86900e2b`; 599,100 vertices across 21 meshes are baked. The main moving water and clouds are excluded from the ambient bake. The browser reports `paperLight=ready`.

## Actual browser verification

Inspected the daylight overview, both main waterfalls close up, the lower grove from a rotated close view, an upper-lake edge click and dusk. Screens are the live navigable webpage, not offline renders. A 7.7-second recording uses 84 captured browser frames with capture timing retained; no in-between images were synthesized. The fixed-camera waterfall region changes across the recording, and a surface wave is triggered at frame 18.

The tested renderer reports zero people, free navigation and full settled quality. The inspected application logs contain no application errors; the browser extension's metadata errors are unrelated. Settled renderer-only frame diagnostics were around 21.5–25.2 ms in these close views. This is a local observation, not a cross-device performance guarantee.

## Model and build

The static scene has 212,368 triangles and 37 meshes. The 16,956,700-byte GLB round-trip preserves all triangles, world bounds and vertex colours; all inspected position and colour components are finite. Export-only indexing and normalized 16-bit colours reduce file size without modifying runtime geometry. Maximum colour component error is 7.63e-6. Details are in `model-validation-v5.json` and `scene-validation-v5.json`.

The artifact remains procedural Three.js geometry guided by imagery, not a neural image-to-3D conversion. The declined provider was not used.

## Verification boundary

The managed browser does not provide WebGL2. Actual screenshots and motion evidence therefore use the real-geometry software renderer. The WebGL-specific tree wind, fibre shader, Neutral tone mapping and realtime shadow appearance were not visually verified in this environment. The moving water geometry, clipped waves, foam, camera and scene structure are shared by both renderers.
