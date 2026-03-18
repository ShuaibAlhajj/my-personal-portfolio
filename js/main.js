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
    const feedbackMsg = document.getElementById('form-feedback');
    let feedbackTimeout;

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const btn = contactForm.querySelector('button');
            const originalHTML = btn.innerHTML;
            
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            if (feedbackTimeout) clearTimeout(feedbackTimeout);
            if (feedbackMsg) feedbackMsg.textContent = '';

            // Simulate sending delay
            setTimeout(() => {
                if (feedbackMsg) {
                    feedbackMsg.textContent = `Thank you, ${name}! Your message has been sent.`;
                    feedbackTimeout = setTimeout(() => {
                        feedbackMsg.textContent = '';
                    }, 5000);
                }

                contactForm.reset();
                btn.innerHTML = originalHTML;
                btn.disabled = false;
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
