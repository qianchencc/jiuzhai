# Restored scene V4, with waterfall, lighting and water-interaction improvements

## Requested scope and baseline

The owner requested a return to V4 while retaining only the waterfall, lighting and water-interaction improvements. This restores the paper-scene revision shown in the earlier screenshots: source `17a991252dd3a72af15ebf7b4c08ff530ced7de0`, saved as Sites version 5. The scene's own revision numbers are offset from the native Sites history numbers. The ambiguity was explained; the optional selection returned no answer, so implementation followed the earlier screenshot's internal V4, as stated in the progress update.

The dense full fan crowns, layered firs, mountain ridge/snow/cloud construction, original land/moss palette, scene composition, free camera and V4 interface are restored. The forest, mountain and free-camera source files are byte-identical to that baseline. First-person camera/navigation modules and their runtime interface have been removed; historical screenshots and reports remain as history.

Retained changes are the thin animated waterfall veils and descending flow strokes; shared waterfall profiles with the necessary terrain clearance and pale cliff shoulders; visible-lake masks for water foam and ripples; the small water cursor; softer sunlight and open-sky fill; and the matching renderer/lighting support. No additional scene redesign is included.

## Regenerated artifacts

- Current application bundle: `dist/app.js`, built with `node scripts/build.mjs`.
- Lighting: `dist/assets/paper-light-v4-water-light.bin`, 1,482,486 bytes, geometry fingerprint `b6f548c1`. Rebuilt against 741,051 bake vertices using 12 ambient rays and 4 sun rays, AO distance 1.4, sun radius 0.065 and direction (-13, 24, 10).
- Model: `dist/assets/jiuzhai-paper-model.glb`, 21,720,880 bytes. All 259,685 triangles survive the GLTFLoader round trip; bounds are unchanged and every mesh retains vertex color. The file remains 4,493,520 bytes below the Sites per-file limit. See `model-validation-v4-water-light.json`.
- The HTML model label and cache versions point to the regenerated artifact and restored scene bundle.

## Water regression checks

Existing checks now accept an optional output path; previous V5 reports were preserved.

| Command | Result |
| --- | --- |
| `node scripts/check-water-surface-v5.mjs --out=docs/water-surface-validation-v4-water-light.json` | 8 lake surfaces, 6,624 cases and 681,489 emitted triangles; no shoreline escapes. Actual dynamic ripple buffers remain on the water surface, with maximum height error 1.15e-7. A waterfall correctly rejects a horizontal ripple. Maximum required capacity is 470 triangles versus 1,024 allocated. |
| `node scripts/check-waterfall-v5.mjs --out=docs/waterfall-validation-v4-water-light.json` | 761,653 samples; no surface/foam escapes or non-finite values. Animation changes 4,925 position components. |
| `node scripts/check-fall-clearance-v5.mjs --out=docs/fall-clearance-validation-v4-water-light.json` | 371,912 samples across all 4 falls and 8 phases; no penetration of actual triangulated terrain. Minimum measured clearance is 0.0168 world units. |

These checks use visible-water contours, including the self-intersecting lower Shuzheng contour, and actual terrain triangle vertices, midpoints and centroids. They validate geometry constraints, not aesthetic quality by themselves.

## Browser inspection

Actual browser inspection used the managed preview at `http://127.0.0.1:4173/` and the restored build. No generated image was substituted for a rendered scene.

- The full composition was visually compared with the saved `preview-v4-desktop.jpg`. Mountain silhouettes, tree style/placement and scene framing match the earlier V4. The waterfall and light changes are visible.
- Double-clicking the central waterfall moves into the original close-up view; Home returns to the complete miniature.
- A lake-edge click produces faint elliptical wave fronts on the lake plane; the shoreline clips the arcs. The former large screen-space water cursor ring is absent.
- Day/dusk control switches successfully and the selected label/state updates. The V4 view tools and original free-navigation hints are present. No walking entry, HUD or first-person instruction remains.
- Runtime DOM reports `sceneVersion=4-water-light`, `navigation=free`, `people=0`, `paperLight=ready`, `renderQuality=full`, and 259,685 landscape triangles.
- The compiled bundle contains the new bake filename and no `walk-toggle`, `walk-hud`, `first-person` or `pointerlockchange` remnants.
- `git diff --check` passes.

### Actual preview screenshots

- `preview-v4-water-light-desktop.jpg`: restored daytime composition.
- `preview-v4-water-light-falls.jpg`: settled full-quality waterfall close-up.
- `preview-v4-water-light-ripple.jpg`: two faint surface-bound wave fronts near the right shoreline.
- `preview-v4-water-light-dusk.jpg`: dusk state and full composition.

## Verification boundaries

This browser used the real-geometry Canvas2D fallback (`renderer=software-geometry`), because WebGL2 is unavailable in the managed browser. The screenshots prove that renderer's appearance and the exercised desktop controls. WebGL shaders, hardware shadow appearance and physical touch-device behavior were not re-certified in this rollback. The existing WebGL path and V4 touch camera bindings are retained. The portable GLB is a static model, while the site owns the interactive animation.

The restored V4 forest is intentional; its later redesign is not retained. No new claims of canopy collision correction are made for this version.
