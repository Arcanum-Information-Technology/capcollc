import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Specialization } from "@/components/site/Specialization";
import { Gallery } from "@/components/site/Gallery";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Products"
        title="Everything a European truck needs — under one roof."
        accent="under one roof"
        subtitle="Ten product families, thousands of SKUs, all held in stock and ready to ship regionally or globally."
      />
      <Specialization />
      <Gallery />
    </PageLayout>
  );
}
