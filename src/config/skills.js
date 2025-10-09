/**
 * Skills Configuration
 * Centralised storage for all skills and technologies
 */

// Categories (machine-friendly values, human labels optional)
export const skillCategories = {
  ALL: "all",
  LANGUAGES: "languages",
  FRAMEWORKS: "frameworks",
  TOOLS: "tools",
  PRACTICES: "practices",   // optional: separates concepts like CI/CD, APIs
  SOFT_SKILLS: "soft-skills",
};

// Order you want to show in the UI
export const categories = [
  skillCategories.ALL,
  skillCategories.LANGUAGES,
  skillCategories.FRAMEWORKS,
  skillCategories.TOOLS,
  skillCategories.PRACTICES,
  skillCategories.SOFT_SKILLS,
];

// Confidence levels (single source of truth for colour and label)
export const confidenceLevels = {
  basic: { label: "Basic", color: "var(--skill-basic)" },
  comfortable: { label: "Comfortable", color: "var(--skill-comfortable)" },
  confident: { label: "Confident", color: "var(--skill-confident)" },
};

// Skills — easy to add/remove/edit
export const skills = [
  // Languages
  { name: "Java", confidence: "comfortable", category: "languages" },
  { name: "Python", confidence: "confident", category: "languages" },
  { name: "C++", confidence: "comfortable", category: "languages" },
  { name: "Scala", confidence: "confident", category: "languages" },
  { name: "HTML", confidence: "comfortable", category: "languages" },
  { name: "CSS", confidence: "comfortable", category: "languages" },
  { name: "JavaScript", confidence: "comfortable", category: "languages" },
  { name: "TypeScript", confidence: "comfortable", category: "languages" },
  { name: "SQL", confidence: "basic", category: "languages" },

  // Frameworks & CMS
  { name: "React", confidence: "comfortable", category: "frameworks" },
  { name: "Next.js", confidence: "comfortable", category: "frameworks" },
  { name: "Django", confidence: "comfortable", category: "frameworks" },
  { name: "Sanity CMS", confidence: "comfortable", category: "frameworks" },
  { name: "JavaFX", confidence: "basic", category: "frameworks" },
  { name: "jQuery", confidence: "comfortable", category: "frameworks" },
  { name: "Tailwind CSS", confidence: "comfortable", category: "frameworks" },

  // Tools & Services
  { name: "Git/GitHub", confidence: "confident", category: "tools" },
  { name: "VS Code", confidence: "confident", category: "tools" },
  { name: "Resend", confidence: "comfortable", category: "tools" },
  { name: "Claude AI", confidence: "confident", category: "tools" },
  { name: "OpenAI (ChatGPT)", confidence: "confident", category: "tools" },
  { name: "Trello", confidence: "confident", category: "tools" },
  { name: "Google Cloud", confidence: "comfortable", category: "tools" },
  { name: "AWS services", confidence: "comfortable", category: "tools" },
  { name: "Microsoft Entra ID", confidence: "basic", category: "tools" },

  // Practices (optional conceptual bucket)
  { name: "CI/CD pipelines", confidence: "confident", category: "practices" },
  { name: "APIs", confidence: "confident", category: "practices" },
  { name: "JSON", confidence: "confident", category: "practices" },
  { name: "Agile/SCRUM methodologies", confidence: "confident", category: "practices" },

  // Soft skills
  { name: "Communication", confidence: "confident", category: "soft-skills" },
  { name: "Teamwork", confidence: "confident", category: "soft-skills" },
  { name: "Problem-solving", confidence: "confident", category: "soft-skills" },
  { name: "Adaptability", confidence: "confident", category: "soft-skills" },
  { name: "Time management", confidence: "confident", category: "soft-skills" },
  { name: "Leadership", confidence: "comfortable", category: "soft-skills" },
  { name: "Resilience", confidence: "confident", category: "soft-skills" },
];

// Tech logos for the logo loop
export const techStack = [
  { name: "Python", icon: "siPython", href: "https://www.python.org" },
  { name: "Scala", icon: "siScala", href: "https://www.scala-lang.org" },
  { name: "JavaScript", icon: "siJavascript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { name: "TypeScript", icon: "siTypescript", href: "https://www.typescriptlang.org" },
  { name: "C++", icon: "siCplusplus", href: "https://isocpp.org" },
  { name: "SQL", icon: "siMysql", href: "https://www.mysql.com" },
  { name: "HTML", icon: "siHtml5", href: "https://developer.mozilla.org/docs/Web/HTML" },
  { name: "CSS", icon: "siCss", href: "https://developer.mozilla.org/docs/Web/CSS" },
  { name: "React", icon: "siReact", href: "https://react.dev" },
  { name: "Next.js", icon: "siNextdotjs", href: "https://nextjs.org" },
  { name: "Django", icon: "siDjango", href: "https://www.djangoproject.com" },
  { name: "Sanity", icon: "siSanity", href: "https://www.sanity.io" },
  { name: "Tailwind CSS", icon: "siTailwindcss", href: "https://tailwindcss.com" },
  { name: "Git", icon: "siGit", href: "https://git-scm.com" },
  { name: "GitHub", icon: "siGithub", href: "https://github.com" },
  { name: "Claude", icon: "siClaude", href: "https://claude.ai" },
  { name: "ChatGPT", icon: "siOpenai", href: "https://openai.com" },
  { name: "Google Cloud", icon: "siGooglecloud", href: "https://cloud.google.com" },
  { name: "Resend", icon: "siResend", href: "https://resend.com" }
];
