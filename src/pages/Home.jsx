import { useEffect, useState } from "react"
import { StarBackground } from "@/components/StarBackground"
import { CloudBackground } from "@/components/CloudBackground"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        checkTheme();

        // Listen for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background effect - conditional based on theme */}
        {isDarkMode ? <StarBackground /> : <CloudBackground />}

        {/* Navbar with integrated theme toggle */}
        <Navbar />

        {/* Main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
}