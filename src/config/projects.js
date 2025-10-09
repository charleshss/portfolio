/**
 * Projects Configuration
 * Centralised storage for all project data
 */

export const projects = [
  {
    title: "Photography Portfolio for a Client",
    description:
      "A high-performance photography portfolio with EXIF-driven location tagging. Content is fully editable in Sanity with Google Maps integration for readable place names, and it’s deployed on Vercel with responsive imagery.",
    image: "projects/photography-portfolio.png",
    tags: ["Next.js", "React", "Javascript", "Tailwind", "Sanity", "Google Maps API", "EXIF", "Vercel", "Client"],
    demoUrl: "https://samuelss.photography",
    githubUrl: "https://github.com/charleshss/photography-portfolio"
  },
  {
    title: "Conversate",
    description:
      "A real-time translation web app for North Yorkshire Council that supports seamless multilingual communication. It combines speech-to-text, instant translation and text-to-speech, and generates PDF transcripts using AWS services.",
    image: "projects/conversate.png",
    tags: ["React", "Typescript", "AWS", "Accessible", "Group"],
    demoUrl: "https://www.conversateapp.com",
    githubUrl: "https://github.com/translation-nyc/nyc-translation-app"
  },
  {
    title: "Interactive Visualisation",
    description:
      "A data visualisation analysing Premier League transfer spending versus on-pitch performance. It includes smooth zoom/pan, dynamic filtering, and interactive charts with detailed team statistics.",
    image: "projects/pl-vis.png",
    tags: ["Javascript", "D3.js", "Data Visualisation", "Interactive", "Solo"],
    demoUrl: "https://charleshss.github.io/pl-performance-vs-spend/",
    githubUrl: "https://github.com/charleshss/pl-performance-vs-spend"
  },
  {
    title: "Digital Doctor",
    description:
      "A multilingual symptom-checking web application built around the Healthily API and Google Cloud Translate. It supports 10+ languages and was developed with data-security compliance in mind.",
    image: "projects/doctor.png",
    tags: ["Python", "Django", "APIs", "Accessible", "Solo"],
    demoUrl: null,
    githubUrl: "https://github.com/charleshss/DigitalDoctor"
  },
  {
    title: "Greggor Financial Companion",
    description:
      "Collaborative budgeting web app that helps users track spending by category, set per-category and overall limits, and receive warnings as they approach or exceed targets. Supports receipts (photo/file) on transactions, editable categories, and gamified motivation, plus reports and charts over chosen timeframes. Built with Django; deployed on PythonAnywhere.",
    image: "projects/gfc.png",
    tags: ["Python", "Django", "PostgreSQL", "Charts", "Reports", "Receipts", "Gamification", "Group"],
    demoUrl: null,
    githubUrl: "https://github.com/Gregg-s-Fan-Club/Greggor-Financial-Companion"
  }
];
