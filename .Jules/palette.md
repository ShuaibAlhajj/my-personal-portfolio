## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2026-03-07 - Enhanced Contact Form Feedback and Accessibility
**Learning:** Using placeholders as the sole identifier for form inputs is an accessibility anti-pattern. Providing visually hidden labels (.sr-only) preserves the minimal design while ensuring screen reader compatibility. Additionally, replacing disruptive browser alerts with in-page feedback containers using aria-live="polite" creates a more seamless and modern user experience.
**Action:** Always pair placeholder-only inputs with .sr-only labels and prioritize in-page feedback loops (spinners and status messages) over native browser dialogs.
