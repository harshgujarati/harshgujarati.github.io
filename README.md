# My Portfolio Website

I built this so anyone who wants to know about my work doesn't have to dig through a resume PDF. Visit the site, and within a few minutes you'll get the full picture - my experience, my projects, the tools I work with, everything. That was the whole point. One place, all of it.

## Why I built it this way

I kept the stack intentionally simple - plain HTML, CSS, and JavaScript, no frameworks. I wanted full control over every detail, and I didn't want the site to be slow or over-complicated for what it needs to do. It loads instantly, works on every device, I wrote all of it myself, so I know exactly how every part works.

## What's on the site

**Experience** - My work at Nation First International (8 Power BI dashboards, 500K+ records queried), Burpshy (cut time-to-hire from 45 to 32 days), and where it all started at Devika Rubber Works building my first real website from scratch.

**Projects** - The ones I'm actually proud of:
- AtliQ Hospitality Revenue Analytics Dashboard (Power BI, DAX, SQL - 134,590 booking records across 25 properties)
- Airline Management System (10 normalized tables, stored procedures, full booking workflow automation)
- House Price Prediction (81.8% accuracy across 13,320 properties using Scikit-learn + GridSearchCV)
- AR Art Home Decor (Unity + MySQL - also got published in IJFMR)

**Skills & Tech Stack** - Python, SQL, Power BI, Tableau, Java, and all the libraries I actually use day to day (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn).

**Certifications** - Microsoft Power BI Data Analyst Associate, Oracle AI Vector Search Professional, Oracle Generative AI Professional.

**Education** - MS in Information Systems at Northeastern University (Boston), BE in Information Technology from Mumbai University.

A few things I spent extra time on while building it - getting the dark/light mode to work cleanly across every single section without anything breaking, making the responsive layout actually feel good on mobile (not just technically work), and the AOS scroll animations that make the sections feel smooth when you navigate through.

## Running it locally

No installs, no setup.

```bash
git clone https://github.com/harshgujarati/portfolio
cd portfolio
open index.html
```

Or just open `index.html` directly in your browser.

## File structure

```
├── index.html      # Everything lives here
├── style.css       # All styling, themes, dark mode variables
├── script.js       # Dark mode toggle, scroll animations, mobile menu, form logic
└── README.md       # This
```

## Want to use this as a base?

Go ahead. Swap out the content in `index.html` with your own experience and projects. Colors are all CSS variables in `:root` and `[data-theme="dark"]` inside `style.css` — change those and the whole theme updates.

## Reach out

📧 gujarati.h@northeastern.edu  
📱 +1 (857) 565-9619  
📍 Boston, MA  
🔗 [LinkedIn](https://linkedin.com/in/harshgujarati) · [GitHub](https://github.com/harshgujarati)