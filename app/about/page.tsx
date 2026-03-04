"use client";

import { Heart, Leaf, TrendingUp, BookOpen, Users, Globe } from "lucide-react";
import { useGsapFadeUp, useGsapSlideIn } from "@/hooks/use-gsap-animations";

const values = [
    {
        icon: Heart,
        title: "Holistic Wellness",
        description: "We believe health encompasses mind, body, and lifestyle. Our resources reflect that.",
        accent: "from-primary to-forest",
        accentBg: "bg-primary/10",
        accentText: "text-primary",
        accentBorder: "group-hover:border-primary/30",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "Building habits and income streams that are sustainable for the long term.",
        accent: "from-forest to-sage",
        accentBg: "bg-sage/20",
        accentText: "text-forest",
        accentBorder: "group-hover:border-sage/40",
    },
    {
        icon: BookOpen,
        title: "Accessibility",
        description: "Making quality wellness and business tools affordable and accessible to everyone.",
        accent: "from-sage to-primary",
        accentBg: "bg-primary/10",
        accentText: "text-primary",
        accentBorder: "group-hover:border-primary/30",
    },
    {
        icon: TrendingUp,
        title: "Growth Mindset",
        description: "Empowering continuous improvement in health, skills, and financial wellbeing.",
        accent: "from-primary to-sage",
        accentBg: "bg-sage/20",
        accentText: "text-forest",
        accentBorder: "group-hover:border-forest/30",
    },
    {
        icon: Users,
        title: "Community",
        description: "Supporting a global community of individuals committed to personal growth.",
        accent: "from-forest to-primary",
        accentBg: "bg-primary/10",
        accentText: "text-primary",
        accentBorder: "group-hover:border-primary/30",
    },
    {
        icon: Globe,
        title: "Global Impact",
        description: "Serving customers worldwide with digital products available for instant download.",
        accent: "from-sage to-forest",
        accentBg: "bg-sage/20",
        accentText: "text-forest",
        accentBorder: "group-hover:border-sage/40",
    },
];

export default function AboutPage() {
    const heroRef = useGsapFadeUp();
    const valuesRef = useGsapFadeUp({ stagger: 0.12 });
    const storyRef = useGsapSlideIn();
    const offerRef = useGsapFadeUp({ stagger: 0.1 });

    return (
        <div className="pt-20 md:pt-24">
            {/* Hero */}
            <section ref={heroRef} className="section-padding">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <p className="gsap-fade-up text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        About Us
                    </p>
                    <h1 className="gsap-fade-up font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Our <span className="gradient-text">Story</span>
                    </h1>
                    <p className="gsap-fade-up mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                        GreenBean was created to simplify the journey toward healthier living and smarter
                        business practices.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section ref={storyRef} className="section-padding">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="gsap-slide-left">
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                                Our Mission
                            </p>
                            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl mb-6">
                                Making Wellness & Smart Business <span className="gradient-text">Accessible</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    We believe that everyone deserves access to tools that make life easier, healthier,
                                    and more fulfilling. That&apos;s why we created GreenBean, a platform that combines
                                    wellness expertise with practical business know-how.
                                </p>
                                <p>
                                    Our digital products are thoughtfully designed by experts to provide real,
                                    actionable strategies that you can implement immediately. No fluff, no complexity,
                                    just simple tools that work.
                                </p>
                                <p>
                                    We are committed to making holistic wellness and smart business practices
                                    accessible, affordable, and easy to implement in everyday life.
                                </p>
                            </div>
                        </div>

                        <div className="gsap-slide-right">
                            <div className="relative rounded-2xl border border-border bg-card p-8 overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />
                                <div className="relative z-10 space-y-6">
                                    <h3 className="font-heading text-xl font-bold">Our products help you:</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Build sustainable habits that stick",
                                            "Improve your nutrition & overall wellness",
                                            "Grow your income & boost productivity",
                                            "Launch and scale digital businesses",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section ref={valuesRef} className="section-padding bg-accent/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 gsap-fade-up">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                            Our Values
                        </p>
                        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                            What We <span className="gradient-text">Stand For</span>
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className={`gsap-fade-up group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${value.accentBorder}`}
                                >
                                    {/* Colored top accent stripe */}
                                    <div className={`h-1.5 w-full bg-linear-to-r ${value.accent}`} />

                                    {/* Decorative corner gradient blob */}
                                    <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-linear-to-br ${value.accent} opacity-[0.07] transition-all duration-500 group-hover:opacity-[0.15] group-hover:scale-125`} />
                                    <div className={`absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-linear-to-tr ${value.accent} opacity-[0.04] transition-all duration-500 group-hover:opacity-[0.10] group-hover:scale-150`} />

                                    <div className="relative z-10 p-6">
                                        {/* Top row: Icon + Number */}
                                        <div className="flex items-start justify-between mb-5">
                                            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${value.accentBg} ${value.accentText} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                                                <Icon className="h-7 w-7" />
                                            </div>
                                            <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${value.accentBg} ${value.accentText}`}>
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className={`font-heading text-lg font-bold mb-2 transition-colors duration-300 group-hover:${value.accentText.split(" ")[0]?.replace("text-", "text-")}`}>
                                            {value.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>

                                        {/* Bottom decorative line */}
                                        <div className="mt-5 pt-4 border-t border-border/50">
                                            <div className={`h-1 w-0 rounded-full bg-linear-to-r ${value.accent} transition-all duration-500 group-hover:w-full`} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* What we offer */}
            <section ref={offerRef} className="section-padding">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="gsap-fade-up">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                            What We Offer
                        </p>
                        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                            Services & <span className="gradient-text">Resources</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Digital wellness tools",
                            "Business growth resources",
                            "Online self-paced courses",
                            "Printable planners & trackers",
                            "Educational ebooks",
                        ].map((service) => (
                            <div
                                key={service}
                                className="gsap-fade-up rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                            >
                                {service}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
