import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Languages
    { name: "Java", level: 65, category: "languages" },
    { name: "Python", level: 80, category: "languages" },
    { name: "C++", level: 50, category: "languages" },
    { name: "Scala", level: 70, category: "languages" },
    { name: "HTML/CSS", level: 65, category: "languages" },
    { name: "JavaScript", level: 60, category: "languages" },
    { name: "TypeScript", level: 50, category: "languages" },
    { name: "Tailwind CSS", level: 50, category: "languages" },
    { name: "SQL", level: 50, category: "languages" },

    // Frameworks
    { name: "React", level: 65, category: "frameworks" },
    { name: "Django", level: 70, category: "frameworks" },
    { name: "JavaFX", level: 50, category: "frameworks" },
    { name: "JQuery", level: 60, category: "frameworks" },

    // Tools
    { name: "Git/GitHub", level: 80, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Trello", level: 95, category: "tools" },
    { name: "CI/CD pipelines", level: 95, category: "tools" },
    { name: "JSON", level: 95, category: "tools" },
    { name: "APIs", level: 95, category: "tools" },
    { name: "Agile/SCRUM methodologies", level: 95, category: "tools" },
    { name: "AWS services", level: 65, category: "tools" },
    { name: "Microsoft Entra ID", level: 55, category: "tools" },

    //Soft Skills
    { name: "Communication", level: 90, category: "soft skills" },
    { name: "Teamwork", level: 95, category: "soft skills" },
    { name: "Problem-solving", level: 90, category: "soft skills" },
    { name: "Adaptability", level: 85, category: "soft skills" },
    { name: "Time management", level: 85, category: "soft skills" },
    { name: "Leadership", level: 80, category: "soft skills" },
    { name: "Resilience", level: 95, category: "soft skills" },
];

const categories = ["all", "languages", "frameworks", "tools", "soft skills"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    // Filter skills based on category
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    // Sort by level (highest first) only when a specific category is selected
    const displaySkills = activeCategory === "all"
        ? filteredSkills
        : [...filteredSkills].sort((a, b) => b.level - a.level);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displaySkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};