import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ",
    description:
        "Frequently asked questions about GreenBean's digital products, delivery, refunds, and more.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
    return children;
}
