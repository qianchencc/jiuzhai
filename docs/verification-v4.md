# Revision 4 — reference-led paper miniature

## Art direction and material changes
The owner-provided reference, `dist/assets/jiuzhai-colour-reference.png`, is the colour and craft target. It is labelled as a reference in the making-of page. The live world is actual Three.js geometry; neither that reference nor the earlier generated concept substitutes for the navigable scene.

The principal geometry remains a compact connected valley. Changes include joined cream/mint/jade contour shores, independent lake palettes, visible low-contrast submerged branch silhouettes, broad unequal folded waterfall sheets, notched lips, travertine shoulders, rounded paper foam, 570 full paper trees, five/six-tier feather-cut fir boughs, fuller coral/apricot/gold fan crowns, authored branching alpine ridges with separate ivory snow sheets, three cream paper clouds, a short foreground boardwalk and five warm cut-paper perimeter strata. Terrain shore grading is broader; meadows keep continuous normals while intentional paper folds retain sharp creases.

## Visual inspection
Actual browser screens were inspected at desktop 1363×936 and in a 390×844 mobile iframe. `preview-v4-desktop.jpg`, `preview-v4-falls.jpg`, `preview-v4-lake.jpg`, `preview-v4-orbit.jpg`, `preview-v4-dusk.jpg`, `preview-v4-mobile.jpg` and `preview-v4-mobile-editor.jpg` are browser captures. The short MP4 is assembled from 64 actual fixed-camera screenshots at measured capture timing.

Observed and corrected defects during iteration:
- Original new peaks still resembled single pyramids: replaced with lower asymmetric zigzag shoulders and subsidiary peaks.
- Autumn crowns looked fragmented: widened rounded fans, added overlapping volume, softened the cut edges, and opened Five-Color Pond's front apron.
- Firs had oversized diamond boughs: replaced with finer feather-cut outlines and five/six tiers.
- Waterfall sheets remained too regular: deepened unequal folds, bunched flow paths, broke the crest and rock arrangement, and rounded the foam.
- Thin water-edge sidewalls produced dark dotted edges: replaced with shared joined terrace/bevel profiles, checked all shore normals face upward.
- CPU water displayed triangular colour patches: added perspective-correct interpolation only for lake colours, leaving the deliberate paper facets elsewhere.
- Grounding shadow was concealed beneath the island: expanded and offset the warm shadow so it remains visible at the edge.

## Interaction observations
The page reports zero people and free navigation. Dragging from water rotates the real scene; double-click approaches Nuorilang and Five Flower Lake; home returns to the composition; day/dusk toggles update the scene. No timeline, ordered destination rail, start-journey action, autoplay or scenic popup cards were reintroduced. The mobile memory strip opens and closes without blocking its controls; no personal memory test content was saved.

The native browser was brought to the foreground for the final motion recording. On the tested software renderer, settled full-quality frame diagnostics observed roughly 9–12 ms for these views; these are observations in this environment, not a cross-device performance guarantee. Camera motion temporarily uses a lower raster resolution, then restores a 1.25× supersampled static view.

## Geometry and rendering checks
- 273,197 static scene triangles; 570 trees (342 firs, 228 autumn); 37 scene meshes, including 12 cloud meshes excluded from occlusion baking.
- 12 ambient visibility rays and 4 sun rays sampled against 233,637 opaque triangles. Runtime lighting fingerprint `b22e4c55`; 812,391 baked vertices. Browser reports `paperLight=ready`.
- Ten actual scene rays compared with Three.Raycaster: identical hit objects; maximum distance error 2.14e-14.
- Water raster check: 42,710 common pixels across opposite triangle diagonals, 7,081 continuous colours, zero maximum channel difference; non-water pixel/depth output remains exact. Transparency reveal/restore and colour updates match fresh rendering.
- GLB re-import preserves all 273,197 triangles, world bounds, finite geometry and vertex colours. Export-only shared vertices reduce 819,591 runtime vertices to 665,536; maximum 16-bit colour error 7.63e-6. Asset is 23,892,228 bytes, below the Sites file limit. Details in `model-validation-v4.json`.
- Production build and syntax checks pass. Inspected error logs contained only the browser extension metadata error, no application errors.

## Verification boundary
The managed test browser does not provide WebGL2 and used the actual-geometry CPU fallback. The WebGL-specific paper-fibre shader, moving canopy and real-time shadow maps are retained in the implementation, but their GPU appearance was not visually verified here. CPU water, falls, foam, mist, leaves and cloud movement were observed. The camera and scene are fully three-dimensional in both renderers.

The work remains a procedural reconstruction guided by imagery, not a neural image-to-3D conversion. The declined provider was not used. Geography is artistically compressed, and Long Lake retains no invented surface-water outlet.
