## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.
## 2026-04-14 - Contact Form Feedback Loop
**Learning:** Replacing browser-native 'alert()' with in-page feedback and loading states significantly improves the perceived speed and professionalism of a static site.
**Action:** Always implement a loading state (spinner/disabled button) and an ARIA-live-enabled feedback container for asynchronous-simulating operations like form submissions.
