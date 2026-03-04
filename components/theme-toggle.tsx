"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <button
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary transition-colors"
                aria-label="Toggle theme"
            >
                <Sun className="h-4 w-4" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 active:scale-95"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-4 w-4 transition-transform duration-300" />
            ) : (
                <Moon className="h-4 w-4 transition-transform duration-300" />
            )}
        </button>
    );
}
