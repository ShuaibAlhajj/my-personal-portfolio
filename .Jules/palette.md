## 2025-05-15 - [Mobile Navigation Bug]
**Learning:** Global mobile styles can inadvertently hide navigation elements on sub-pages if they lack the specific toggle button they expect. Always use specific selectors (like adjacent siblings) to ensure mobile hidden states only apply when a toggle is present.
**Action:** Use `.menu-toggle + .nav-links` instead of a general `.nav-links` rule for mobile hiding.
