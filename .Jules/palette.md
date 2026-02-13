## 2026-02-13 - [Accessible Mobile Menu & Sub-page Visibility]
**Learning:** Using the adjacent sibling selector (`.menu-toggle + .nav-links`) allows for a robust mobile navigation system that automatically hides the menu when a toggle is present but keeps it visible on sub-pages where the toggle is omitted. This reduces code duplication and ensures navigation is never accidentally "trapped" or hidden.
**Action:** Always place the mobile menu toggle button immediately before the navigation list in the DOM to leverage the `+` selector for visibility control.
