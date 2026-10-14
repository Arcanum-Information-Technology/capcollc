import { motion } from "framer-motion";
import brakeImg from "@/assets/part-brake.jpg";
import engineImg from "@/assets/part-engine.jpg";
import filterImg from "@/assets/part-filter.jpg";
import transImg from "@/assets/part-transmission.jpg";
import suspImg from "@/assets/part-suspension.jpg";
import axleImg from "@/assets/part-axle.jpg";
import bearingImg from "@/assets/part-bearing.jpg";
import whoImg from "@/assets/who-warehouse.jpg";

const shots = [
  { src: whoImg, label: "Distribution Fleet", large: true },
  { src: brakeImg, label: "Brake Systems" },
  { src: engineImg, label: "Diesel Engine" },
  { src: transImg, label: "Transmission" },
  { src: filterImg, label: "Filters", large: true },
  { src: axleImg, label: "Axles & Hubs" },
  { src: suspImg, label: "Suspension" },
  { src: bearingImg, label: "Bearings & Clutch" },
];

export function Gallery() {
  return (
    <section className="relative py-28 md:py-40 bg-panel">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow"><span className="hairline" /> Inventory · Gallery</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight">
            The scale, up close.
          </h2>
        </div>

        {/* Fixed grid: 2 rows × 4 cols, no row-span overflow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* First row: large card takes 2 cols, 3 regular cards */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0 }}
            className="group relative overflow-hidden rounded-xl bg-ink col-span-2 h-[300px] md:h-[340px]"
          >
            <img src={whoImg} alt="Distribution Fleet" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
            <figcaption className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">In stock</div>
              <div className="font-display font-semibold text-base md:text-lg mt-0.5">Distribution Fleet</div>
            </figcaption>
          </motion.figure>

          {[{ src: brakeImg, label: "Brake Systems" }, { src: engineImg, label: "Diesel Engine" }].map((s, i) => (
            <motion.figure
              key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i + 1) * 0.07 }}
              className="group relative overflow-hidden rounded-xl bg-ink h-[300px] md:h-[340px]"
            >
              <img src={s.src} alt={s.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">In stock</div>
                <div className="font-display font-semibold text-base md:text-lg mt-0.5">{s.label}</div>
              </figcaption>
            </motion.figure>
          ))}

          {/* Second row: 3 regular + 1 large */}
          {[{ src: transImg, label: "Transmission" }, { src: axleImg, label: "Axles & Hubs" }, { src: suspImg, label: "Suspension" }].map((s, i) => (
            <motion.figure
              key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i + 3) * 0.07 }}
              className="group relative overflow-hidden rounded-xl bg-ink h-[220px] md:h-[260px]"
            >
              <img src={s.src} alt={s.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">In stock</div>
                <div className="font-display font-semibold text-base md:text-lg mt-0.5">{s.label}</div>
              </figcaption>
            </motion.figure>
          ))}

          <motion.figure
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 6 * 0.07 }}
            className="group relative overflow-hidden rounded-xl bg-ink col-span-2 md:col-span-1 h-[220px] md:h-[260px]"
          >
            <img src={filterImg} alt="Filters" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
            <figcaption className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">In stock</div>
              <div className="font-display font-semibold text-base md:text-lg mt-0.5">Filters</div>
            </figcaption>
          </motion.figure>

          {/* Third row: bearing wide card */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 7 * 0.07 }}
            className="group relative overflow-hidden rounded-xl bg-ink col-span-2 md:col-span-4 h-[180px] md:h-[200px]"
          >
            <img src={bearingImg} alt="Bearings & Clutch" loading="lazy" className="h-full w-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
            <figcaption className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">In stock</div>
              <div className="font-display font-semibold text-base md:text-lg mt-0.5">Bearings & Clutch</div>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
