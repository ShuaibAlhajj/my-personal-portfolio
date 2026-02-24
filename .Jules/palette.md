## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-02-10 - Accessible Form Feedback Pattern
**Learning:** Replacing browser `alert()` with an in-page success container using `aria-live="polite"` provides a much smoother, non-disruptive user experience while remaining accessible. Combining this with a loading spinner in the submit button provides clear, delightful feedback for asynchronous actions in a static site.
**Action:** Implement a `#form-success` element with `aria-live` and use CSS variables (like `--primary-color`) for consistent, themed feedback styling. Use `.sr-only` labels to fix accessibility without altering minimalist designs that rely on placeholders.
