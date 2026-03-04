import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shop",
    description:
        "Browse GreenBean's digital wellness products, ebooks, planners, courses, and business templates. Download instantly.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return children;
}
