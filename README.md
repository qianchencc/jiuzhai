# 九寨 · 水行记 — The Shape of Water

A continuous, interactive Three.js paper landscape, deployed with Sites.

The current scene restores revision 4: a compact coloured miniature with connected alpine folds, separate ivory snow papers, full coral/apricot fan crowns, finely cut layered fir boughs, turquoise contour shores and drifting paper clouds. Only the subsequent thin-waterfall treatment, softer open-sky lighting and lake-bound water interactions are retained. The later forest redesign and first-person mode are removed.

The visual baseline is scene revision 4 at `17a991252dd3a72af15ebf7b4c08ff530ced7de0`, which was saved as Sites version 5. Scene revision numbers and Sites history numbers differ; this restoration follows the earlier paper-scene screenshots.

## Production
The user-supplied travel-map video informed the creamy paper aesthetic and travel-journal layout. A new image-generation concept established the composition before scenery. The current 3D model is actual editable geometry reconstructed from that concept, not an automatic neural image-to-3D conversion. The optional external image-to-3D provider was declined by the user and is not used.

## Run and build
`npm install` then `npm run build`. Serve `dist` with any static server. No runtime CDN dependencies, server, account or API keys are needed.

`node scripts/bake-light-v2.mjs --ao-rays 12 --shadow-rays 4 --ao-distance 1.4 --sun-radius .065 --sun -13,24,10` samples ambient occlusion and daylight visibility against the actual model with Blender's BVH. It writes `dist/assets/paper-light-v4-water-light.bin`, fingerprinted against the restored geometry. This is lighting data, never a rendered background.

`node scripts/export-model-v2.mjs` exports the current scene with ambient occlusion to `dist/assets/jiuzhai-paper-model.glb` and verifies a GLTFLoader round trip before replacing the asset.

## Experience — restored revision 4
The landscape opens in a centered, freely explorable view. There is no person, journey mode, start action, timeline, ordered destination rail or automatic tour. Left drag rotates, the wheel zooms toward the actual surface under the cursor, Shift/right drag pans, and a double click approaches a landscape detail. Two fingers zoom and pan on touch devices. Home restores the full composition. Arrow keys orbit, Shift+arrows pan, and plus/minus zoom.

Each basin has its own continuous pace: quiet Mirror Lake and Long Lake, broader curved currents at Five Flower Lake, and livelier shallow lower pools. Thin white-cyan water veils and descending streaks follow a shared hydraulic profile into lake-clipped foam. The terrain is excavated against that same profile so rock does not pierce the water. Low bank mist drifts, and paper leaves fall and rest on sampled terrain. Ambient canopy bending uses the WebGL shader; water, falls, foam, mist and leaves use actual geometry in both renderers. Reduced-motion preferences freeze ambient movement.

Mouse feedback respects actual landscape occlusion through a static triangle BVH. All ordinary landscape drags move the camera, including drags that begin over water or trees. Clicking water produces shallow, geometric ripples clipped to that lake's visible contour; holding reveals submerged wood. A light brush through the forest adds a local gust. The paper sun changes the daylight when dragged.

The optional “留一页” writing strip preserves browser-local photos, dates and text. A saved memory remains a physical paper photograph beside the shore walk, with no destination popup card. The postcard control exports an 1800×1300 PNG. The making-of page includes the owner-provided colour/texture reference, labelled as reference, and the downloadable GLB; the initial generated concept remains in the source assets.

The geography is art-directed and compressed; the two upper valleys remain separate and Long Lake has no invented surface-water outlet. This work is not a navigation map.

## Rendering
WebGL2 is primary, with real shadows, baked contact occlusion, paper fibers and ambient/local foliage wind. Browsers without WebGL2 use a Canvas2D renderer of the same Three.js triangles with a real depth buffer, baked daylight visibility and projected photo textures. The fallback continuously animates only small dedicated meshes, keeping the detailed consolidated canopy static. The CPU renderer interpolates lake vertex colours per pixel with perspective correction while preserving flat paper facets elsewhere. Motion resolution temporarily decreases during camera movement and returns to full quality when it stops. It never substitutes a concept image for 3D.

## Privacy and persistence
Notes and compressed photos are stored only in this browser under `jiuzhai-paper-memories:v1:<place>`. No photos or personal notes are uploaded. Clearing browser storage removes these local memories. JPG, PNG and WebP inputs up to 20 MiB are accepted; images are resized locally.

## Sources
https://www.jiuzhai.com/intelligent-service/way-of-play
https://www.jiuzhai.com/about/scenic-spot/eature-spot/6088-2017-11-28-27

## Files
`src/landscape-v2.js`: one continuous carved terrain, irregular basins, parameter-matched waterfalls, a grounded boardwalk and clustered paper forest.
`src/water-sculpture-v4.js`: joined mineral shore terraces, submerged branch silhouettes, thin waterfall veils, shared flow profiles, travertine and foam.
`src/water-surface-v5.js`: shared visible-water contours and geometric lake clipping.
`src/forest-sculpture-v4.js`: deterministic full paper crowns, feather-cut fir boughs, roots and clustered placement.
`src/mountain-sculpture-v4.js`: authored branching ridge graphs, separate snow papers, exact surface sampler and layered clouds.
`src/props.js`: Tibetan houses, flags and reusable construction helpers.
`src/app-v3.js`: free exploration, direct scene interactions and interface.
`src/free-camera-v3.js`: damped orbit, target-aware zoom, pan and focus.
`src/scene-picking-v3.js`: static actual-triangle BVH for occlusion-correct mouse hit testing.
`src/scene-atmosphere-v3.js`: continuous basin currents, falls, foam, mist and settling leaves.
`src/paper-effects-v2.js`: water ripples, paper wind, physical memory leaves and synthesized sound.
`src/baked-light-v2.js`: geometry fingerprint validation and non-destructive lighting application.
`src/memories.js`: local memory/photo storage.
`src/software-renderer.js`: CPU projection fallback.
`dist/index.html`, `dist/style.css`: full-screen landscape, restrained scene caption, view tools and optional writing strip.
`docs/composition.md`, `docs/model-validation-v4-water-light.json`, `docs/verification-v4-water-light.md`: design rationale, current model checks and verification boundaries. Earlier revision reports and screenshots remain as history.
