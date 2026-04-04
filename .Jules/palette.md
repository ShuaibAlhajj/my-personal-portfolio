## 2024-05-24 - Conditional Mobile Navigation Visibility
**Learning:** In static sites with shared CSS but partial HTML reuse, global mobile navigation styles (like `display: none`) can inadvertently hide menus on subpages where the toggle button is missing.
**Action:** Use the adjacent sibling selector (`.menu-toggle + .nav-links`) to apply mobile-hidden states only when the toggle is present in the DOM. This ensures navigation remains accessible on simplified subpages while maintaining the mobile toggle behavior on the main page.

## 2024-05-25 - Reserving Space for Dynamic Feedback
**Learning:** Adding dynamic feedback elements (like form success messages) can cause layout shifts when they appear. Using the `:not(:empty)` pseudo-class combined with a transparent border in the base state (`border: 1px solid transparent`) allows the element to reserve vertical space and transition smoothly without "jumping" the surrounding content.
**Action:** Apply `:not(:empty)` styling to all dynamic UI containers and ensure they have a base transparent border or min-height to minimize Layout Shift (CLS) during user interactions.
