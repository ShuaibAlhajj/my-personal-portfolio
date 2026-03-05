## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2025-05-15 - Playwright Verification of `sr-only` Elements
**Learning:** Playwright's `expect(element).toBeHidden()` checks for both visibility and presence in the accessibility tree. Elements styled with the common `.sr-only` pattern (using `clip` and `position: absolute`) are considered "visible" by Playwright because they occupy a 1x1 area and are in the DOM.
**Action:** To verify `sr-only` elements are visually hidden but accessible, check for the presence of the `.sr-only` class and assert that their bounding box dimensions (width/height) are 1x1.
