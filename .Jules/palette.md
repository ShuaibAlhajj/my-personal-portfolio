## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-04-19 - Accessible In-Page Feedback for Static Forms
**Learning:** Replacing browser-native `alert()` with a scoped feedback container improves user flow and accessibility. Using `aria-live="polite"` ensures screen readers announce results without interrupting the user.
**Action:** Always implement a dedicated feedback element within the form context for static sites to provide non-disruptive, theme-consistent notifications.
