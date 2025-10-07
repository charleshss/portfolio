import { Puzzle, GitBranch, GraduationCap } from "lucide-react";
import { MoreAboutMe } from "./MoreAboutMe";
import ProfileCard from "./ProfileCard";
import CardSwap from "./CardSwap";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            {/* Vibrant background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-accent-secondary">Me</span>
                </h2>

                <div className="flex flex-col gap-14 mb-16">
                    <div className="flex flex-col items-center gap-10 lg:grid lg:grid-cols-[minmax(300px,400px)_minmax(0,1fr)] lg:items-center lg:gap-16">
                        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">
                            <ProfileCard
                                name="Charles Suddens-Spiers"
                                title="First Class (Honours) Master's Degree"
                                handle="charleshss"
                                status="Available July 2025"
                                avatarUrl="/portfolio/me/sticker.png"
                                contactText="Contact Me"
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={false}
                                className="w-full"
                                onContactClick={() => {
                                    document.getElementById('contact')?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }}
                            />
                        </div>

                        <article className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-md shadow-2xl shadow-primary/10 lg:mx-0">
                            <div className="pointer-events-none absolute inset-x-6 -top-24 h-48 bg-gradient-to-br from-primary/30 via-accent/15 to-accent-secondary/30 blur-3xl opacity-70" />

                            <div className="relative space-y-6 p-6 sm:p-8">
                                <div className="space-y-3 text-center lg:text-left">
                                    <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary/80">
                                        Behind the Resume
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
                                        Master's in Computer Science Graduate
                                    </h3>
                                </div>

                                <div className="space-y-5 text-base leading-relaxed text-muted-foreground/90 text-pretty text-center sm:text-lg lg:text-left">
                                    <p>
                                        Recently graduating from King's College London with first-class honours, I'm navigating the job market while chasing my passion for technology and problem-solving—wherever that curiosity leads me next.
                                    </p>
                                    <p>
                                        That passion began long before university. As someone who is visually impaired, technology has been transformative—helping me travel, explore, and engage with the world beyond physical limits. That personal connection to assistive tech fuels my drive to craft accessible and innovative experiences for others.
                                    </p>
                                    <p>
                                        Whether building multilingual translation tools for local councils or developing accessible healthcare products, I focus on technology that removes barriers. I believe real-world impact starts with understanding real people, and I'm looking forward to bringing that perspective into my next role.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center lg:justify-start">
                                    <a href="#contact" className="cosmic-button text-center">
                                        Get In Touch
                                    </a>

                                    <a
                                        href="cv.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-button-secondary text-center"
                                    >
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="rounded-3xl border border-border/40 bg-card/40 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-accent/5">
                        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-baseline sm:justify-between sm:text-left">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                                    Collaboration in Practice
                                </span>
                                <h3 className="mt-2 text-2xl font-semibold text-foreground text-balance sm:text-3xl">
                                    What it feels like to work with me
                                </h3>
                            </div>
                        </div>
                        <CardSwap
                            cards={[
                                {
                                    id: 1,
                                    title: "Problem Solver",
                                    description: "I love transforming complex challenges into elegant, reliable outcomes. My favourite work happens where curiosity meets impact.",
                                    icon: <Puzzle className="h-8 w-8" />,
                                    gradient: "from-primary/20 to-accent/20",
                                    borderColor: "border-primary/30"
                                },
                                {
                                    id: 2,
                                    title: "Collaborative Developer",
                                    description: "Strong communication, thoughtful code reviews, and pair programming help me build shared context and better products.",
                                    icon: <GitBranch className="h-8 w-8" />,
                                    gradient: "from-accent/20 to-accent-secondary/20",
                                    borderColor: "border-accent/30"
                                },
                                {
                                    id: 3,
                                    title: "Continuous Learner",
                                    description: "I'm always expanding my toolkit—across accessibility, AI, and modern web craft—to sharpen my problem-solving lens.",
                                    icon: <GraduationCap className="h-8 w-8" />,
                                    gradient: "from-success/20 to-primary/20",
                                    borderColor: "border-success/30"
                                }
                            ]}
                            autoSwap
                            swapInterval={9000}
                            className="mt-6 w-full"
                            fullWidth
                        />
                    </div>
                </div>

                <MoreAboutMe />

            </div>
        </section>
    );
};
