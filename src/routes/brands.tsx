import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Brands } from "@/components/site/Brands";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/brands")({
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Brand Partners"
        title="Backed by the world's most trusted names."
        accent="most trusted"
        subtitle="We supply from a curated roster of European OEMs and tier-1 aftermarket manufacturers — held in stock, ready for regional dispatch."
      />
      <Brands />
    </PageLayout>
  );
}
