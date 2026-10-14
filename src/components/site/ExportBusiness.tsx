import { motion } from "framer-motion";
import { Ship, Package, Globe2, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import portImg from "@/assets/export-port.jpg";

const steps = [
  { Icon: Package, title: "Order & Consolidation", desc: "Direct sourcing from European OEMs, consolidated in Dubai." },
  { Icon: Ship, title: "Sea & Land Freight", desc: "Containerized shipments from Jebel Ali to ports across Africa and the GCC." },
  { Icon: Globe2, title: "Global Delivery", desc: "Trusted freight partnerships ensure on-time delivery worldwide." },
];

export function ExportBusiness() {
  return (
    <section id="exports" className="relative py-28 md:py-40 bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none" />
      <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative overflow-hidden rounded-2xl aspect-[5/6]">
            <img src={portImg} alt="Shipping port with containers" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/20 to-transparent" />
          </div>
          <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-brand max-w-[220px]">
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">Active export lanes</div>
            <div className="font-display text-4xl font-semibold mt-2 leading-none">20+</div>
            <div className="text-xs mt-2 text-white/80">countries served weekly</div>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <div className="eyebrow-light"><span className="hairline text-white" /> Export division</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight">
            A global supply chain, engineered from the UAE.
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl">
            Our Deira Dubai export hub coordinates containerized shipments across the GCC and East & West Africa, backed by five decades of sourcing relationships with European manufacturers.
          </p>

          <div className="mt-12 space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-5 items-start pb-6 border-b border-white/10 last:border-0"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/5 ring-1 ring-white/15 text-primary">
                  <s.Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xs text-white/40 tabular-nums">0{i+1}</span>
                    <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link to="/contact" className="btn-primary mt-10">Discuss an export order <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
