"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/lib/data";
import { useGsapScaleIn } from "@/hooks/use-gsap-animations";

export function CategoriesSection() {
    const ref = useGsapScaleIn({ stagger: 0.15 });

    return (
        <section ref={ref} className="section-padding relative overflow-hidden bg-accent/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-14 gsap-scale-in">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        Our Categories
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                        Explore Our <span className="gradient-text">Collections</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Browse carefully curated digital products across three key areas of personal and
                        professional growth.
                    </p>
                </div>

                {/* Category cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {productCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Link
                                key={cat.id}
                                href={`/shop?category=${cat.id}`}
                                className="gsap-scale-in group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                {/* Gradient accent */}
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xl">{cat.emoji}</span>
                                        <h3 className="font-heading text-xl font-bold">{cat.title}</h3>
                                    </div>

                                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                        {cat.description}
                                    </p>

                                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                                        Browse Products
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
