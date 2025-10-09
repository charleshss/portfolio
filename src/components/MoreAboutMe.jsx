import { useEffect, useRef, useState } from "react";
import { ChevronDown, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { about } from "@/config/content";

export const MoreAboutMe = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [playingVideo, setPlayingVideo] = useState(null);
    const videoRefs = useRef([]);

    const sections = about.moreAboutMe.sections;

    const pauseAllVideos = () => {
        videoRefs.current.forEach(video => {
            if (video && !video.paused) {
                video.pause();
            }
        });
    };

    const handleVideoToggle = async (index) => {
        const videoElement = videoRefs.current[index];
        if (!videoElement) return;

        try {
            if (videoElement.paused) {
                pauseAllVideos();
                await videoElement.play();
                setPlayingVideo(index);
            } else {
                videoElement.pause();
                setPlayingVideo(null);
            }
        } catch (error) {
            console.error('Video play error:', error);
            setPlayingVideo(null);
        }
    };

    useEffect(() => {
        if (!isOpen) {
            pauseAllVideos();
            setPlayingVideo(null);
        }

        return () => pauseAllVideos();
    }, [isOpen]);

    return (
        <section className="w-full mt-16">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mx-auto flex items-center gap-2 rounded-full border border-border/40 bg-card/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary/80 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
                <span>{about.moreAboutMe.buttonText}</span>
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
                        ? "grid-rows-[1fr] opacity-100 mt-8"
                        : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden">
                    <div className="mx-auto max-w-6xl">
                        <div className="rounded-3xl border border-border/40 bg-card/30 p-4 shadow-2xl shadow-primary/5 backdrop-blur-sm sm:p-6 lg:p-8">
                            <div className="grid gap-6 xl:gap-8">
                                {sections.map((section, index) => {
                                    if (section.type !== "video") {
                                        videoRefs.current[index] = null;
                                    }

                                    return (
                                    <div
                                        key={index}
                                        className={cn(
                                            "group flex flex-col gap-6 overflow-hidden rounded-2xl border border-border/30 bg-background/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 sm:p-6 lg:grid lg:grid-cols-[minmax(340px,520px)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:p-8",
                                            index % 2 === 0 ? "lg:[&>div:first-child]:order-2" : ""
                                        )}
                                    >
                                        {/* Media (Image or Video) */}
                                        <div
                                            className={cn(
                                                "relative overflow-hidden rounded-xl group/media w-full",
                                                section.type === "video"
                                                    ? ""
                                                    : "aspect-[4/3] sm:aspect-[4/3] lg:aspect-[3/2] bg-gradient-to-br from-primary/20 to-primary/5"
                                            )}
                                        >
                                            {section.type === "video" ? (
                                                <>
                                                    <video
                                                        ref={(el) => { videoRefs.current[index] = el; }}
                                                        className="w-full cursor-pointer transition-transform duration-300 group-hover/media:scale-105"
                                                        loop
                                                        muted
                                                        playsInline
                                                        preload="none"
                                                        loading="lazy"
                                                        onClick={() => handleVideoToggle(index)}
                                                        controls={false}
                                                    >
                                                        <source src={`/portfolio/${section.media}`} type="video/mp4" />
                                                        Your browser does not support video.
                                                    </video>
                                                    <button
                                                        className={cn(
                                                            "absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-t from-black/60 via-black/30 to-black/40 transition-opacity duration-300 cursor-pointer",
                                                            playingVideo === index ? "opacity-0 pointer-events-none" : "opacity-80 hover:opacity-100"
                                                        )}
                                                        onClick={() => handleVideoToggle(index)}
                                                        aria-label={playingVideo === index ? `Pause ${section.title} video` : `Play ${section.title} video`}
                                                        aria-pressed={playingVideo === index}
                                                    >
                                                        <div className="rounded-full bg-white/25 backdrop-blur-md p-5 transition-all duration-300 hover:bg-white/35 hover:scale-110 shadow-xl">
                                                            {playingVideo === index ? (
                                                                <Pause className="h-10 w-10 text-white drop-shadow-lg" />
                                                            ) : (
                                                                <Play className="h-10 w-10 text-white drop-shadow-lg ml-1" />
                                                            )}
                                                        </div>
                                                    </button>
                                                    <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white uppercase tracking-wider">
                                                        Video
                                                    </div>
                                                </>
                                            ) : (
                                                <img
                                                    src={`/portfolio/${section.media}`}
                                                    alt={section.title}
                                                    className="h-full w-full object-contain transition-transform duration-300 group-hover/media:scale-105"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col gap-3 text-center lg:text-left">
                                            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                                                {section.title}
                                            </h3>
                                            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                                                {section.description}
                                            </p>
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
