"use client";

import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { useGsapFadeUp } from "@/hooks/use-gsap-animations";

export function CtaSection() {
    const ref = useGsapFadeUp();

    return (
        <section ref={ref} className="section-padding relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="gsap-fade-up relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-forest to-sage p-8 sm:p-12 md:p-16 text-center">
                    {/* Decorative elements */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-white" />
                        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white" />
                        <div className="absolute top-1/2 left-1/4 h-20 w-20 rounded-full bg-white" />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                            <Leaf className="h-7 w-7 text-white" />
                        </div>

                        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl max-w-2xl mx-auto leading-tight">
                            Ready to Transform Your Life?
                        </h2>
                        <p className="mt-4 text-base text-white/80 max-w-lg mx-auto leading-relaxed">
                            Start your journey toward healthier living, smarter business practices, and
                            sustainable growth today.
                        </p>

                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-forest shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                                style={{ color: "oklch(0.42 0.1 145)" }}
                            >
                                Shop Now
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-95"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
