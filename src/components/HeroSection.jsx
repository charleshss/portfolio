import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import FaultyTerminal from "./FaultyTerminal";
import DecryptedText from "./DecryptedText";
import DotGrid from "./DotGrid";
import { useState, useEffect } from "react";

export const HeroSection = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };

        checkTheme();

        // Watch for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        >
            {/* Background Animation - Theme-specific */}
            <div className="absolute inset-0 w-full h-full">
                {isDarkMode ? (
                    <FaultyTerminal
                        brightness={0.28}
                        flickerAmount={0.25}
                        glitchAmount={0.4}
                        tint="#00D9FF"
                        secondaryTint="#3B82F6"
                        tertiaryTint="#8B5CF6"
                        scanlineIntensity={0.25}
                        chromaticAberration={1.5}
                        curvature={0.12}
                        timeScale={0.7}
                        colorShift={0.9}
                    />
                ) : (
                    <DotGrid
                        dotSize={10}
                        gap={32}
                        baseColor="rgba(59, 130, 246, 0.7)"
                        activeColor="rgba(0, 191, 255, 1)"
                        proximity={140}
                        speedTrigger={100}
                        shockRadius={220}
                        shockStrength={4}
                        maxSpeed={6000}
                        resistance={600}
                        returnDuration={1.2}
                    />
                )}
            </div>

            {/* Content Container */}
            <div className="container max-w-4xl mx-auto text-center z-10 relative">
                <div className="space-y-8">
                    {/* Title with DecryptedText Effect */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                        <DecryptedText
                            text="Hi, I'm Charles Suddens-Spiers"
                            speed={50}
                            sequential={true}
                            revealDirection="start"
                            animateOn="view"
                            className="text-foreground"
                            encryptedClassName="text-muted-foreground/50"
                        />
                    </h1>

                    {/* Description with Delayed Animation */}
                    <div className="pt-4">
                        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            <DecryptedText
                                text="Driven computer scientist eager to create impactful solutions by combining problem-solving skills, modern frameworks, and a user-centred approach."
                                speed={30}
                                sequential={true}
                                revealDirection="start"
                                animateOn="view"
                                className="text-muted-foreground"
                                encryptedClassName="text-muted-foreground/30"
                            />
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-8 opacity-0 animate-fade-in-delay-3">
                        <a
                            href="#projects"
                            className="cosmic-button inline-block"
                            aria-label="View my work section"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={cn(
                "absolute bottom-8 left-1/2 transform -translate-x-1/2",
                "flex flex-col items-center gap-2",
                "opacity-60 hover:opacity-100 transition-opacity duration-300",
                "animate-fade-in-delay-4"
            )}>
                <span className="text-sm text-muted-foreground">Scroll</span>
                <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
            </div>
        </section>
    );
};