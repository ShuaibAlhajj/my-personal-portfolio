## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2024-05-25 - Synchronized Scroll-Positioning and Navigation Feedback
**Learning:** Fixed headers can overlap section targets when using anchor links, and users lose context of their location in long single-page layouts.
**Action:** Use 'scroll-padding-top' on the HTML element to reserve space for the fixed header globally, and implement an 'IntersectionObserver' (ScrollSpy) to dynamically highlight navigation links and update 'aria-current="location"' for improved orientation and accessibility.

## 2024-05-26 - Accessible Skip Links and Focus Management
**Learning:** Implementing a "Skip to main content" link requires more than just an anchor; smooth-scrolling behavior often fails to move the actual keyboard focus, leaving users stuck at the top of the accessibility tree.
**Action:** Always pair skip links with explicit `.focus()` calls in JavaScript after scrolling, and ensure destination sections have `tabindex="-1"` to reliably receive programmatic focus across all browsers.

## 2024-05-27 - Atomic UI Feedback with State Guarding
**Learning:** When implementing interactive feedback loops in JavaScript (like changing a button icon for 2 seconds), multiple rapid clicks can cause overlapping timeouts and reset logic, leading to "stuck" UI states.
**Action:** Use a boolean flag (e.g., 'isCopying') to guard the interaction, ensuring only one feedback cycle runs at a time and resetting the state correctly before allowing the next action.

## 2024-05-28 - Deterministic Counter Reset in Static Forms
**Learning:** Browser-native `form.reset()` does not trigger `input` or `change` events, leaving custom UI overlays (like character counters) in stale states if not handled manually.
**Action:** Always explicitly reset counter text and state-classes (e.g., `.limit-reached`) within the form's submit or reset handler to ensure the visual feedback loop stays synchronized with the actual input state.

## 2026-05-21 - Robust Mobile Navigation and Scroll Management
**Learning:** Implementing background scroll locking for mobile overlays can lead to "stuck" scrolling on desktop if the state isn't cleared or if it's applied globally.
**Action:** Always wrap '.no-scroll' overflow rules in a media query and centralize overlay state management (closing via Escape, logo, or links) into a single function to ensure consistency and prevent state desynchronization.

## 2026-05-22 - Performance-Conscious Scroll Enhancements
**Learning:** Adding dynamic UI elements like Reading Progress Bars that respond to scroll events can impact performance if multiple listeners are added or if they aren't throttled.
**Action:** Consolidate scroll-dependent logic into a single window listener and consider throttling for more complex calculations to ensure a smooth 60fps experience during high-velocity scrolling.

## 2026-05-23 - Progressive Character Counter Feedback
**Learning:** A binary "limit reached" state on character counters can be abrupt for users typing long messages.
**Action:** Implement an "approaching-limit" state (e.g., at 90% capacity) using a distinct color (like amber) to provide a gentle visual warning before the strict limit is hit.

## 2026-05-24 - Secure and Rich Interactive Feedback
**Learning:** Balancing rich UI feedback (like icons) with security (XSS prevention) when displaying user input in success messages requires careful DOM manipulation.
**Action:** Use `innerHTML` for the static/icon structure of a feedback message but target specific sub-elements with `textContent` for any user-provided data to ensure safety without sacrificing visual polish.
