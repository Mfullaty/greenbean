"use client";

import { faqItems } from "@/lib/data";
import { useGsapFadeUp } from "@/hooks/use-gsap-animations";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
    const heroRef = useGsapFadeUp();
    const contentRef = useGsapFadeUp({ stagger: 0.1 });

    return (
        <div className="pt-20 md:pt-24">
            {/* Hero */}
            <section ref={heroRef} className="section-padding">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <p className="gsap-fade-up text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        FAQ
                    </p>
                    <h1 className="gsap-fade-up font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h1>
                    <p className="gsap-fade-up mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed text-lg">
                        Find quick answers to common questions about our products, delivery, and more.
                    </p>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section ref={contentRef} className="section-padding">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="gsap-fade-up rounded-2xl border border-border bg-card px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-shadow duration-300"
                            >
                                <AccordionTrigger className="font-heading font-semibold text-left hover:text-primary transition-colors py-5 hover:no-underline data-[state=open]:text-primary">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Still have questions */}
                    <div className="gsap-fade-up mt-12 rounded-2xl border border-border bg-card p-8 text-center">
                        <h3 className="font-heading text-lg font-bold mb-2">Still have questions?</h3>
                        <p className="text-sm text-muted-foreground mb-5">
                            Can&apos;t find what you&apos;re looking for? Reach out to our team.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
