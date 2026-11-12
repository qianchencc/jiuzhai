# Verification — The Shape of Water, revision 2

## Model and lighting

- One continuous scene with 18 static meshes, 697,959 vertices and 232,653 triangles. Positions and colors are finite.
- Four waterfall surfaces and their terrain grooves share exact parameters. All falling-water vertices clear the terrain; the smallest measured clearance is about 0.085 scene units.
- The 380-tree composition was inspected in three geometry renders. Floating lake edges, the path climbing the rear ridge, and terrain cutting through the waterfalls were corrected before locking geometry.
- Offline ambient and sunlight visibility were sampled against the actual geometry. The 1,396,254-byte asset is not a rendered image.
- The runtime validates every mesh's vertex count, index order, transform, quantized position and normal fingerprint before applying lighting. A browser-specific tiny normal difference in the boardwalk batch was resolved by using documented 1e-4 component precision. A 0.002 position change is still rejected; 1e-7 normal noise is accepted. Final fingerprint: `2a74123d`.
- The actual managed browser reports `data-paper-light=ready` and renders the contact shadows.
- The final 22,354,572-byte GLB was reloaded with GLTFLoader. Triangle/vertex counts and bounds were preserved; bounds difference is zero. Export-only normalized Uint16 vertex colors differ by at most 7.6295e-6 per component; the unused export-only windWeight attribute was omitted. Live scene geometry and lighting remain unchanged. The GLB contains AO, no baked directional sun, and accurate concept-guided modelling provenance. See `model-validation-v2.json`.

## Browser verification

- Desktop opening, waterfall close view, Five Flower Lake close view and twilight were visually inspected in the real running app.
- The seven-stop journey rail and continuous camera transitions were exercised.
- Automatic travel visibly advanced the journey, pause worked, and the Long Lake endpoint reached 100% with its composed final camera.
- A long water press visibly revealed the submerged branches. Dragging the paper sun changed the daylight to twilight.
- Optional sound toggled on and off after explicit clicks.
- The making-of page displayed the generated concept and accurate process. The GLB download control returned the expected pre-optimization model file. The final compressed model was separately reloaded and validated, and its deployment file size was checked against the Sites limit.
- The postcard control produced a valid PNG download from the current lake view; the decoded image is 1800×1300.
- A real 390×844 iframe verified the responsive composition. The opening was revised so the title and complete island have separate areas. The writing strip remained usable without shifting the canvas.
- Test text, a date and a PNG were entered through the actual mobile controls, encoded locally, saved, and visibly placed as a physical paper photograph beside the route. The camera approached the object.
- Reload restored the test text, date and photo. The sample was cleared through the same UI, restoring the original empty place.
- The photo overlay in the software renderer uses the real scene depth buffer to hide obstructed photos. Export respects this visibility state. WebGL uses native textured geometry and its depth buffer.
- Application review corrected duplicated animation loops after visibility changes, initial pinch/keyboard zoom entry, escaping a photo-focused camera with a drag, and stale async memory-save completion closing a newer editor.

## Rendering performance

The software renderer uses the same scene geometry and a true depth buffer. It caches static triangle shading, projection and the rendered color/depth buffers; only changed objects are recomputed while the camera is fixed. Camera or lighting changes invalidate the corresponding caches. Motion resolution decreases temporarily and returns to full resolution after motion stops.

A Node mock-canvas benchmark on this exact scene reduced moving-camera frames from about 409 ms to a mean of 53.5 ms, with warmed frames at 30–39 ms. Dynamic-traveller frames measured 11–29 ms after the first cache rebuild; transparent-water updates measured 5.7–9.4 ms. These are environment-specific measurements, not an FPS guarantee for every device.

The static full-quality raster matched the previous renderer at every one of 1,440,000 tested pixels. Transparent-water cache composition matched forced full-geometry redraw. Hidden preallocated photos and ripples correctly appeared and disappeared without stale pixels.

## Verification limit

The managed browser disables WebGL2. Browser interaction and visual checks used the actual-geometry Canvas2D fallback. Primary WebGL2 shadow/shader appearance could not be visually exercised in this browser. Blender CPU proofs verified the same geometry, materials and lighting composition, not the browser's shader execution.

## Art direction

This revision replaces the previous stacked-platform scene and popup-card structure with an integrated landscape and continuous spatial interaction. It does not claim to be an exact reproduction of the reference video. The compressed lower pools remain more orderly than the generated concept; the model is an art-directed travel landscape rather than a geographic survey.
