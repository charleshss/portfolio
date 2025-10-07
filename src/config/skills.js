/**
 * Skills Configuration
 * Centralized storage for all skills and technologies
 */

export const skillLevels = {
  BASIC: "basic",
  COMFORTABLE: "comfortable",
  CONFIDENT: "confident"
};

export const skills = [
  // Programming Languages
  { name: "JavaScript", level: skillLevels.CONFIDENT },
  { name: "TypeScript", level: skillLevels.CONFIDENT },
  { name: "Python", level: skillLevels.CONFIDENT },
  { name: "Java", level: skillLevels.COMFORTABLE },
  { name: "C", level: skillLevels.COMFORTABLE },
  { name: "HTML/CSS", level: skillLevels.CONFIDENT },
  { name: "SQL", level: skillLevels.COMFORTABLE },

  // Frameworks & Libraries
  { name: "React", level: skillLevels.CONFIDENT },
  { name: "Node.js", level: skillLevels.CONFIDENT },
  { name: "Next.js", level: skillLevels.COMFORTABLE },
  { name: "Express", level: skillLevels.COMFORTABLE },
  { name: "Django", level: skillLevels.BASIC },
  { name: "Flask", level: skillLevels.COMFORTABLE },
  { name: "FastAPI", level: skillLevels.BASIC },

  // Tools & Technologies
  { name: "Git", level: skillLevels.CONFIDENT },
  { name: "Docker", level: skillLevels.COMFORTABLE },
  { name: "AWS", level: skillLevels.BASIC },
  { name: "PostgreSQL", level: skillLevels.COMFORTABLE },
  { name: "MongoDB", level: skillLevels.COMFORTABLE },
  { name: "Redis", level: skillLevels.BASIC },

  // Concepts & Practices
  { name: "REST APIs", level: skillLevels.CONFIDENT },
  { name: "GraphQL", level: skillLevels.BASIC },
  { name: "CI/CD", level: skillLevels.COMFORTABLE },
  { name: "Testing", level: skillLevels.COMFORTABLE },
  { name: "Agile", level: skillLevels.COMFORTABLE },
  { name: "Accessibility", level: skillLevels.CONFIDENT },
  { name: "Responsive Design", level: skillLevels.CONFIDENT },

  // AI & Machine Learning
  { name: "Machine Learning", level: skillLevels.COMFORTABLE },
  { name: "NLP", level: skillLevels.COMFORTABLE },
  { name: "TensorFlow", level: skillLevels.BASIC },
  { name: "PyTorch", level: skillLevels.BASIC },
];

// Tech logos for the logo loop
export const techStack = [
  { name: "Python", icon: "siPython", color: "#3776AB" },
  { name: "JavaScript", icon: "siJavascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "siTypescript", color: "#3178C6" },
  { name: "React", icon: "siReact", color: "#61DAFB" },
  { name: "Node.js", icon: "siNodedotjs", color: "#339933" },
  { name: "Next.js", icon: "siNextdotjs", color: "#000000" },
  { name: "TailwindCSS", icon: "siTailwindcss", color: "#06B6D4" },
  { name: "PostgreSQL", icon: "siPostgresql", color: "#4169E1" },
  { name: "MongoDB", icon: "siMongodb", color: "#47A248" },
  { name: "Docker", icon: "siDocker", color: "#2496ED" },
  { name: "Git", icon: "siGit", color: "#F05032" },
  { name: "GitHub", icon: "siGithub", color: "#181717" },
  { name: "AWS", icon: "siAmazon", color: "#FF9900" },
  { name: "FastAPI", icon: "siFastapi", color: "#009688" },
  { name: "Flask", icon: "siFlask", color: "#000000" },
  { name: "Java", icon: "siOracle", color: "#F80000" },
  { name: "C", icon: "siC", color: "#A8B9CC" },
  { name: "Linux", icon: "siLinux", color: "#FCC624" },
  { name: "Firebase", icon: "siFirebase", color: "#FFCA28" }
];
