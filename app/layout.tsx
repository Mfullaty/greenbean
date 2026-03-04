import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "GreenBean: Digital Wellness & Business Resources",
    template: "%s | GreenBean",
  },
  description:
    "High-quality ebooks, templates, planners, and online courses designed to support healthier living, improved productivity, and sustainable financial growth.",
  keywords: [
    "wellness",
    "digital products",
    "ebooks",
    "planners",
    "courses",
    "nutrition",
    "productivity",
    "business templates",
    "healthy recipes",
    "self-care",
    "GreenBean",
  ],
  openGraph: {
    title: "GreenBean: Digital Wellness & Business Resources",
    description:
      "High-quality ebooks, templates, planners, and online courses for healthier living and sustainable growth.",
    type: "website",
    siteName: "GreenBean",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenBean: Digital Wellness & Business Resources",
    description:
      "High-quality ebooks, templates, planners, and online courses for healthier living and sustainable growth.",
  },
  // Add logo both ios and other devices
  icons: {
    icon: "./favicon.ico",
    apple: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
