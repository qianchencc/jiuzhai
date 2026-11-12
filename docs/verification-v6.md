# Revision 6 — first-person walking

## Experience

The toolbar now includes **步入山水**. The whole-scene view enters on the foreground boardwalk at `(0.3, 0.087695, 10.4)` feet height, looking across the lower pools toward the broad waterfall. A composed close view enters beside the currently viewed landscape instead. There is no avatar, prescribed route or automatic movement.

- WASD / arrow keys: move relative to the view.
- Drag: look around; Shift: walk faster.
- Optional **鼠标自由环顾** captures the pointer. Escape releases it; a subsequent Escape returns to the saved bird's-eye view.
- **返回鸟瞰** restores the exact pre-entry composed view. Home restores the full composition.
- Touch layouts provide held directional controls with independent canvas drag-to-look.
- Movement input is cleared on blur, tab hiding and memory/about overlays.
- Daylight, water interaction, memory writing and postcard capture retain their existing controls.

The camera uses a `.64`-unit eye height, `58°` vertical field of view and `.035` near plane. It has gentle acceleration and no head bob. Entry/exit transitions are reduced to immediate changes when reduced motion is requested.

## Navigation

`walk-navigation-v6.js` builds bucket indexes of actual terrain, mountain, mineral shore and boardwalk surfaces. Water polygons, island edges, tree hulls, house footprints and falling-water corridors bound the walkable area. Short swept steps and boundary sliding avoid jumping through thin obstacles. Authored boardwalks can cross water. Large existing cliff/stair discontinuities are stopped at; this mode does not make every part of the compressed miniature physically traversable.

The first visual pass found that the closest safe waterfall shore filled the view with water, while another nearby point was obscured by a crown. Spawn selection now checks useful movement directions, foreground tree coverage, lake elevation and waterfall viewing distance. The default whole-scene entry uses the verified open foreground boardwalk.

## Software renderer correction

Close eye-level views revealed that triangles with a vertex behind the camera were being discarded. The fallback now clips crossing triangles in homogeneous view space and preserves perspective-correct water colours. Ordinary visible triangles retain the original fast path and static caches. The overview ground-shadow ellipse is omitted at eye level.

## Verification

- `node scripts/build.mjs` passed.
- `node scripts/check-walk-camera-v6.mjs`: 17 independent behavior checks passed, including exact view restoration, interrupted transitions, azimuth-only home return, normalized diagonals, no movement during transitions, reduced motion, resize, movement signs and immediate input stop.
- `node scripts/check-walk-navigation-v6.mjs`: 4,000 seeded moves; 1,023 lake points; 360 outer-edge samples; 274 tree centers; four houses; 432 exposed deck samples. No water/edge escapes, buried accepted deck points or nonfinite results. Real bridge crossing retained; large drops blocked.
- `node scripts/check-walk-renderer-v6.mjs`: 69,120 independent pixel/ray comparisons; no coverage or colour mismatches for near-plane and eye-plane crossings.
- Actual browser checks: whole-scene entry, selected Five Flower Lake entry, free walking from boardwalk onto exposed ground, shoreline stopping, drag-to-look, optional pointer lock, first Escape releasing the pointer, subsequent Escape restoring the orbit view, and sunny/dusk switching while walking.
- In the browser, holding D for 1.6 seconds moved the feet from `(0.300,0.088,10.400)` to `(1.731,-0.044,10.228)` on valid ground. A subsequent forward movement met the lake boundary instead of crossing the water.
- No application console errors observed. The browser extension's unrelated metadata transport errors were excluded.

## Evidence and limits

`preview-v6-first-person.jpg` and `preview-v6-first-person-dusk.jpg` are direct browser screenshots, not concept art. `preview-v6-first-person-lake.jpg` records entry at the selected lake.

The managed browser runs the real-geometry software fallback because WebGL2 is unavailable. GPU-specific fibres, canopy wind and real-time shadows were not visually reverified here. Touch controls have static layout/interaction code checks; no physical touch device was used. A browser policy prevented DevTools device emulation, and that restriction was left intact.

The model geometry and its existing GLB export did not change for this navigation feature. Existing lighting data and source assets remain applicable.
