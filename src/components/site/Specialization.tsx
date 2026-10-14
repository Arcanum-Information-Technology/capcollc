import { motion } from "framer-motion";
import {
  ArrowUpRight, Cog, Disc3, Filter, Wrench, Zap, Wind, GitBranch, Gauge,
  Lightbulb, Sparkles, Shield, Eye, Disc, Layout, Flame, ShieldAlert
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useIsMobile } from "@/hooks/use-mobile";

import brakeImg from "@/assets/part-brake.jpg";
import engineImg from "@/assets/part-engine.jpg";
import filterImg from "@/assets/part-filter.jpg";
import transImg from "@/assets/part-transmission.jpg";
import suspImg from "@/assets/part-suspension.jpg";
import axleImg from "@/assets/part-axle.jpg";
import bearingImg from "@/assets/part-bearing.jpg";

import lightingImg from "@/assets/part-lighting.jpg";
import stylingImg from "@/assets/part-styling.jpg";
import bumpersImg from "@/assets/part-bumpers.jpg";
import mirrorsImg from "@/assets/part-mirrors.jpg";
import wheelsImg from "@/assets/part-wheels.jpg";
import interiorImg from "@/assets/part-interior.jpg";
import exhaustImg from "@/assets/part-exhaust.jpg";
import safetyImg from "@/assets/part-safety.jpg";

type Item = { title: string; desc: string; img: string; Icon: React.ComponentType<{ className?: string }> };

const items: Item[] = [
  { title: "Trailer Components", desc: "Complete range of trailer axles, kingpins, landing gear & suspensions.", img: axleImg, Icon: GitBranch },
  { title: "Engine Parts", desc: "Heavy-duty diesel engine components sourced from tier-1 European manufacturers.", img: engineImg, Icon: Cog },
  { title: "Braking System", desc: "Discs, drums, calipers, pads and full air-brake system components.", img: brakeImg, Icon: Disc3 },
  { title: "Filters", desc: "Oil, fuel, air and hydraulic filters from Mann, Mahle and Diesel Technic.", img: filterImg, Icon: Filter },
  { title: "Suspension", desc: "Coil springs, dampers, air bags and complete suspension assemblies.", img: suspImg, Icon: Wrench },
  { title: "Transmission", desc: "Gearboxes, clutches and driveline components for heavy-duty applications.", img: transImg, Icon: Gauge },
  { title: "Cooling Systems", desc: "Radiators, intercoolers, water pumps and thermal management assemblies.", img: engineImg, Icon: Wind },
  { title: "Electrical Parts", desc: "Starters, alternators, sensors and wiring harnesses for European trucks.", img: bearingImg, Icon: Zap },
  { title: "Lighting", desc: "Heavy-duty truck headlights, tail lights, spot lights, and LED amber beacons.", img: lightingImg, Icon: Lightbulb },
  { title: "Exterior Styling", desc: "Chrome accessories, grilles, side skirts, and custom exterior trim styling.", img: stylingImg, Icon: Sparkles },
  { title: "Bumpers & Guards", desc: "Reinforced front bumpers, bull bars, under-run protection, and mudguards.", img: bumpersImg, Icon: Shield },
  { title: "Mirrors", desc: "Aerodynamic wide-angle side mirrors, heated mirrors, and blind-spot mirrors.", img: mirrorsImg, Icon: Eye },
  { title: "Wheels & Tires", desc: "Steel and alloy wheels, tire pressure monitoring systems, and premium heavy-duty truck tires.", img: wheelsImg, Icon: Disc },
  { title: "Interior Accessories", desc: "Cabin styling, custom mats, steering wheel wraps, and luxury dashboard accents.", img: interiorImg, Icon: Layout },
  { title: "Exhaust System", desc: "Chrome stacks, silencers, manifolds, DPF filters, and emission control pipes.", img: exhaustImg, Icon: Flame },
  { title: "Safety Accessories", desc: "Warning triangles, fire extinguishers, warning tape, and visual alarms.", img: safetyImg, Icon: ShieldAlert },
];

interface SpecializationProps {
  limit?: number;
  showViewMore?: boolean;
  layout?: "grid" | "slider";
}

export function Specialization({ limit, showViewMore = false, layout = "grid" }: SpecializationProps) {
  const isMobile = useIsMobile();
  const displayLimit = isMobile ? 6 : limit;
  const displayedItems = displayLimit ? items.slice(0, displayLimit) : items;
  const isSlider = layout === "slider";

  return (
    <section id="products" className="relative py-28 md:py-40 bg-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow"><span className="hairline" /> Our specialization</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight">
              Everything a European truck needs — under one roof.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Comprehensive range of parts and accessories, held in stock and ready to ship.
          </p>
        </div>

        <div className={isSlider ? "flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory -mx-4 px-4 scrollbar-hide" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"}>
          {displayedItems.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: isSlider ? i * 0.05 : (i % 4) * 0.08 }}
              className={`group card-lift relative overflow-hidden rounded-2xl border border-border bg-card ${isSlider ? "snap-start shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%]" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                <div className="absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-lg bg-white/95 text-primary shadow-elev-1">
                  <it.Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {showViewMore && items.length > (limit || 0) && (
          <div className="mt-16 text-center">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              View All Categories <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
