// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Dark Mode Toggle - Fixed Implementation
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');

    // Set dark mode by default
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }

    // Check for saved user preference
    if (localStorage.getItem('theme') === 'dark') {
        html.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
    }

    // Copy to Clipboard Functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const textToCopy = btn.getAttribute('data-copy');
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i>';
                btn.style.background = 'var(--accent)';
                btn.style.color = 'white';
                
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.style.background = 'transparent';
                    btn.style.color = 'var(--accent)';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    });

    // Skill Progress Bars Animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgressBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
                observer.unobserve(progressBar);
            }
        });
    };

    const progressObserver = new IntersectionObserver(animateProgressBars, {
        threshold: 0.5
    });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    // Skills Radar Chart
    const skillsChartCanvas = document.getElementById('skillsChart');
    if (skillsChartCanvas && typeof Chart !== 'undefined') {
        const ctx = skillsChartCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Python', 'SQL', 'Power BI', 'Tableau', 'Excel', 'Data Analysis'],
                datasets: [{
                    label: 'Proficiency',
                    data: [90, 95, 90, 85, 90, 95],
                    backgroundColor: 'rgba(49, 130, 206, 0.2)',
                    borderColor: '#3182ce',
                    pointBackgroundColor: '#3182ce',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#3182ce'
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: '#cbd5e0',
                            font: {
                                family: "'Inter', sans-serif",
                                size: 12
                            }
                        },
                        ticks: {
                            display: false,
                            backdropColor: 'transparent'
                        },
                        min: 0,
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Contact Form Placeholder (to be implemented later)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Contact form will be set up soon. For now, please email me directly at gujarati.h@northeastern.edu');
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

});
