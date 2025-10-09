import { Puzzle, GitBranch, GraduationCap } from "lucide-react";
import { MoreAboutMe } from "./MoreAboutMe";
import ProfileCard from "./ProfileCard";
import CardSwap from "./CardSwap";
import { personalInfo } from "@/config/personal";
import { about } from "@/config/content";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            {/* Vibrant background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    {about.sectionTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-accent-secondary">{about.sectionTitleHighlight}</span>
                </h2>

                <div className="flex flex-col gap-14 mb-16">
                    <div className="flex flex-col items-center gap-10 lg:grid lg:grid-cols-[minmax(300px,400px)_minmax(0,1fr)] lg:items-center lg:gap-16">
                        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">
                            <ProfileCard
                                name={personalInfo.name}
                                title={personalInfo.degree}
                                handle={personalInfo.handle}
                                status={personalInfo.availability}
                                avatarUrl={personalInfo.images.sticker}
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
                                        {about.cardTitle}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
                                        {personalInfo.bio.tagline}
                                    </h3>
                                </div>

                                <div className="space-y-5 text-base leading-relaxed text-muted-foreground/90 text-pretty text-center sm:text-lg lg:text-left">
                                    <p>
                                        {personalInfo.bio.short}
                                    </p>
                                    <p>
                                        {personalInfo.bio.personal}
                                    </p>
                                    <p>
                                        {personalInfo.bio.mission}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center lg:justify-start">
                                    <a href="#contact" className="cosmic-button text-center">
                                        {about.buttons.getInTouch}
                                    </a>

                                    <a
                                        href={personalInfo.cvPath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-button-secondary text-center"
                                    >
                                        {about.buttons.downloadCV}
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="rounded-3xl border border-border/40 bg-card/40 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-accent/5">
                        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-baseline sm:justify-between sm:text-left">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                                    {about.collaborationTitle}
                                </span>
                                <h3 className="mt-2 text-2xl font-semibold text-foreground text-balance sm:text-3xl">
                                    {about.collaborationSubtitle}
                                </h3>
                            </div>
                        </div>
                        <CardSwap
                            cards={about.cards.map(card => ({
                                ...card,
                                icon: card.icon === "Puzzle" ? <Puzzle className="h-8 w-8" /> :
                                      card.icon === "GitBranch" ? <GitBranch className="h-8 w-8" /> :
                                      <GraduationCap className="h-8 w-8" />
                            }))}
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
