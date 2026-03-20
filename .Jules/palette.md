## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-03-20 - Accessible In-Page Form Feedback
**Learning:** Replacing disruptive browser `alert()` calls with `aria-live` regions and in-page messages significantly improves UX and accessibility. Combining this with a loading spinner provides immediate, non-blocking feedback during asynchronous operations.
**Action:** Implement a hidden `#form-feedback` container with `aria-live="polite"` and update the submit button to show a Font Awesome spinner (`fa-spinner fa-spin`) during processing. Always use `textContent` to safely display user-facing messages.
