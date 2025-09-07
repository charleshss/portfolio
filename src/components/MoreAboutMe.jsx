import { useState } from "react";
import { ChevronDown, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

export const MoreAboutMe = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [playingVideo, setPlayingVideo] = useState(null);

    const sections = [
        {
            title: "What Drives Me",
            description:
                "My family, friends and loved ones have always supported my journey, and without them I could not have achieved any of this. I will always be grateful to them all.",
            media: "me/family.jpg",
            type: "image",
        },
        {
            title: "Beyond the Code",
            description:
                "When I'm not debugging or learning new skills, you'll often find me gaming and unwinding with friends online, letting the world go by.",
            media: "me/gaming.jpg",
            type: "image",
        },
        {
            title: "I Could Never Get Tired of This",
            description:
                "Another passion of mine is golf – one of the most frustrating yet rewarding sports. What fascinates me most is not only the nature you get to experience, but also the fact that even for the best players no two shots are ever the same. It is a never-ending game of problem-solving.",
            media: "me/golf.mp4",
            type: "video",
        },
        {
            title: "Exploring My Environment",
            description:
                "Like a good AI agent, I enjoy exploring the world and experiencing different cultures, foods, and the excitement that travel has to offer.",
            media: "me/travel.jpg",
            type: "image",
        },
        {
            title: "My Safe Space",
            description:
                "I have always loved the mountains, not just for their hikes and their beauty but for their sense of peace. When they are blanketed in snow and I have two skis under my feet, that is where I feel most at home – carving and exploring through this vast landscape.",
            media: "me/ski.mp4",
            type: "video",
        },
    ];


    const handleVideoClick = (videoElement, index) => {
        if (videoElement.paused) {
            videoElement.play();
            setPlayingVideo(index);
        } else {
            videoElement.pause();
            setPlayingVideo(null);
        }
    };

    return (
        <section className="w-full mt-12">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mx-auto flex items-center gap-2 px-6 py-3 text-primary hover:text-primary/80 transition-all duration-300 font-medium"
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
                                {/* Media (Image or Video) */}
                                <div className="w-full md:w-1/3 flex-shrink-0">
                                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg overflow-hidden relative group">
                                        {section.type === "video" ? (
                                            <>
                                                <video
                                                    className="w-full h-full object-cover"
                                                    loop
                                                    muted
                                                    playsInline
                                                    onClick={(e) => handleVideoClick(e.target, index)}
                                                >
                                                    <source src={section.media} type="video/mp4" />
                                                    Your browser does not support video.
                                                </video>
                                                {/* Play/Pause overlay */}
                                                <button
                                                    className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                                    onClick={(e) => {
                                                        const video = e.currentTarget.previousElementSibling;
                                                        handleVideoClick(video, index);
                                                    }}
                                                >
                                                    {playingVideo === index ? (
                                                        <Pause className="w-12 h-12 text-white/80" />
                                                    ) : (
                                                        <Play className="w-12 h-12 text-white/80" />
                                                    )}
                                                </button>
                                            </>
                                        ) : (
                                            <img
                                                src={section.media}
                                                alt={section.title}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
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