import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  accent?: string; // highlighted word/phrase in title
}

export function PageHero({ eyebrow, title, subtitle, accent }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 bg-ink text-white overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
      {/* Decorative glow */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

      <div className="relative container-x">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="hairline text-white" />
          <span className="eyebrow-light">{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-display text-[clamp(2.4rem,5.5vw,5rem)] font-semibold leading-[1.02] tracking-tight text-balance max-w-4xl"
        >
          {accent ? (
            <>
              {title.split(accent)[0]}
              <span className="text-primary">{accent}</span>
              {title.split(accent)[1]}
            </>
          ) : (
            title
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
