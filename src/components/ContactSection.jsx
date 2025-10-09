import {
    Linkedin,
    Mail,
    MapPin,
    Github,
} from "lucide-react";
import { personalInfo } from "@/config/personal";
import { contact } from "@/config/content";

export const ContactSection = () => {

    return (
        <section id="contact" className="relative py-24 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

            <div className="container relative mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        {contact.sectionTitle}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {contact.subtitle}
                    </p>
                </div>

                {/* Contact Card */}
                <div className="max-w-3xl mx-auto">
                    <div className="rounded-3xl border border-border/40 bg-card/40 p-8 md:p-12 shadow-2xl shadow-primary/5 backdrop-blur-sm">
                        {/* Contact Methods */}
                        <div className="grid gap-6 mb-10">
                            <div className="group flex items-center gap-4 p-5 rounded-2xl border border-border/30 bg-background/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                                <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">{contact.emailLabel}</h4>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-foreground hover:text-primary transition-colors break-all"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="group flex items-center gap-4 p-5 rounded-2xl border border-border/30 bg-background/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                                <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">{contact.locationLabel}</h4>
                                    <p className="text-foreground">
                                        {personalInfo.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-border/30">
                            <h4 className="font-semibold text-center mb-6 text-sm uppercase tracking-wider text-muted-foreground">
                                {contact.socialTitle}
                            </h4>
                            <div className="flex justify-center gap-4">
                                <a
                                    href={personalInfo.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-4 rounded-xl border border-border/30 bg-background/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                </a>
                                <a
                                    href={personalInfo.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-4 rounded-xl border border-border/30 bg-background/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                                    aria-label="GitHub Profile"
                                >
                                    <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};