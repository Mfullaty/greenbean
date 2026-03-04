"use client";

import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useGsapHero } from "@/hooks/use-gsap-animations";

export function HeroSection() {
    const ref = useGsapHero();

    return (
        <section
            ref={ref}
            className="relative min-h-svh flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background decorative blobs */}
            <div className="blob absolute -top-32 -right-32 h-96 w-96 bg-primary/15 dark:bg-primary/10" />
            <div className="blob absolute -bottom-40 -left-40 h-[500px] w-[500px] bg-sage/20 dark:bg-sage/10" />
            <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-cream/30 dark:bg-cream/5" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        Digital Wellness Resources
                    </span>
                </div>

                {/* Title */}
                <h1 className="hero-title font-heading text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-[1.1]">
                    Nourish Your Life.{" "}
                    <span className="gradient-text">Grow Your Future.</span>
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed sm:text-xl">
                    High-quality ebooks, planners, courses, and templates designed to support healthier
                    living, improved productivity, and sustainable financial growth.
                </p>

                {/* CTAs */}
                <div className="hero-cta mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
                    >
                        Browse Products
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 active:scale-95"
                    >
                        <Download className="h-4 w-4" />
                        Our Story
                    </Link>
                </div>

                {/* Stats */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                    <div className="hero-stats text-center">
                        <p className="text-2xl font-bold font-heading text-foreground sm:text-3xl">13+</p>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Digital Products</p>
                    </div>
                    <div className="h-8 w-px bg-border hidden sm:block" />
                    <div className="hero-stats text-center">
                        <p className="text-2xl font-bold font-heading text-foreground sm:text-3xl">Global</p>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Reach</p>
                    </div>
                    <div className="h-8 w-px bg-border hidden sm:block" />
                    <div className="hero-stats text-center">
                        <p className="text-2xl font-bold font-heading text-foreground sm:text-3xl">Instant</p>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Download</p>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
        </section>
    );
}
