"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { useGsapFadeUp } from "@/hooks/use-gsap-animations";

export function ProductsSection() {
    const ref = useGsapFadeUp({ stagger: 0.1 });
    const featuredProducts = products.filter((p) => p.badge || p.price >= 15).slice(0, 6);

    return (
        <section ref={ref} className="section-padding relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-14 gsap-fade-up">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        Featured Products
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                        Best-Selling <span className="gradient-text">Resources</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Our most popular digital products to help you take the first step toward a healthier,
                        more productive life.
                    </p>
                </div>

                {/* Product grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="gsap-fade-up">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center gsap-fade-up">
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
                    >
                        View All Products
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
