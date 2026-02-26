## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.
## 2026-02-26 - Secure UI Updates with User Input
**Learning:** Using `innerHTML` to display user-provided strings (like a "Name" field in a success message) creates XSS vulnerabilities. Even in simple demo scripts, security best practices should be followed.
**Action:** Always prefer `textContent` or `innerText` when injecting unsanitized user input into the DOM to prevent script execution.
