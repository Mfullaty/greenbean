import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CategoriesSection } from "@/components/sections/categories-section";
import { ProductsSection } from "@/components/sections/products-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <ProductsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
