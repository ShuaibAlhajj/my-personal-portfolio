## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-05-27 - Zero-Layout-Shift Inline Feedback
**Learning:** For static sites without complex state management, using the CSS `:not(:empty)` pseudo-class on a feedback container allows for smooth, accessible notifications without "ghost" space or layout shifts. Combined with `aria-live="polite"`, it provides a modern UX that respects screen readers.
**Action:** Implement feedback containers with a base `border: 1px solid transparent` and use `:not(:empty)` to apply background, padding, and visible borders only when content is present.
