# 🚀 Personal Portfolio Website

A modern, accessible, and responsive portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience as a software engineer.

**Live Site:** [charleshss.github.io/portfolio](https://charleshss.github.io/portfolio/)

---

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout** - Fully responsive design that works seamlessly across all devices (320px - 1920px+)
- **Dark/Light Mode** - Elegant theme toggle with smooth transitions and persistent user preference
- **Smooth Animations** - React Bits components for beautiful, interactive UI elements
- **Accessibility** - WCAG AA compliant with proper ARIA labels, keyboard navigation, and screen reader support

### 🔧 Technical Highlights
- **Component-Based Architecture** - Modular, reusable React components
- **Configuration System** - Centralised config files for easy content management
- **Performance Optimised** - Lazy loading for images/videos, code splitting, and efficient bundling
- **SEO Friendly** - Proper meta tags, semantic HTML, and optimised content structure
- **British Localisation** - All content uses British English spelling

### 📋 Sections
1. **Hero** - Eye-catching introduction with animated terminal effect and dot grid background
2. **About** - Personal background, education, and what drives me as a developer
3. **Projects** - Showcase of featured projects with live demos and source code
4. **Skills** - Interactive tech stack display with confidence levels and animated logo carousel
5. **Contact** - Modern contact section with social links

---

## 🛠️ Built With

### Core Technologies
- **[React 19](https://react.dev/)** - UI library for building component-based interfaces
- **[Vite](https://vite.dev/)** - Next-generation frontend build tool for faster development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development

### Key Libraries & Tools
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Lucide React](https://lucide.dev/)** - Beautiful, customisable icon library
- **[React Bits](https://reactbits.dev/)** - Animated UI components (LogoLoop, ProfileCard, CardSwap, etc.)
- **[Simple Icons](https://simpleicons.org/)** - SVG icons for popular brands and technologies
- **[OGL](https://oframe.github.io/ogl/)** - Minimal WebGL library for terminal shader effects
- **[GSAP](https://gsap.com/)** - Professional-grade animation library
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utility for conditional className management

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[gh-pages](https://github.com/tschaub/gh-pages)** - Automated deployment to GitHub Pages
- **[Claude Code](https://claude.com/claude-code)** - AI-powered development assistance

---

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── logos/          # Technology logos (SVG)
│   └── me/             # Personal images and videos
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── ...
│   ├── config/         # Centralised configuration
│   │   ├── personal.js     # Personal info & social links
│   │   ├── projects.js     # Project data
│   │   ├── skills.js       # Skills & tech stack
│   │   └── content.js      # UI copy & content
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── index.css      # Global styles
│   └── main.jsx       # Application entry point
└── package.json
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/charleshss/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run deploy     # Deploy to GitHub Pages
```

---

## 🎯 Key Accomplishments

### Accessibility (WCAG AA Compliant)
- ✅ Proper ARIA labels on all interactive elements
- ✅ Keyboard navigation support throughout
- ✅ AA+ colour contrast ratios (16.5:1 text contrast)
- ✅ Screen reader optimisation
- ✅ Reduced motion support for users with motion sensitivity

### Performance
- ✅ Lazy loading for images and videos (`loading="lazy"`, `preload="none"`)
- ✅ Optimised asset delivery
- ✅ Efficient code splitting and bundling
- ✅ First Contentful Paint < 2s

### Security
- ✅ No XSS vulnerabilities
- ✅ Proper external link security (`rel="noopener noreferrer"`)
- ✅ Environment variable protection
- ✅ No hardcoded secrets or credentials

---

## 🔄 Customisation

The project uses a centralised configuration system for easy customisation:

1. **Personal Information** - Update `src/config/personal.js`
2. **Projects** - Modify `src/config/projects.js`
3. **Skills & Tech Stack** - Edit `src/config/skills.js`
4. **UI Content** - Customise `src/config/content.js`

All changes to these config files automatically update across the entire site without needing to modify component code.

---

## 📝 Acknowledgements

This portfolio was initially inspired by PedroTech's tutorial ["Build a BEAUTIFUL Portfolio Website with React.js and TailwindCSS"](https://youtube.com/watch?v=ifOJ0R5UQOc), but has been significantly enhanced and customised with:

- Modern React Bits components for professional animations
- Comprehensive accessibility improvements (WCAG AA compliance)
- Centralised configuration system for maintainability
- British English localisation
- Advanced performance optimisations
- Security hardening
- Custom design elements and interactions

---

## 📄 Licence

This project is open source and available under the [MIT Licence](LICENSE).

---

## 🤝 Connect With Me

- **GitHub:** [@charleshss](https://github.com/charleshss)
- **LinkedIn:** [Charles Suddens-Spiers](https://www.linkedin.com/in/charles-suddens-spiers/)
- **Email:** charlie.suddens-spiers@live.com

---

<div align="center">
  <p>Built with ❤️ using React, Tailwind CSS, and Claude Code</p>
  <p>© 2025 Charles Suddens-Spiers. All rights reserved.</p>
</div>
