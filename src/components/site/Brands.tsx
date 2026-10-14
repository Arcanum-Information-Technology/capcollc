import { motion } from "framer-motion";
import { Shield, Settings, Compass, Layers, Disc, Activity, Wind, Eye, Cpu, Zap, CheckCircle2 } from "lucide-react";
import { PARTNER_BRANDS } from "@/data/branches";

type BrandDetail = {
  name: string;
  specialty: string;
  country: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  logoColor: string;
};

const brands: BrandDetail[] = [
  { name: "Mercedes-Benz", specialty: "OEM Engine & Chassis Parts", country: "Germany", Icon: Compass, logoColor: "text-slate-400" },
  { name: "Volvo", specialty: "Drivetrain & Body Components", country: "Sweden", Icon: Shield, logoColor: "text-blue-500" },
  { name: "MAN", specialty: "Powertrain & Heavy Engine Systems", country: "Germany", Icon: Cpu, logoColor: "text-red-500" },
  { name: "CEI Italy", specialty: "Transmission & Differential Gears", country: "Italy", Icon: Settings, logoColor: "text-emerald-500" },
  { name: "TEMAC", specialty: "High-performance Gaskets & Seals", country: "Czech Rep.", Icon: Layers, logoColor: "text-amber-500" },
  { name: "Lenger", specialty: "Pneumatics & Air Brake Valves", country: "Germany", Icon: Wind, logoColor: "text-cyan-500" },
  { name: "M-Filters", specialty: "Premium Heavy Filtration Systems", country: "Lithuania", Icon: Disc, logoColor: "text-teal-500" },
  { name: "Diesel Technic", specialty: "Commercial Vehicle Spare Parts", country: "Germany", Icon: Activity, logoColor: "text-orange-500" },
  { name: "Febi", specialty: "Steering, Suspension & Chassis", country: "Germany", Icon: Zap, logoColor: "text-indigo-500" },
  { name: "Eaton", specialty: "Heavy Duty Clutch Assemblies", country: "USA", Icon: Eye, logoColor: "text-violet-500" },
];

export function Brands() {
  const marqueeRail = [...brands, ...brands];

  return (
    <section id="brands" className="relative py-28 md:py-36 bg-panel overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* SECTION 1: PARTS PROVIDER PARTNERS FROM PUBLIC/PATNERS */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow"><span className="hairline" /> Official Supply Partners</div>
              <h2 className="mt-5 font-display text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                Our Direct Parts Provider Partners
              </h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg max-w-md">
              We collaborate with world-class component manufacturers to supply verified European truck spare parts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNER_BRANDS.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-border bg-white p-6 shadow-elev-1 hover:shadow-elev-3 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 w-full rounded-xl overflow-hidden bg-slate-100 mb-5 flex items-center justify-center p-3">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} partner logo`}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-primary/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md">
                      {partner.badge}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors flex items-center gap-2">
                    {partner.name}
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-primary uppercase tracking-wider">
                    {partner.category}
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium">Verified Partner</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: GLOBAL AUTHORIZED BRAND PARTNERS */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 pt-12 border-t border-border">
          <div className="max-w-2xl">
            <div className="eyebrow"><span className="hairline" /> OEM & Replacement Brands</div>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-semibold leading-[1.02] tracking-tight">
              Backed by the world's most trusted names.
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-md">
            Comprehensive stock coverage across leading European OEMs and tier-1 aftermarket manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative flex flex-col justify-between p-4 sm:p-6 rounded-2xl border border-border bg-white shadow-elev-1 transition-all duration-300 hover:shadow-elev-2 hover:-translate-y-1 hover:border-primary/30"
            >
              {/* Inner card light glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Brand Monogram/Icon */}
                  <div className={`p-2.5 rounded-xl bg-slate-50 transition-colors group-hover:bg-primary/10 ${b.logoColor} group-hover:text-primary`}>
                    <b.Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  {/* Country Flag Tag */}
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground/60 bg-slate-100/60 px-2 py-0.5 rounded-full">
                    {b.country}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors">
                  {b.name}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {b.specialty}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic sliding marquee for logos list */}
      <div className="mt-20 overflow-hidden border-y border-border py-8 bg-white/40 backdrop-blur-sm relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-panel to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-panel to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {marqueeRail.map((b, i) => (
            <span key={i} className="inline-flex items-center gap-3 font-display text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors cursor-default">
              <b.Icon className="h-5 w-5 text-primary/40" />
              {b.name}
              <span className="text-primary/20 ml-6">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

