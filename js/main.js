document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
            
            // Toggle icon between bars and times
            const icon = menuToggle.querySelector('i');
            if (isActive) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });

    // Form Submission Handling (Demo)
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');
    let feedbackTimeout;

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            
            // Simple validation or visual feedback
            const btn = contactForm.querySelector('button');
            const originalContent = btn.innerHTML;
            
            // Loading state: spinner + text
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            // Clear any existing feedback timeout
            if (feedbackTimeout) clearTimeout(feedbackTimeout);

            // Hide previous feedback
            if (feedback) {
                feedback.classList.add('sr-only');
                feedback.textContent = '';
            }

            // Simulate sending delay
            setTimeout(() => {
                // Restore button
                btn.innerHTML = originalContent;
                btn.disabled = false;

                // Show success message
                if (feedback) {
                    feedback.textContent = `Thank you, ${name}! Your message has been sent (demo).`;
                    feedback.classList.remove('sr-only');

                    // Reset form
                    contactForm.reset();

                    // Hide feedback after 5 seconds
                    feedbackTimeout = setTimeout(() => {
                        feedback.classList.add('sr-only');
                        feedback.textContent = '';
                    }, 5000);
                }
            }, 1500);
        });
    }

    // Smooth Scroll for Anchor Links (Optional JS enhancement for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed navbar height
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
