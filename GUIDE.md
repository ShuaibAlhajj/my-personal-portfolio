# Portfolio Website Guide

## 1. How to Edit Text and Skills

### Editing Text (Bio, About Me, etc.)
Open `index.html` in a code editor (like VS Code or Notepad).
- **Name:** Search for `[Your Name]` and replace it with your actual name.
- **Bio:** Look for the `<p class="bio-short">` section to change your short bio.
- **About Me:** Scroll to the `<!-- About Section -->` and edit the text inside the `<p>` tags.

### Editing Skills
Scroll to the `<!-- Skills Section -->` in `index.html`.
Each skill is inside a `<div class="skill-card">`.
To change a skill name or description:
```html
<div class="skill-card">
    <i class="fas fa-pencil-ruler"></i> <!-- Icon -->
    <h3>UI/UX Design</h3> <!-- Skill Name -->
    <p>Creating intuitive...</p> <!-- Description -->
</div>
```

## 2. Where to Replace Social Links

### Projects Section
Look for `<!-- Projects Section -->`.
Update the `href="#"` in the project links:
```html
<a href="YOUR_GITHUB_PROJECT_LINK" class="project-link" target="_blank">...</a>
```

### Contact Section
Look for `<!-- Contact Section -->`.
Update your email and social profiles:
```html
<span>email@example.com</span>
<a href="YOUR_LINKEDIN_URL">LinkedIn Profile</a>
<a href="YOUR_GITHUB_URL">GitHub Profile</a>
```

## 3. How to Deploy using GitHub Pages

1.  **Create a Repository:** Go to GitHub and create a new public repository (e.g., `my-portfolio`).
2.  **Upload Files:** Upload `index.html`, `css/` folder, and `js/` folder to this repository.
3.  **Enable GitHub Pages:**
    *   Go to **Settings** > **Pages**.
    *   Under **Source**, select `main` (or `master`) branch.
    *   Click **Save**.
4.  **View Site:** After a minute, GitHub will give you a URL (e.g., `https://yourusername.github.io/my-portfolio/`).
