"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Logo } from "./logo";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between md:h-20">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg",
                                    pathname === link.href
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                )}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-primary rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary transition-colors hover:bg-accent md:hidden"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 md:hidden",
                    isOpen ? "max-h-96 border-b border-border" : "max-h-0"
                )}
            >
                <div className="bg-background/95 backdrop-blur-xl px-4 pb-6 pt-2 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200",
                                pathname === link.href
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
