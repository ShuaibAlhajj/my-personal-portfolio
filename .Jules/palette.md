## 2025-05-23 - Sub-page Mobile Navigation Visibility
**Learning:** In static portfolio sites, sub-pages often copy navigation HTML but may miss the mobile toggle button. If CSS uses a sibling selector (like `.menu-toggle + .nav-links`) to hide the menu on mobile, the absence of the `.menu-toggle` element can cause the navigation to remain hidden permanently on mobile sub-pages.
**Action:** Always ensure the mobile toggle element is present on all pages sharing the same navigation CSS, or adjust CSS selectors to be defensive against missing toggle elements.

## 2025-05-23 - Keyboard Accessibility in Sub-pages
**Learning:** "Skip to main content" links are often implemented only on the homepage. Users navigating directly to sub-pages (e.g., from a search result or shared link) still need these links to bypass repetitive navigation.
**Action:** Treat every page as a primary entry point and include skip-to-content links and proper focus management on all of them.
