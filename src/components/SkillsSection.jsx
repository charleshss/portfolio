import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Languages
    { name: "Java", confidence: "comfortable", category: "languages" },
    { name: "Python", confidence: "confident", category: "languages" },
    { name: "C++", confidence: "basic", category: "languages" },
    { name: "Scala", confidence: "confident", category: "languages" },
    { name: "HTML/CSS", confidence: "comfortable", category: "languages" },
    { name: "JavaScript", confidence: "comfortable", category: "languages" },
    { name: "TypeScript", confidence: "basic", category: "languages" },
    { name: "Tailwind CSS", confidence: "basic", category: "languages" },
    { name: "SQL", confidence: "basic", category: "languages" },

    // Frameworks
    { name: "React", confidence: "comfortable", category: "frameworks" },
    { name: "Django", confidence: "comfortable", category: "frameworks" },
    { name: "JavaFX", confidence: "basic", category: "frameworks" },
    { name: "JQuery", confidence: "comfortable", category: "frameworks" },

    // Tools
    { name: "Git/GitHub", confidence: "confident", category: "tools" },
    { name: "VS Code", confidence: "confident", category: "tools" },
    { name: "Trello", confidence: "confident", category: "tools" },
    { name: "CI/CD pipelines", confidence: "confident", category: "tools" },
    { name: "JSON", confidence: "confident", category: "tools" },
    { name: "APIs", confidence: "confident", category: "tools" },
    { name: "Agile/SCRUM methodologies", confidence: "confident", category: "tools" },
    { name: "AWS services", confidence: "comfortable", category: "tools" },
    { name: "Microsoft Entra ID", confidence: "basic", category: "tools" },

    //Soft Skills
    { name: "Communication", confidence: "confident", category: "soft skills" },
    { name: "Teamwork", confidence: "confident", category: "soft skills" },
    { name: "Problem-solving", confidence: "confident", category: "soft skills" },
    { name: "Adaptability", confidence: "confident", category: "soft skills" },
    { name: "Time management", confidence: "confident", category: "soft skills" },
    { name: "Leadership", confidence: "comfortable", category: "soft skills" },
    { name: "Resilience", confidence: "confident", category: "soft skills" },
];

const categories = ["all", "languages", "frameworks", "tools", "soft skills"];

const confidenceLevels = [
    { name: "Basic", value: "basic", color: "var(--skill-basic)" },
    { name: "Comfortable", value: "comfortable", color: "var(--skill-comfortable)" },
    { name: "Confident", value: "confident", color: "var(--skill-confident)" }
];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    // Filter skills based on category
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    // Sort by confidence level (confident -> comfortable -> basic) when a specific category is selected
    const confidenceOrder = { confident: 3, comfortable: 2, basic: 1 };
    const displaySkills = activeCategory === "all"
        ? filteredSkills
        : [...filteredSkills].sort((a, b) => confidenceOrder[b.confidence] - confidenceOrder[a.confidence]);

    const getSkillCardClasses = (confidence) => {
        return cn(
            "p-6 rounded-lg shadow-xs card-hover transition-all duration-300",
            confidence === "basic" && "skill-basic",
            confidence === "comfortable" && "skill-comfortable",
            confidence === "confident" && "skill-confident"
        );
    };

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Confidence Level Key */}
                <div className="flex flex-wrap justify-center gap-6 mb-12 p-4 bg-card/50 rounded-lg">
                    <div className="text-sm font-medium text-foreground mb-2 w-full text-center">
                        Confidence Levels:
                    </div>
                    {confidenceLevels.map((level) => (
                        <div key={level.value} className="flex items-center gap-2">
                            <div
                                className="w-4 h-4 rounded-full border-2"
                                style={{
                                    backgroundColor: level.color,
                                    borderColor: level.color
                                }}
                            />
                            <span className="text-sm font-medium capitalize">
                                {level.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displaySkills.map((skill, key) => (
                        <div
                            key={key}
                            className={getSkillCardClasses(skill.confidence)}
                        >
                            <div className="text-left">
                                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-background/50 capitalize">
                                    {skill.confidence}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
