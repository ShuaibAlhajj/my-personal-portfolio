## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-02-20 - Non-disruptive Form Feedback
**Learning:** Browser `alert()` calls are disruptive and break the user's flow, especially in a modern dark-themed SPA. In-page feedback with `aria-live` provides a smoother experience and is more accessible.
**Action:** Replace `alert()` with a styled DOM element that uses `aria-live="polite"` to announce success/error states to screen readers while maintaining visual consistency.
