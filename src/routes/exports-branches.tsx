import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Branches } from "@/components/site/Branches";
import { ExportBusiness } from "@/components/site/ExportBusiness";
import { Markets } from "@/components/site/Markets";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/exports-branches")({
  component: ExportsBranchesPage,
});

function ExportsBranchesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Global Network"
        title="Exports & Local Branches working together."
        accent="Exports & Local Branches"
        subtitle="With distribution hubs in Deira and Ras Al Khor, and our Mussafah head office, we power logistics across the GCC and 20+ countries worldwide."
      />
      <Branches />
      <ExportBusiness />
      <Markets />
    </PageLayout>
  );
}
