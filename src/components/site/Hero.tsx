import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HEAD_OFFICE_PHONE, HEAD_OFFICE_PHONE_DISPLAY } from "@/data/branches";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-ink text-white">
      {/* ── Video background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/truck_video.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
      {/* Light ray */}
      <div className="absolute -top-40 left-1/3 h-[120vh] w-[520px] rotate-12 bg-gradient-to-b from-white/10 to-transparent blur-3xl pointer-events-none" />

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container-x flex min-h-screen flex-col justify-between pt-32 pb-12">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <span className="hairline text-white" />
          <span className="eyebrow-light">Est. 1975 · Abu Dhabi · UAE</span>
        </motion.div>

        {/* Centre content */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display text-[clamp(2.5rem,6.4vw,6rem)] font-semibold leading-[0.98] tracking-tight text-balance"
          >
            Trusted European<br />
            <span className="text-white/70">Truck Spare Parts</span><br />
            Since <span className="text-primary">1975</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed"
          >
            Supplying genuine &amp; aftermarket European truck and trailer parts across UAE, GCC and Africa — with five decades of distribution expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/products" className="btn-primary">Explore Products <ArrowUpRight className="h-4 w-4" /></Link>
            <a href={`tel:${HEAD_OFFICE_PHONE}`} className="btn-ghost group hover:bg-emerald-600/20 hover:border-emerald-500 transition-colors">
              <Phone className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" /> 
              <span>Call Head Office ({HEAD_OFFICE_PHONE_DISPLAY})</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 flex flex-wrap items-end justify-between gap-8 border-t border-white/15 pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14">
            <Stat label="Years of trust" value="50+" />
            <Stat label="Product SKUs" value="5,000+" />
            <Stat label="Global brands" value="100+" />
            <Stat label="Countries served" value="20+" />
          </div>
          <div className="hidden md:flex items-center gap-3 text-white/60 text-xs tracking-[0.25em] uppercase">
            <span>Import</span><span className="h-px w-6 bg-white/30" />
            <span>Export</span><span className="h-px w-6 bg-white/30" />
            <span>Distribution</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs tracking-[0.15em] uppercase text-white/50">{label}</div>
    </div>
  );
}
