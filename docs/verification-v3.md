# Revision 3 — free landscape exploration

## User request
Remove people and linear guidance. Concentrate on each landscape, its visual language, continuous motion and mouse browsing.

## Removed
The active application contains no traveller, guided camera, start action, playback, journey progress, numbered destination rail or scene popup cards. Their controls are removed from HTML rather than hidden. The original boardwalk remains physical scenery. Existing local memory keys are preserved.

## Camera and hit testing
The camera module uses time-based damping, a centered responsive home view, bounded orbit, terrain-aware pan and pointer-targeted zoom. Input ownership is consistent across scenery: ordinary drags rotate even if they start over water or foliage; Shift/right drag pans. Double click focuses the actual picked place. Arrow keys orbit, Shift+arrows pan, plus/minus zoom and Home resets. Pinch supports zoom and centroid pan, with the remaining finger continuing an orbit when the other is lifted.

The actual static landscape is indexed by a triangle BVH: 18 meshes, 232,653 triangles, 36,367 nodes, maximum depth 22, approximately 12.55 MB. Forty rays from four directions matched native Three.js Raycaster objects with maximum distance error 4.98e-14. On the measured environment, build took about 150 ms; 40 native queries took 431 ms and the BVH took 2.43 ms cold. 4000 warmed queries averaged 0.0048 ms. These are measurements, not device-independent performance guarantees. Maximum distance, zero direction components, non-unit direction and visibility cases passed.

Camera checks passed for finite bounded extreme inputs, focus convergence, no initial pose jump, terrain clearance, responsive home framing and a settled idle state. Equal-duration 30 Hz and 60 Hz updates differ by 2.7e-15 world units. 390×844 home radius is 89.43.

## Dynamics and placement
A separate preallocated module animates 44 curved lake strokes, 42 downward waterfall highlights, 12 foam bands, 4 low mist ribbons and 28 folded leaves. Mirror Lake, Long Lake and the lower pools have deliberately different movement rates. The detailed landscape and baked-light fingerprint remain unchanged. 3960 sampled moving lake-stroke vertices across three times and a strong disturbance all stayed inside their corresponding actual basins.

Paper leaves sample the underlying terrain, drift down, rest, fade and recycle. WebGL canopy movement combines continuous breeze and local pointer gusts. The software renderer keeps the large consolidated canopy static, while all water/fall/foam/mist/leaf effects are actual animated geometry.

Fall highlights were checked against the actual folded surface: minimum forward clearance 0.02775 scene units. Their contrast and coverage were increased after real browser screenshots showed the earlier highlights were too subtle. Lake strokes were made fewer, longer and curved after the close view showed an overly regular pattern.

Reduced-motion preferences freeze ambient geometry time and the WebGL wind clock. Application review fixed touch continuation after a pinch, and pins explicitly selected memory/place identity until manual camera movement, preventing a nearby anchor from changing the edited memory.

## Browser verification
The managed browser disables WebGL2, so runtime checks use the same geometry through the software renderer. The page reports navigation=free, people=0, sceneVersion=3 and paperLight=ready. Primary WebGL shader appearance remains a verification limit.

Actual desktop and 390×844 mobile full compositions were inspected. Double-click focusing and home reset were exercised. Mobile memory controls open and close without displacing the canvas. No test personal content was written.

After the final build, a drag beginning on the waterfall pool changed the camera angle, Shift+ArrowRight panned, and a wheel gesture changed camera radius from 12.50 to 20.61 without moving along a route. Home restored the centered overview. Full-quality rendering returned after the camera settled.

A 96-frame actual browser screen capture at a fixed waterfall camera spans 5.216 seconds. Comparing its first and last frames found 26,497 changed pixels inside the waterfall region, confirming motion without input or camera change. The encoded H.264 proof is `preview-v3-falls.mp4` (1364×936, 5.27 seconds). This is browser footage, not a concept render.

Proof images: `preview-v3-desktop.jpg`, `preview-v3-mobile.jpg`, `preview-v3-mobile-editor.jpg`, `preview-v3-falls.jpg`, `preview-v3-orbit.jpg`. Screenshots were saved from actual browser output. The temporary mobile iframe wrapper was removed from deployment. The final deployment assets all fit the 25 MiB single-file limit; the unchanged 22,354,572-byte GLB remains the largest file.


Final lake close view is saved as `preview-v3-lake.jpg`. The existing memory editor was checked without saving test content. No unrelated browser storage was accessed or cleared.
