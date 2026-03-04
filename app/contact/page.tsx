"use client";

import { Mail, Phone, Clock, Instagram, Send } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { useGsapFadeUp, useGsapSlideIn } from "@/hooks/use-gsap-animations";

export default function ContactPage() {
    const heroRef = useGsapFadeUp();
    const contentRef = useGsapSlideIn();

    return (
        <div className="pt-20 md:pt-24">
            {/* Hero */}
            <section ref={heroRef} className="section-padding">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <p className="gsap-fade-up text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        Contact
                    </p>
                    <h1 className="gsap-fade-up font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="gsap-fade-up mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed text-lg">
                        Have questions? We&apos;re here to help. Reach out and we&apos;ll respond within 24–48 hours.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section ref={contentRef} className="section-padding">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-5">
                        {/* Form */}
                        <div className="gsap-slide-left lg:col-span-3">
                            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                                <h2 className="font-heading text-xl font-bold mb-6">Send Us a Message</h2>
                                <form
                                    className="space-y-5"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        window.location.href = `mailto:${contactInfo.email}`;
                                    }}
                                >
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="contact-name"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                placeholder="Your name"
                                                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="contact-email"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                placeholder="you@example.com"
                                                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact-subject"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            id="contact-subject"
                                            type="text"
                                            placeholder="What is this about?"
                                            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact-message"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            rows={5}
                                            placeholder="Tell us how we can help..."
                                            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
                                    >
                                        <Send className="h-4 w-4" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="gsap-slide-right lg:col-span-2 space-y-6">
                            {/* Email */}
                            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-heading font-semibold">Email</h3>
                                </div>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                                >
                                    {contactInfo.email}
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-heading font-semibold">Phone / WhatsApp</h3>
                                </div>
                                <div className="space-y-1">
                                    {contactInfo.phones.map((phone) => (
                                        <a
                                            key={phone}
                                            href={`tel:${phone.replace(/\s/g, "")}`}
                                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-heading font-semibold">Business Hours</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{contactInfo.hours}</p>
                            </div>

                            {/* Social */}
                            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Instagram className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-heading font-semibold">Follow Us</h3>
                                </div>
                                <a
                                    href={contactInfo.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {contactInfo.instagramHandle}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
