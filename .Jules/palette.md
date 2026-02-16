## 2025-05-14 - Mobile Nav Consistency and Semantic Buttons
**Learning:** Mobile navigation can be easily broken on sub-pages if the toggle button is missing and the CSS hidden state is globally applied. Using adjacent sibling selectors (`.menu-toggle + .nav-links`) allows for a fallback where navigation remains visible if the toggle isn't present.
**Action:** Always check sub-page navigation on mobile when implementing a toggle. Use semantic `<button>` for toggles and synchronize `aria-expanded` in JS.
