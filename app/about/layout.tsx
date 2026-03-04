import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about GreenBean's mission to make holistic wellness and smart business practices accessible and affordable for everyone.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
