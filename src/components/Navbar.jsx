import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-40 transition-all duration-300",
                    isScrolled ? "bg-background/80 backdrop-blur-md shadow-xs" : ""
                )}
            >
                <div className="container h-16 md:h-20 flex items-center justify-between">
                    <a
                        className="text-xl font-bold text-primary flex items-center"
                        href="#hero"
                    >
                        <span className="relative z-10">
                            <span className="text-glow text-foreground"> Charles' </span>{" "}
                            Portfolio
                        </span>
                    </a>

                    {/* desktop nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Theme toggle for desktop */}
                        <ThemeToggle />
                    </div>

                    {/* mobile controls */}
                    <div className="md:hidden flex items-center space-x-3">
                        {/* Theme toggle for mobile */}
                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="p-2 text-foreground z-50"
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile menu overlay */}
                    <div
                        className={cn(
                            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                            "transition-all duration-300 md:hidden",
                            isMenuOpen
                                ? "opacity-100 pointer-events-auto"
                                : "opacity-0 pointer-events-none"
                        )}
                    >
                        <div className="flex flex-col space-y-8 text-xl">
                            {navItems.map((item, key) => (
                                <a
                                    key={key}
                                    href={item.href}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
