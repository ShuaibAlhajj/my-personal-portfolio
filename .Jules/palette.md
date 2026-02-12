## 2025-02-12 - Accessible Mobile Menu Pattern
**Learning:** Using a non-semantic 'div' for a mobile menu toggle creates a keyboard trap and prevents screen readers from identifying it as an actionable element. Refactoring to a 'button' with explicit ARIA state synchronization (aria-expanded, aria-controls) is the most robust micro-UX pattern for accessible navigation.
**Action:** Always refactor 'div' or 'a' toggles to semantic 'button' elements and synchronize 'aria-expanded' via JavaScript when state changes.
