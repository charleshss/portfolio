import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
    {
        title: "My Journey into Tech",
        description: "Starting from building my first website at 14, technology has always been my way of solving problems. What began as curiosity about how things work evolved into a passion for creating solutions that make a difference.",
        image: "/about/journey.jpg"
    },
    {
        title: "Beyond the Code",
        description: "When I'm not debugging or learning new frameworks, you'll find me exploring London's food markets, getting lost in strategy games, or planning my next travel adventure. Balance keeps creativity flowing.",
        image: "/about/hobbies.jpg"
    },
    {
        title: "What Drives Me",
        description: "I believe technology should empower everyone. My experience with assistive technology has shaped my approach to development - always considering accessibility, usability, and real-world impact.",
        image: "/about/motivation.jpg"
    }
];

export const MoreAboutMe = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full mt-12">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mx-auto flex items-center gap-2 px-6 py-3 text-xl text-primary hover:text-primary/80 transition-all duration-300 font-medium"
            >
                <span>More About Me</span>
                <ChevronDown
                    className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen && "rotate-180"
                    )}
                />
            </button>

            {/* Expandable Content */}
            <div
                className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-6"
                        : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden">
                    <div className="max-w-5xl mx-auto space-y-6 p-4">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "bg-card border border-border rounded-lg p-6 md:p-8",
                                    "flex flex-col md:flex-row gap-6 items-center",
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Image */}
                                <div className="w-full md:w-1/3 flex-shrink-0">
                                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                                        {/* Replace with actual image */}
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="w-full h-full object-cover rounded-lg"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = '<span class="text-primary/60">Image</span>';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-xl font-semibold">
                                        {section.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};