"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useGsapFadeUp } from "@/hooks/use-gsap-animations";

export function TestimonialsSection() {
    const ref = useGsapFadeUp({ stagger: 0.12 });

    return (
        <section ref={ref} className="section-padding relative overflow-hidden bg-accent/30">
            {/* Decorative blob */}
            <div className="blob absolute top-20 right-0 h-72 w-72 bg-primary/8" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-14 gsap-fade-up">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        Testimonials
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                        What Our <span className="gradient-text">Customers Say</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Real stories from people who transformed their health, habits, and income with GreenBean
                        resources.
                    </p>
                </div>

                {/* Testimonial grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="gsap-fade-up group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            {/* Quote icon */}
                            <Quote className="h-8 w-8 text-primary/20 mb-4" />

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-4 w-4 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-heading font-bold text-sm">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">{testimonial.name}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
