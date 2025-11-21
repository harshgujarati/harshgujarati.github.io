// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Remove Loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);

    // Typed.js Initialization
    new Typed('#typed-text', {
        strings: ['Data Analyst', 'Business Intelligence', 'Python Developer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved user preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    observer.observe(stat);
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Skills Radar Chart
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Python', 'SQL', 'Tableau', 'Communication', 'Statistics', 'Web Dev'],
        datasets: [{
            label: 'Proficiency',
            data: [90, 85, 80, 95, 75, 70],
            backgroundColor: 'rgba(0, 212, 255, 0.2)',
            borderColor: '#00D4FF',
            pointBackgroundColor: '#00FF88',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#00FF88'
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
                    color: '#E4E4E7',
                    font: {
                        family: "'Space Grotesk', sans-serif",
                        size: 12
                    }
                },
                ticks: {
                    display: false,
                    backdropColor: 'transparent'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Terminal Easter Egg
const terminalModal = document.getElementById('terminal-modal');
const closeTerminal = document.getElementById('close-terminal');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.querySelector('.terminal-output');
const terminalBody = document.getElementById('terminal-body');

// Open Terminal with Ctrl + ` (Backtick)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '`') {
        terminalModal.style.display = 'flex';
        terminalInput.focus();
    }
});

closeTerminal.addEventListener('click', () => {
    terminalModal.style.display = 'none';
});

// Close on clicking outside
terminalModal.addEventListener('click', (e) => {
    if (e.target === terminalModal) {
        terminalModal.style.display = 'none';
    }
});

// Terminal Commands
const commands = {
    help: "Available commands: <br> - <span class='highlight'>about</span>: Who am I? <br> - <span class='highlight'>skills</span>: My technical skills <br> - <span class='highlight'>projects</span>: View my work <br> - <span class='highlight'>contact</span>: Get in touch <br> - <span class='highlight'>clear</span>: Clear terminal <br> - <span class='highlight'>exit</span>: Close terminal",
    about: "I am Harsh Gujarati, a Data Analyst & Developer passionate about turning data into insights.",
    skills: "Python, SQL, Tableau, Power BI, JavaScript, React, Machine Learning.",
    projects: "Check out my projects section for details on AtliQ Hospitality Dashboard and more.",
    contact: "Email: your.email@example.com | LinkedIn: linkedin.com/in/harsh-gujarati",
    clear: "clear",
    exit: "exit"
};

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = terminalInput.value.trim().toLowerCase();

        // Echo command
        const commandLine = document.createElement('div');
        commandLine.innerHTML = `<span class="prompt">user@portfolio:~$</span> ${input}`;
        terminalOutput.appendChild(commandLine);

        // Process command
        if (input in commands) {
            if (input === 'clear') {
                terminalOutput.innerHTML = '';
            } else if (input === 'exit') {
                terminalModal.style.display = 'none';
            } else {
                const response = document.createElement('p');
                response.innerHTML = commands[input];
                terminalOutput.appendChild(response);
            }
        } else if (input !== '') {
            const error = document.createElement('p');
            error.classList.add('error');
            error.innerText = `Command not found: ${input}. Type 'help' for available commands.`;
            terminalOutput.appendChild(error);
        }

        terminalInput.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});

// Performance Metrics (Mock)
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    document.getElementById('load-time').innerText = (loadTime / 1000).toFixed(2) + 's';
});
