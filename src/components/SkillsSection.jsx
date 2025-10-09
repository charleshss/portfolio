import { useState } from "react";
import { cn } from "@/lib/utils";
import LogoLoop from "./LogoLoop";
import { skills, categories, confidenceLevels, techStack } from "@/config/skills";
import { skillsSection } from "@/config/content";
import {
    siPython,
    siScala,
    siJavascript,
    siTypescript,
    siCplusplus,
    siMysql,
    siHtml5,
    siCss,
    siReact,
    siNextdotjs,
    siDjango,
    siSanity,
    siTailwindcss,
    siGit,
    siGithub,
    siClaude,
    siOpenai,
    siGooglecloud,
    siResend
} from 'simple-icons';

// Icon map for fast lookup
const iconMap = {
    siPython,
    siScala,
    siJavascript,
    siTypescript,
    siCplusplus,
    siMysql,
    siHtml5,
    siCss,
    siReact,
    siNextdotjs,
    siDjango,
    siSanity,
    siTailwindcss,
    siGit,
    siGithub,
    siClaude,
    siOpenai,
    siGooglecloud,
    siResend
};

const SimpleIcon = ({ iconName }) => {
    const icon = iconMap[iconName];
    if (!icon) return null;

    return (
        <span className="inline-flex items-center justify-center h-full w-full">
            <svg
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                className="h-[var(--logoloop-logoHeight)] w-auto fill-current">
                <title>{icon.title}</title>
                <path d={icon.path} />
            </svg>
        </span>
    );
};

// Tech stack logos - using config data with SimpleIcon component
const techLogos = techStack.map(tech => ({
    node: <SimpleIcon iconName={tech.icon} />,
    title: tech.name,
    href: tech.href
}));

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
            "relative p-6 rounded-xl shadow-lg transition-all duration-300 backdrop-blur-sm border-2 group overflow-hidden",
            "hover:shadow-xl hover:-translate-y-1",
            confidence === "basic" && "skill-basic hover:border-danger/60",
            confidence === "comfortable" && "skill-comfortable hover:border-warning/60",
            confidence === "confident" && "skill-confident hover:border-success/60"
        );
    };

    return (
        <section id="skills" className="py-24 px-4 relative overflow-hidden">
            {/* Vibrant background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-secondary/5 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.08),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {skillsSection.sectionTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-accent-secondary">{skillsSection.sectionTitleHighlight}</span>
                </h2>

                {/* Animated Tech Stack LogoLoop */}
                <div className="mb-16">
                    <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">
                        {skillsSection.techStackTitle}
                    </h3>
                    <div className="relative max-w-6xl mx-auto">
                        {/* Enhanced container with modern styling */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-card/80 via-card/40 to-card/80 backdrop-blur-md border border-border/30 shadow-xl shadow-primary/5">
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-accent-secondary/5 rounded-2xl" />

                            {/* Logo loop container */}
                            <div className="relative z-10 p-6">
                                <LogoLoop
                                    logos={techLogos}
                                    speed={60}
                                    direction="left"
                                    logoHeight={48}
                                    gap={32}
                                    pauseOnHover={true}
                                    fadeOut={true}
                                    scaleOnHover={true}
                                    ariaLabel="Technologies and tools I work with"
                                    className="py-2"
                                />
                            </div>

                            {/* Fade edges for smooth overflow */}
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card/80 to-transparent pointer-events-none z-20" />
                            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card/80 to-transparent pointer-events-none z-20" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium",
                                activeCategory === category
                                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 scale-105"
                                    : "bg-card/80 backdrop-blur-sm border border-border/50 text-foreground hover:border-primary/50 hover:shadow-md hover:scale-105"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Confidence Level Key */}
                <div className="flex flex-wrap justify-center gap-6 mb-12 p-4 bg-card/50 rounded-lg">
                    <div className="text-sm font-medium text-foreground mb-2 w-full text-center">
                        {skillsSection.confidenceLevelsTitle}
                    </div>
                    {Object.entries(confidenceLevels).map(([key, meta]) => (
                        <div key={key} className="flex items-center gap-2">
                            <div
                                className="w-4 h-4 rounded-full border-2"
                                style={{
                                    backgroundColor: meta.color,
                                    borderColor: meta.color
                                }}
                            />
                            <span className="text-sm font-medium capitalize">
                                {meta.label}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displaySkills.map((skill, key) => (
                        <div
                            key={`${activeCategory}-${skill.name}`}
                            className={cn(
                                getSkillCardClasses(skill.confidence),
                                "opacity-0 animate-fade-in transform translate-y-4"
                            )}
                            style={{
                                animationDelay: `${key * 50}ms`,
                                animationFillMode: 'forwards'
                            }}
                        >
                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                            <div className="text-left relative z-10">
                                <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className={cn(
                                        "inline-block px-3 py-1.5 text-xs font-medium rounded-full capitalize",
                                        skill.confidence === "basic" && "bg-danger/20 text-danger",
                                        skill.confidence === "comfortable" && "bg-warning/20 text-warning",
                                        skill.confidence === "confident" && "bg-success/20 text-success"
                                    )}>
                                        {confidenceLevels[skill.confidence].label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
