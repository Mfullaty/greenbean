"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const tabs = [
    { id: "all", label: "All Products" },
    { id: "health", label: "🌿 Health & Nutrition" },
    { id: "wellbeing", label: "🧘 Wellbeing & Lifestyle" },
    { id: "business", label: "💼 Business & Productivity" },
    { id: "courses", label: "📚 Courses" },
];

export default function ShopPage() {
    const [activeTab, setActiveTab] = useState("all");
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredProducts =
        activeTab === "all"
            ? products
            : products.filter((p) => p.category === activeTab);

    // Animate cards whenever the filtered list changes
    const animateCards = useCallback(() => {
        if (!gridRef.current) return;
        const cards = gridRef.current.children;
        if (cards.length === 0) return;

        gsap.fromTo(
            cards,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.06,
                ease: "power3.out",
            }
        );
    }, []);

    useEffect(() => {
        animateCards();
    }, [activeTab, animateCards]);

    return (
        <div className="pt-20 md:pt-24">
            {/* Hero */}
            <section className="section-padding">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        Our Shop
                    </p>
                    <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Browse Our <span className="gradient-text">Digital Products</span>
                    </h1>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Carefully designed digital products to support your health, wellbeing, and financial
                        growth. Download instantly and begin transforming your life today.
                    </p>
                </div>
            </section>

            {/* Tabs + Products */}
            <section className="section-padding">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Filter tabs */}
                    <div className="mb-10 flex flex-wrap gap-2 justify-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
                                    activeTab === tab.id
                                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                                        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent border border-border"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Products grid */}
                    <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts.map((product) => (
                            <div key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="py-20 text-center text-muted-foreground">
                            <p className="text-lg">No products found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
