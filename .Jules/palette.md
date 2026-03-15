## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-01-24 - Accessible Async Form Feedback
**Learning:** Browser 'alert()' calls are disruptive and inaccessible. Using an in-page feedback container with 'aria-live="polite"' provides a smoother, more accessible experience.
**Action:** Replace 'alert()' with semantic feedback elements and ensure labels are linked to inputs even if visually hidden with '.sr-only' for better screen reader support.
