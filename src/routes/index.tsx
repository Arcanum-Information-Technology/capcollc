import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhoWeAre } from "@/components/site/WhoWeAre";
import { Specialization } from "@/components/site/Specialization";
import { Brands } from "@/components/site/Brands";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Markets } from "@/components/site/Markets";
import { Branches } from "@/components/site/Branches";
import { ExportBusiness } from "@/components/site/ExportBusiness";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { useLenis } from "@/components/site/useLenis";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Specialization limit={8} showViewMore={true} />
      <Brands />
      <WhyChoose />
      <Markets />
      <Branches />
      <ExportBusiness />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
