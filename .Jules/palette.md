## 2026-02-08 - [Mobile Navigation Visibility on Sub-pages]
**Learning:** In static sites with a shared CSS file, a mobile navigation toggle (menu-toggle) may only be present on the homepage. Using a generic '.nav-links { display: none; }' in media queries will hide navigation on sub-pages where no toggle exists, preventing users from navigating back.
**Action:** Use a specific sibling selector like '.menu-toggle + .nav-links { display: none; }' to ensure navigation links are only hidden when a toggle is actually present to control them.
