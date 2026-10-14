import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import whoImg from "@/assets/who-warehouse.jpg";

const points = [
  "Genuine OEM Parts",
  "Aftermarket Range",
  "Global Supply Chain",
  "Fast Regional Delivery",
  "Trusted Since 1975",
  "Import • Export • Distribution",
];

export function WhoWeAre() {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-background">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-elev-3">
            <img src={whoImg} alt="Truck fleet at distribution warehouse" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-6 md:-right-10 bg-white shadow-elev-3 rounded-xl p-6 md:p-8 max-w-[260px]">
            <div className="font-display text-5xl md:text-6xl font-semibold text-primary leading-none">50<span className="text-2xl align-top">yrs</span></div>
            <p className="mt-3 text-sm text-muted-foreground">of continuous operation as one of UAE's oldest truck parts distributors.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-6"
        >
          <div className="eyebrow"><span className="hairline" /> Who we are</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight text-balance">
            Five decades of trusted automotive excellence.
          </h2>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Central Auto Parts Co. LLC has served the United Arab Emirates for more than fifty years as a leading importer, exporter and distributor of European truck and trailer spare parts — supplying fleets, workshops and dealers from Abu Dhabi to East Africa.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-2.5 sm:gap-3">
            {points.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-2.5 sm:gap-3 rounded-lg border border-border bg-card px-3 py-2.5 sm:px-4 sm:py-3.5"
              >
                <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full bg-primary/15" />
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-medium">{p}</span>
              </motion.div>
            ))}
          </div>

          <Link to="/products" className="btn-outline mt-10">Discover our range <ArrowUpRight className="h-4 w-4" /></Link>
        </motion.div>
      </div>
    </section>
  );
}
