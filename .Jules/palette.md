## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2024-05-25 - Synchronized Scroll-Positioning and Navigation Feedback
**Learning:** Fixed headers can overlap section targets when using anchor links, and users lose context of their location in long single-page layouts.
**Action:** Use 'scroll-padding-top' on the HTML element to reserve space for the fixed header globally, and implement an 'IntersectionObserver' (ScrollSpy) to dynamically highlight navigation links and update 'aria-current="location"' for improved orientation and accessibility.

## 2024-05-26 - Accessible Skip Links and Focus Management
**Learning:** Implementing a "Skip to main content" link requires more than just an anchor; smooth-scrolling behavior often fails to move the actual keyboard focus, leaving users stuck at the top of the accessibility tree.
**Action:** Always pair skip links with explicit `.focus()` calls in JavaScript after scrolling, and ensure destination sections have `tabindex="-1"` to reliably receive programmatic focus across all browsers.
