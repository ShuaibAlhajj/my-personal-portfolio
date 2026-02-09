## 2025-05-15 - Improving Mobile Navigation Resilience & Accessibility

**Learning:** Navigation visibility logic that relies on a mobile menu toggle can inadvertently hide navigation on sub-pages if the toggle is absent. In this repo, a global CSS rule was hiding `.nav-links` on all small screens, but the toggle button only existed on the home page. Additionally, converting a generic `div` to a semantic `button` for the mobile menu is critical for screen reader support via `aria-expanded`.

**Action:** Use sibling selectors like `.menu-toggle + .nav-links` to ensure navigation hiding is scoped only to contexts where a toggle actually exists. Always implement "Skip to main content" links in static portfolios to improve keyboard navigation efficiency.
