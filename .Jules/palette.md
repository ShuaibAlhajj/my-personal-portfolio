## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-01-20 - Enhanced Async Feedback Pattern
**Learning:** For static sites without advanced state management, using a dedicated feedback element with `aria-live="polite"` combined with a button loading state (spinner + disabled) provides a smooth, accessible alternative to disruptive browser `alert()` calls.
**Action:** Implement a `form-success-msg` utility class and manage visibility with `setTimeout`, ensuring previous timers are cleared to avoid race conditions during rapid re-submissions.
