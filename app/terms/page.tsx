import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "GreenBean's terms and conditions for using our digital products and services.",
};

export default function TermsPage() {
    return (
        <div className="pt-20 md:pt-24">
            {/* Hero */}
            <section className="section-padding bg-accent/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        Legal
                    </p>
                    <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Terms & <span className="gradient-text">Conditions</span>
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 space-y-8">
                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">Digital Products</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                All products sold through GreenBean are digital downloads. Upon successful payment,
                                you will receive an instant download link to access your purchase. Products are
                                delivered electronically and are not available in physical format.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">Refund Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Due to the digital nature of our products, all sales are final and non-refundable.
                                We stand behind the quality of our products and encourage you to review product
                                descriptions and previews carefully before purchasing.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                All content, including ebooks, planners, templates, courses, and other digital
                                products, is the intellectual property of GreenBean. Redistribution, resale, or
                                unauthorized sharing of any purchased product is strictly prohibited.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">Usage Rights</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Upon purchase, you are granted a personal, non-transferable license to use the
                                product for individual purposes. You may print digital products for personal use but
                                may not distribute copies to others.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                GreenBean provides educational and informational resources. We are not liable for any
                                outcomes resulting from the use of our products. Health-related products are for
                                informational purposes and should not replace professional medical advice.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">Contact</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                For questions about these terms, contact us at{" "}
                                <a
                                    href="mailto:hellogreenbeanwellness@gmail.com"
                                    className="text-primary hover:underline"
                                >
                                    hellogreenbeanwellness@gmail.com
                                </a>
                                .
                            </p>
                        </div>

                        <div className="border-t border-border pt-6">
                            <p className="text-sm text-muted-foreground">
                                Last updated: March 2026. By using our website and purchasing our products, you
                                agree to these terms and conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
