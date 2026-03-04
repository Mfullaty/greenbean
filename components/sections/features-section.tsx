"use client";

import { features } from "@/lib/data";
import { useGsapFadeUp } from "@/hooks/use-gsap-animations";

export function FeaturesSection() {
    const ref = useGsapFadeUp({ stagger: 0.15 });

    return (
        <section ref={ref} className="section-padding relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-14 gsap-fade-up">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        Why GreenBean
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                        Everything You Need to{" "}
                        <span className="gradient-text">Thrive</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Simple, actionable resources that help you build better habits, enhance your wellness,
                        and develop practical skills for life and business.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="gsap-fade-up group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
