import { StarBackground } from "@/components/StarBackground"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"

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

        </main>

        {/* Footer */}

    </div>
}