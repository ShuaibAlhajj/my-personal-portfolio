document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const closeMenu = () => {
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
            document.body.classList.toggle('no-scroll', isActive);
            
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
    const navItems = document.querySelectorAll('.nav-links a, .logo');

    // Reading Progress Bar
    const navbar = document.querySelector('.navbar');
    let scrollProgress;

    if (navbar) {
        scrollProgress = document.createElement('div');
        scrollProgress.id = 'scroll-progress';
        scrollProgress.setAttribute('role', 'progressbar');
        scrollProgress.setAttribute('aria-label', 'Reading progress');
        scrollProgress.setAttribute('aria-valuenow', '0');
        scrollProgress.setAttribute('aria-valuemin', '0');
        scrollProgress.setAttribute('aria-valuemax', '100');
        navbar.appendChild(scrollProgress);
    }

    // Back to Top Button Logic
    const backToTop = document.getElementById('back-to-top');
    if (backToTop || scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            // Back to Top
            if (backToTop) {
                if (scrollY > 500) {
                    backToTop.classList.add('active');
                } else {
                    backToTop.classList.remove('active');
                }
            }

            // Progress Bar
            if (scrollProgress) {
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                if (totalHeight > 0) {
                    const progress = (scrollY / totalHeight) * 100;
                    scrollProgress.style.width = `${progress}%`;
                    scrollProgress.setAttribute('aria-valuenow', Math.round(progress));
                }
            }
        });

        if (backToTop) {
            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                const homeSection = document.getElementById('home');
                if (homeSection) homeSection.focus();
            });
        }
    }

    // ScrollSpy Implementation
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        rootMargin: '-20% 0px -70% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${id}`;
                    link.classList.toggle('active', isActive);
                    if (isActive) {
                        link.setAttribute('aria-current', 'location');
                    } else {
                        link.removeAttribute('aria-current');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    navItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // Form Submission Handling (Demo)
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');
    const messageArea = document.getElementById('message');
    const charCounter = document.getElementById('char-counter');
    let feedbackTimeout;

    let updateCounter;
    if (messageArea && charCounter) {
        updateCounter = () => {
            const len = messageArea.value.length, max = messageArea.maxLength;
            charCounter.textContent = `${len} / ${max}`;
            charCounter.classList.toggle('limit-reached', len >= max);
            charCounter.classList.toggle('warning', len >= max * 0.9 && len < max);
        };
        messageArea.addEventListener('input', updateCounter);
        if (contactForm) contactForm.addEventListener('reset', () => setTimeout(updateCounter, 0));
        updateCounter();
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const btn = contactForm.querySelector('button');
            const originalHTML = btn.innerHTML;
            
            btn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
            btn.disabled = true;
            if (feedback) feedback.textContent = '';

            setTimeout(() => {
                if (feedback) {
                    feedback.textContent = `Thank you, ${name}! Your message has been sent (demo).`;
                    clearTimeout(feedbackTimeout);
                    feedbackTimeout = setTimeout(() => feedback.textContent = '', 5000);
                }
                contactForm.reset();
                if (updateCounter) updateCounter();
                btn.innerHTML = originalHTML;
                btn.disabled = false;
            }, 1500);
        });
    }


    // Copy to Clipboard for Code Blocks
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
        copyBtn.setAttribute('title', 'Copy code to clipboard');
        copyBtn.innerHTML = '<i class="far fa-copy" aria-hidden="true"></i>';
        block.appendChild(copyBtn);

        let isCopying = false;
        copyBtn.addEventListener('click', () => {
            if (isCopying) return;
            isCopying = true;

            const code = block.querySelector('code').innerText.trim();
            navigator.clipboard.writeText(code).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
                copyBtn.classList.add('copied');
                copyBtn.setAttribute('aria-label', 'Code copied!');
                copyBtn.setAttribute('title', 'Code copied!');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="far fa-copy" aria-hidden="true"></i>';
                    copyBtn.classList.remove('copied');
                    copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
                    copyBtn.setAttribute('title', 'Copy code to clipboard');
                    isCopying = false;
                }, 2000);
            }).catch(() => {
                isCopying = false;
            });
        });
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Copy Email to Clipboard
    const copyEmailBtn = document.querySelector('.copy-email-btn');
    if (copyEmailBtn) {
        let isCopying = false;
        copyEmailBtn.addEventListener('click', () => {
            if (isCopying) return;
            isCopying = true;

            const email = copyEmailBtn.getAttribute('data-email');
            navigator.clipboard.writeText(email).then(() => {
                const icon = copyEmailBtn.querySelector('i');
                const origIcon = icon.className, origAria = copyEmailBtn.getAttribute('aria-label'), origTitle = copyEmailBtn.getAttribute('title');

                icon.className = 'fas fa-check';
                copyEmailBtn.classList.add('copied');
                copyEmailBtn.setAttribute('aria-label', 'Email copied!');
                copyEmailBtn.setAttribute('title', 'Email copied!');

                setTimeout(() => {
                    icon.className = origIcon;
                    copyEmailBtn.classList.remove('copied');
                    copyEmailBtn.setAttribute('aria-label', origAria);
                    if (origTitle !== null) copyEmailBtn.setAttribute('title', origTitle);
                    else copyEmailBtn.removeAttribute('title');
                    isCopying = false;
                }, 2000);
            }).catch(() => {
                isCopying = false;
            });
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
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Move focus to target element
                targetElement.focus();
            }
        });
    });
});
