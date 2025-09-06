import { StarBackground } from "@/components/StarBackground"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "../components/AboutSection"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Dark mode toggle */}
        <ThemeToggle />

        {/* Background effect */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main>
            <HeroSection />
            <AboutSection />
        </main>

        {/* Footer */}

    </div>
}