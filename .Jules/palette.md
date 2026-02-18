## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2024-05-25 - Form Accessibility and In-Page Feedback
**Learning:** Placeholders are not a substitute for labels. Adding visually hidden labels (`.sr-only`) ensures screen reader accessibility without altering the visual design. Furthermore, replacing intrusive browser `alert()` with an `aria-live` polite status area provides a smoother, more modern feedback loop that is also announced to assistive technology.
**Action:** Always include associated `<label>` elements for inputs. Use `aria-live="polite"` containers for dynamic form feedback to ensure accessibility and a non-disruptive UX.
