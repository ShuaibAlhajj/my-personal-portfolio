## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-01-28 - Zero-Layout-Shift Feedback Containers
**Learning:** To prevent layout shifts when injecting dynamic feedback (like form success messages), use the CSS `:not(:empty)` pseudo-class. By setting base styles with transparent borders and no padding, and then applying visible styling only when the container has content, you ensure a smooth entrance (especially when paired with animations) without "ghost" spaces.
**Action:** Always wrap dynamic feedback in a container styled with `:not(:empty)` and use `textContent` in JS to trigger the state change safely.
