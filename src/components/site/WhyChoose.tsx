import { motion } from "framer-motion";
import { Award, Boxes, Globe2, Zap, ShieldCheck, LineChart, Handshake, Users } from "lucide-react";

const items = [
  { Icon: Award, title: "50+ Years Experience", desc: "Five decades of distribution excellence in the UAE." },
  { Icon: Boxes, title: "Huge Inventory", desc: "Thousands of SKUs across ten product families in stock." },
  { Icon: Globe2, title: "Global Export", desc: "Serving GCC and African markets from Abu Dhabi and Dubai." },
  { Icon: Zap, title: "Fast Delivery", desc: "Same-day dispatch across UAE, next-day across the GCC." },
  { Icon: ShieldCheck, title: "OEM Quality", desc: "Only genuine and tier-1 aftermarket components." },
  { Icon: LineChart, title: "Competitive Pricing", desc: "Direct European sourcing means better margins for our partners." },
  { Icon: Handshake, title: "Trusted Partnerships", desc: "Long-term relationships with fleet operators and workshops." },
  { Icon: Users, title: "Experienced Team", desc: "Multilingual sales and technical support across every branch." },
];

export function WhyChoose() {
  return (
    <section className="relative py-28 md:py-40 bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-100 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative container-x">
        <div className="max-w-2xl">
          <div className="eyebrow-light"><span className="hairline text-white" /> Why choose us</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight">
            Built on reliability. Scaled by expertise.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group relative bg-ink p-5 sm:p-8 md:p-10 hover:bg-white/[0.03] transition-colors"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <it.Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{it.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{it.desc}</p>
              <div className="absolute top-8 right-8 font-display text-xs text-white/30 tabular-nums">0{i+1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
