import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Navbar with integrated theme toggle */}
        <Navbar />

        {/* Main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
}