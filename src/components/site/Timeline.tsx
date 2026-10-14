import { motion } from "framer-motion";

const events = [
  { year: "1975", title: "Company founded", desc: "Central Auto Parts opens its first office in Abu Dhabi, importing European truck spares." },
  { year: "1988", title: "Warehouse expansion", desc: "Doubled capacity to serve a growing regional demand from workshops and fleets." },
  { year: "2001", title: "Dubai branch", desc: "Opened Deira office to strengthen coverage across the Northern Emirates." },
  { year: "2010", title: "Export division launched", desc: "Formalized export operations into East & West African markets." },
  { year: "2018", title: "Ras Al Khor distribution", desc: "Added a dedicated local distribution branch for Dubai metropolitan area." },
  { year: "Today", title: "Industry leader", desc: "One of UAE's largest independent European truck parts distributors." },
];

export function Timeline() {
  return (
    <section className="relative py-28 md:py-40 bg-white">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow"><span className="hairline" /> Milestones</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight">
            Fifty years of measured growth.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {events.map((e, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.1 }}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 mb-14 ${right ? "" : ""}`}
              >
                <span className="absolute left-4 md:left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary/15" />
                <div className={right ? "md:col-start-2" : "md:pr-12 md:text-right"}>
                  <div className="font-display text-3xl md:text-5xl font-semibold text-primary tabular-nums">{e.year}</div>
                  <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold tracking-tight">{e.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-md md:inline-block">{e.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
