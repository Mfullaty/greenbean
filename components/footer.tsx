import Link from "next/link";
import { Leaf, Mail, Phone, Clock, Instagram } from "lucide-react";
import { navLinks, contactInfo } from "@/lib/data";
import { Logo } from "./logo";

export function Footer() {
    return (
        <footer className="border-t border-border bg-card">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main footer */}
                <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Logo />
                        <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
                            Digital wellness and business resources designed to support healthier living, improved
                            productivity, and sustainable financial growth.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                            Contact Us
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                                    <span className="break-all">{contactInfo.email}</span>
                                </a>
                            </li>
                            {contactInfo.phones.map((phone) => (
                                <li key={phone}>
                                    <a
                                        href={`tel:${phone.replace(/\s/g, "")}`}
                                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        <Phone className="h-4 w-4 shrink-0" />
                                        {phone}
                                    </a>
                                </li>
                            ))}
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4 shrink-0" />
                                {contactInfo.hours}
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                            Follow Us
                        </h4>
                        <a
                            href={contactInfo.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        >
                            <Instagram className="h-4 w-4" />
                            {contactInfo.instagramHandle}
                        </a>
                        <p className="mt-4 text-xs text-muted-foreground">
                            Follow us for wellness tips, product updates, and exclusive offers.
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border py-6 text-center">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} GreenBean. All rights reserved. Serving customers globally.
                    </p>
                </div>
            </div>
        </footer>
    );
}
