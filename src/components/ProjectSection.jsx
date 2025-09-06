import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Conversate",
        description: "Real-time translation web app for North Yorkshire Council facilitating multilingual communication. Features speech-to-text, instant translation, text-to-speech, and PDF transcript generation. Built with React, TypeScript, and AWS services.",
        image: "/projects/conversate.png",
        tags: ["React", "Typescript", "AWS", "Accessible", "Group"],
        demoUrl: "https://www.conversateapp.com",
        githubUrl: "https://github.com/translation-nyc/nyc-translation-app",
    },
    {
        id: 2,
        title: "Interactive Visualisation",
        description: "Data visualisation analysing Premier League teams' transfer spending vs performance. Features zoom/pan functionality, dynamic filtering, and detailed team statistics.",
        image: "/projects/pl-vis.png",
        tags: ["Javascript", "D3.js", "Data Visualisation", "Interactive", "Solo"],
        demoUrl: "https://charleshss.github.io/pl-performance-vs-spend/",
        githubUrl: "https://github.com/charleshss/pl-performance-vs-spend",
    },
    {
        id: 3,
        title: "Digital Doctor",
        description: "Developed a multilingual symptom-checking web application that integrated Healthily Smart Symptoms Checker API with Google Cloud Translate API, enabling support for 10+ languages while maintaining data security compliance",
        image: "/projects/doctor.png",
        tags: ["Python", "Django", "APIs", "Accessible", "Solo"],
        demoUrl: "https://www.linkedin.com/in/charles-suddens-spiers/details/education/1726762946592/single-media-viewer/?profileId=ACoAAD7fdcEBh9N4Otn2tZlqE5hrKxia07zgczY",
        githubUrl: "https://github.com/charleshss/DigitalDoctor",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    // could also be cover
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/charleshss"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};