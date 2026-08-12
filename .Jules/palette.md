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

## 2026-08-07 - Interactive Focus Parity and Button Disabled Styling
**Learning:** Interactive CSS elements with rich `:hover` animations or transforms can leave keyboard/screen-reader users with a stale, non-interactive visual experience if those states are not explicitly mirrored with `:focus-visible` or `:focus-within`. Additionally, visual cues like `cursor: not-allowed` and resets are critical for disabled action buttons in async states.
**Action:** Pair every `:hover` transform or shadow rule with `:focus-visible` (or `:focus-within` for composite elements like `.project-card`), and define explicit `.btn:disabled` overrides with `!important` flags to guarantee proper visual feedback when forms are processing.

## 2026-08-08 - Accessible Warning States and Initialization on Text Input
**Learning:** Dynamic text inputs with hard limits can feel frustrating to users if they are not warned before hitting the limit. Additionally, screen readers need a direct programmatic link to the character counter, and custom text counter indicators can easily get out of sync on initial load if the browser pre-fills fields.
**Action:** Link textareas to counters with `aria-describedby`, implement a warning visual state (e.g. Amber `#f59e0b`) starting at 90% capacity, and always call the counter update function directly on page initialization to synchronize state with any pre-filled browser values.

## 2026-08-12 - Pure CSS Lightweight Tooltips on Temporary Interaction States
**Learning:** Adding interactive, animated tooltip feedback for brief actions (like copy-to-clipboard buttons) using heavy UI libraries or JavaScript DOM injection adds unnecessary size and DOM complexity. Using CSS-only pseudo-elements (`::before`/`::after`) on top of a state class like `.copied` allows for lightweight, GPU-accelerated micro-animations without DOM overhead.
**Action:** Implement lightweight tooltip bubbles using `.button.copied::before` (for container) and `.button.copied::after` (for arrow pointer) using position absolute, white-space: nowrap, pointer-events: none, and subtle fade-in scale transitions. Always adapt the positioning (e.g., top, left, right) depending on the button's surrounding content and boundaries to prevent clipping on viewports.
