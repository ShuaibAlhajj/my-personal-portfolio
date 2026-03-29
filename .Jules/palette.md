## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-01-20 - Non-disruptive Form Feedback
**Learning:** Replacing browser alert() with in-page feedback and loading states improves user flow. Using the CSS :not(:empty) pseudo-class on a feedback container allows for styling to be applied only when content is present, preventing "ghost" layout shifts.
**Action:** Implement a hidden feedback container with aria-live="polite" and a loading state for async submissions. Use :not(:empty) in CSS to manage styling.
