import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "GreenBean's privacy policy, how we handle your personal data.",
};

export default function PrivacyPage() {
    return (
        <div className="pt-20 md:pt-24">
            {/* Hero */}
            <section className="section-padding bg-accent/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        Legal
                    </p>
                    <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Privacy <span className="gradient-text">Policy</span>
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 space-y-8">
                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">Data We Collect</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We collect minimal personal data necessary to process your orders and improve your
                                user experience. This may include your name, email address, and payment information
                                provided during checkout.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">How We Use Your Data</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your information is used solely for order processing, customer support, and
                                improving our products and services. We use industry-standard security measures to
                                protect your data.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">Data Sharing</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We never sell, trade, or rent your personal information to third parties. We may
                                share data with trusted service providers who assist in operating our website and
                                processing payments, subject to confidentiality agreements.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">Cookies</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may use cookies to enhance your browsing experience. You can choose to disable
                                cookies through your browser settings, though this may affect some features of the
                                website.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold mb-3">Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You have the right to request access to, correction of, or deletion of your personal
                                data at any time. Contact us at{" "}
                                <a
                                    href="mailto:hellogreenbeanwellness@gmail.com"
                                    className="text-primary hover:underline"
                                >
                                    hellogreenbeanwellness@gmail.com
                                </a>{" "}
                                for any privacy-related requests.
                            </p>
                        </div>

                        <div className="border-t border-border pt-6">
                            <p className="text-sm text-muted-foreground">
                                Last updated: March 2026. This policy may be updated from time to time. Continued
                                use of our website constitutes acceptance of the updated policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
