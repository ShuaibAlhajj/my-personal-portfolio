# Palette's Journal

## 2026-02-15 - Mobile Navigation Accessibility & Sub-page Visibility
**Learning:** Using the adjacent sibling selector `.menu-toggle + .nav-links` allows for a CSS-only way to ensure navigation remains visible on pages where the toggle is intentionally absent, while still supporting a toggle-based menu on the main page. This combined with semantic `<button>` and ARIA attributes significantly improves the mobile UX across the whole site.
**Action:** Always check if navigation remains accessible on sub-pages when implementing mobile menus. Use semantic buttons and ARIA labels for icon-only toggles.
