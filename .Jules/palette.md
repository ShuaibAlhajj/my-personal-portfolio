## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2024-05-25 - Synchronized Scroll-Positioning and Navigation Feedback
**Learning:** Fixed headers can overlap section targets when using anchor links, and users lose context of their location in long single-page layouts.
**Action:** Use 'scroll-padding-top' on the HTML element to reserve space for the fixed header globally, and implement an 'IntersectionObserver' (ScrollSpy) to dynamically highlight navigation links and update 'aria-current="location"' for improved orientation and accessibility.

## 2026-01-15 - Balancing Custom CSS with PR Constraints
**Learning:** Adding interactive global elements like a "Back to Top" button often requires custom CSS not present in the base system. To adhere to strict PR line limits, condensing these utility styles into single lines preserves functionality without bloating the diff.
**Action:** Use condensed CSS syntax for secondary UX components to keep PRs under 50 lines while meeting modern accessibility standards (like 'visibility: hidden' for non-active overlays).
