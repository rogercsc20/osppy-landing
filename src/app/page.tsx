import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Features from "@/components/features/Features";
import UseCases from "@/components/usecases/UseCases";
import WhyOsppy from "@/components/why/WhyOsppy";
import Testimonials from "@/components/testimonials/Testimonials";
import Pricing from "@/components/pricing/Pricing";
import CTA from "@/components/cta/CTA";
import FAQ from "@/components/faq/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <UseCases />
      <WhyOsppy />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
    </>
  );
}


