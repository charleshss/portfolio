import { Puzzle, GitBranch, GraduationCap } from "lucide-react";
import { MoreAboutMe } from "./MoreAboutMe";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Master's in Computer Science Graduate
                        </h3>

                        <p className="text-muted-foreground">
                            Recently graduated from King's College London with a first-class honours degree,
                            I am now navigating this challenging job market and chasing my passion for technology
                            and problem-solving to wherever it will take me.
                        </p>

                        <p className="text-muted-foreground">
                            University is not where this passion first began. As someone who is visually impaired,
                            technology has been transformative in my life—enabling me to travel, explore, and
                            experience the world in ways that extend far beyond physical limitations. This personal
                            relationship with assistive technology sparked my drive to create accessible, innovative
                            solutions.
                        </p>

                        <p className="text-muted-foreground">
                            Through my projects—from building multilingual translation apps for councils to
                            developing accessible healthcare tools—I've focused on creating technology that breaks
                            down barriers. I believe the best solutions come from understanding real challenges,
                            and I'm excited to bring this perspective and problem-solving approach to my next role.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href="cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Puzzle className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Problem Solver</h4>
                                    <p className="text-muted-foreground">
                                        Passionate about turning complex challenges into elegant solutions. I thrive
                                        on breaking down problems and building things that work.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GitBranch className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Collaborative Developer</h4>
                                    <p className="text-muted-foreground">
                                        I am a strong communicator who values pair programming, code reviews, and
                                        knowledge sharing.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Continuous Learner</h4>
                                    <p className="text-muted-foreground">
                                        Always expanding my toolkit and eager to learn new skills and techniques
                                        to enhance my way of thinking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MoreAboutMe />

            </div>
        </section>
    );
};