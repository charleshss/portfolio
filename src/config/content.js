/**
 * Content Configuration
 * Centralised storage for UI copy and content throughout the site
 */

export const navigation = {
  items: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ]
};

export const hero = {
  description: "Driven computer scientist eager to create impactful solutions by combining problem-solving skills, modern frameworks, and a user-centred approach.",
  ctaText: "View My Work",
  ctaHref: "#projects",
  scrollText: "Scroll"
};

export const about = {
  sectionTitle: "About",
  sectionTitleHighlight: "Me",
  cardTitle: "Behind the Resume",
  collaborationTitle: "Collaboration in Practice",
  collaborationSubtitle: "What it feels like to work with me",
  buttons: {
    getInTouch: "Get In Touch",
    downloadCV: "Download CV"
  },
  cards: [
    {
      title: "Problem Solver",
      description:
        "I love transforming complex challenges into elegant, reliable outcomes. My favourite work happens where curiosity meets impact.",
      icon: "Puzzle",
      gradient: "from-primary/20 to-accent/20",
      borderColor: "border-primary/30"
    },
    {
      title: "Collaborative Developer",
      description:
        "Strong communication, thoughtful code reviews, and pair programming help me build shared context and better products.",
      icon: "GitBranch",
      gradient: "from-accent/20 to-accent-secondary/20",
      borderColor: "border-accent/30"
    },
    {
      title: "Continuous Learner",
      description:
        "I'm always expanding my toolkit—across accessibility, AI, and modern web craft—to sharpen my problem-solving lens.",
      icon: "GraduationCap",
      gradient: "from-success/20 to-primary/20",
      borderColor: "border-success/30"
    }
  ],
  moreAboutMe: {
    buttonText: "More About Me",
    sections: [
      {
        title: "What Drives Me",
        description:
          "My family, friends and loved ones have always supported my journey, and without them I could not have achieved any of this. I will always be grateful to them all.",
        media: "me/family.jpg",
        type: "image"
      },
      {
        title: "Beyond the Code",
        description:
          "When I'm not debugging or learning new skills, you'll often find me gaming and unwinding with friends online, letting the world go by.",
        media: "me/gaming.jpg",
        type: "image"
      },
      {
        title: "I Could Never Get Tired of This",
        description:
          "Another passion of mine is golf – one of the most frustrating yet rewarding sports. What fascinates me most is not only the nature you get to experience, but also the fact that even for the best players no two shots are ever the same. It is a never-ending game of problem-solving.",
        media: "me/golf.mp4",
        type: "video"
      },
      {
        title: "Exploring My Environment",
        description:
          "Like a good AI agent, I enjoy exploring the world and experiencing different cultures, foods, and the excitement that travel has to offer.",
        media: "me/travel.jpg",
        type: "image"
      },
      {
        title: "My Safe Space",
        description:
          "I have always loved the mountains, not just for their hikes and their beauty but for their sense of peace. When they are blanketed in snow and I have two skis under my feet, that is where I feel most at home – carving and exploring through this vast landscape.",
        media: "me/ski.mp4",
        type: "video"
      }
    ]
  }
};

export const projectsSection = {
  sectionTitle: "Featured",
  sectionTitleHighlight: "Projects",
  subtitle: "Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.",
  ctaText: "Check My Github"
};

export const skillsSection = {
  sectionTitle: "My",
  sectionTitleHighlight: "Skills",
  techStackTitle: "Technologies I Work With",
  confidenceLevelsTitle: "Confidence Levels:"
};

export const contact = {
  sectionTitle: "Let's Connect",
  subtitle: "Have a project in mind or require an aspiring software developer? Feel free to reach out and send me a message.",
  emailLabel: "Email",
  locationLabel: "Location",
  socialTitle: "Connect With Me"
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Charles Suddens-Spiers. All rights reserved.`
};
