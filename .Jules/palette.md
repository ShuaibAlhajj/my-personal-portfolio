## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2025-05-15 - Accessible Form Feedback
**Learning:** Replacing browser `alert()` with in-page success messages improves UX continuity and accessibility. Using `aria-live="polite"` ensures screen readers announce the feedback.
**Action:** Always provide non-disruptive, accessible feedback for form submissions and use `sr-only` labels when visual labels are omitted to maintain a clean design without sacrificing accessibility.
