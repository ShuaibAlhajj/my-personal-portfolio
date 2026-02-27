## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-01-20 - Non-disruptive Form Feedback
**Learning:** Using browser `alert()` for form confirmation is disruptive and poor UX. In-page feedback with `aria-live="polite"` provides a smoother, more accessible experience.
**Action:** Replace `alert()` with a styled notification element, using `textContent` for security and `aria-live` for screen reader accessibility.
