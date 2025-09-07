import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
    {
        title: 'Title',
        items: ['Item 1', 'Item 2', 'Item 3'],
        image: 'me/...'
    },
]

export const MoreAboutMe = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full mt-12">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mx-auto flex items-center gap-2 px-6 py-3 text-xl text-primary hover:text-primary/80 transition-all duration-300 font-medium group"
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
                    <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
                        {/* Cards for each section */}
                    </div>
                </div>
            </div>
        </section>
    );
};