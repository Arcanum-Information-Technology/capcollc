import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import ctaImg from "@/assets/cta-warehouse.jpg";
import { HEAD_OFFICE_PHONE, HEAD_OFFICE_PHONE_DISPLAY } from "@/data/branches";

export function CTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden text-white">
      <img src={ctaImg} alt="Warehouse aisle" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 to-ink/20" />

      <div className="relative container-x max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/60">
            <span className="hairline text-white" /> Let's talk
          </div>
          <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-balance">
            Need genuine European truck spare parts?
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Speak directly to our Abu Dhabi Head Office or branch sales teams for instant fleet quotes and export dispatch.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${HEAD_OFFICE_PHONE}`} className="btn-primary bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-lg shadow-emerald-600/30">
              <Phone className="h-4 w-4 animate-bounce" /> Call Head Office ({HEAD_OFFICE_PHONE_DISPLAY})
            </a>
            <Link to="/contact" className="btn-ghost">Get a Detailed Quote <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

