import { motion } from "framer-motion";
import { MapPin, Phone, Printer, Mail, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BRANCHES_DATA } from "@/data/branches";

export function Branches() {
  return (
    <section id="branches" className="relative py-28 md:py-40 bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="eyebrow"><span className="hairline" /> Direct Network</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight">
              Head Office &amp; Strategic UAE Branches
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Four key locations across Abu Dhabi and Dubai providing complete distribution coverage for truck parts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCHES_DATA.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group card-lift relative overflow-hidden rounded-2xl border ${
                b.isHeadOffice ? "border-primary/40 bg-primary/5 shadow-elev-2" : "border-border bg-panel"
              } p-6 flex flex-col justify-between`}
            >
              <div>
                {/* Map preview */}
                <div className="relative -m-6 mb-6 h-40 overflow-hidden bg-ink">
                  <div className="absolute inset-0 grid-lines opacity-100" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl scale-150 animate-pulse-dot" />
                      <MapPin className="relative h-9 w-9 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/80 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                      {b.isHeadOffice ? "Headquarters" : `Branch ${String(i).padStart(2,'0')}`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] mb-2">
                  <span className="text-primary font-semibold">{b.role}</span>
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight text-ink flex items-center gap-2">
                  {b.name}
                  {b.isHeadOffice && <Star className="h-4 w-4 text-amber-500 fill-amber-500" />}
                </h3>

                <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>P.O Box: <strong className="text-ink">{b.poBox}</strong> · {b.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Tel: <a href={`tel:${b.phoneRaw}`} className="font-medium text-ink hover:text-primary transition-colors">{b.phone}</a></span>
                    {b.secondaryPhone && <span>/ {b.secondaryPhone}</span>}
                  </div>
                  {b.fax && (
                    <div className="flex items-center gap-2">
                      <Printer className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span>Fax: {b.fax}</span>
                    </div>
                  )}
                  {b.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span>{b.email}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 border-t border-border/80 pt-4 flex items-center justify-between gap-2">
                <a
                  href={`tel:${b.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ink text-white hover:bg-primary py-2.5 px-3 text-xs font-semibold transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" /> Call {b.isHeadOffice ? "Head Office" : "Branch"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

