import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { WhoWeAre } from "@/components/site/WhoWeAre";
import { Timeline } from "@/components/site/Timeline";
import { WhyChoose } from "@/components/site/WhyChoose";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About Central Auto Parts"
        title="Five decades of trusted automotive excellence."
        accent="Five decades"
        subtitle="One of the UAE's oldest independent distributors of European truck and trailer spare parts — serving fleets, workshops and exporters since 1975."
      />
      <WhoWeAre />
      <Timeline />
      <WhyChoose />
    </PageLayout>
  );
}
