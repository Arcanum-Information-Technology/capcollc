import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageLayout } from "@/components/site/PageLayout";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Building2, Printer, Star } from "lucide-react";
import { BRANCHES_DATA, HEAD_OFFICE_PHONE, HEAD_OFFICE_PHONE_DISPLAY } from "@/data/branches";
import { sendContactMessage } from "@/lib/contact-email";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const subjects = [
  "Parts Inquiry",
  "Export Order",
  "Wholesale / Fleet Pricing",
  "Branch Contact",
  "General Enquiry",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", subject: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const result = await sendContactMessage({ data: form });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setSubmitted(true);
    } catch {
      setError("We couldn't send your message. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's talk about your parts requirements."
        accent="Let's talk"
        subtitle="Same-day quotes for stocked SKUs. Reach out to our sales team for fleet pricing, export orders or general enquiries."
      />

      <section className="py-24 md:py-36 bg-background">
        <div className="container-x">
          {/* Top Quick Call Banner */}
          <div className="mb-16 rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 p-8 text-white shadow-elev-2 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-500/30">
            <div>
              <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">Direct Head Office Line</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">Need Immediate Parts Support?</h3>
              <p className="text-slate-300 text-sm mt-1">Connect directly with our Abu Dhabi Head Office for instant stock verification.</p>
            </div>
            <a
              href={`tel:${HEAD_OFFICE_PHONE}`}
              className="inline-flex items-center gap-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 shadow-lg shadow-emerald-600/30 transition-all text-base shrink-0"
            >
              <Phone className="h-5 w-5 animate-pulse" /> Call Head Office ({HEAD_OFFICE_PHONE_DISPLAY})
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 lg:items-start">

            {/* LEFT COLUMN — sticky wrapper is a plain div (no transform) */}
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                  Send us a message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center"
                  >
                    <CheckCircle2 className="h-14 w-14 text-primary mx-auto mb-4" strokeWidth={1.5} />
                    <h3 className="font-display text-2xl font-semibold">Message received!</h3>
                    <p className="mt-3 text-muted-foreground">Our team will get back to you within one business day.</p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setError("");
                        setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
                      }}
                      className="btn-primary mt-8"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Full name *</label>
                        <input
                          id="name" name="name" type="text" required
                          value={form.name} onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">Company</label>
                        <input
                          id="company" name="company" type="text"
                          value={form.company} onChange={handleChange}
                          placeholder="Your company"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Email address *</label>
                        <input
                          id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">Phone number</label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange}
                          placeholder="+971 50 000 0000"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-ink mb-1.5">Subject *</label>
                      <select
                        id="subject" name="subject" required
                        value={form.subject} onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all appearance-none"
                      >
                        <option value="">Select a subject...</option>
                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">Message *</label>
                      <textarea
                        id="message" name="message" required rows={6}
                        value={form.message} onChange={handleChange}
                        placeholder="Describe your requirements, part numbers, quantities, or any other details..."
                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                      />
                    </div>

                    {error && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60"
                    >
                      <Send className="h-4 w-4" /> {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* RIGHT COLUMN — Branch Locations */}
            <div>
              <motion.h2
                className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Branch Locations &amp; Info
              </motion.h2>

              <div className="space-y-5">
                {BRANCHES_DATA.map((b, i) => (
                  <motion.div
                    key={b.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className={`rounded-2xl border ${
                      b.isHeadOffice ? "border-emerald-500/40 bg-emerald-50/30" : "border-border bg-card"
                    } p-7 card-lift`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                        b.isHeadOffice ? "bg-emerald-600 text-white" : "bg-primary/10 text-primary"
                      }`}>
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-display font-bold text-lg tracking-tight flex items-center gap-2">
                            {b.name}
                            {b.isHeadOffice && <Star className="h-4 w-4 text-amber-500 fill-amber-500" />}
                          </h3>
                          {b.isHeadOffice && (
                            <span className="text-[10px] uppercase tracking-wider font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                              Headquarters
                            </span>
                          )}
                        </div>

                        <div className="mt-4 space-y-2.5 text-sm">
                          <div className="flex gap-2.5 text-muted-foreground">
                            <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                            <span>{b.address}</span>
                          </div>
                          <div className="flex gap-2.5 text-muted-foreground">
                            <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                            <div>
                              <a href={`tel:${b.phoneRaw}`} className="font-bold text-ink hover:text-emerald-600 transition-colors">
                                Tel: {b.phone}
                              </a>
                              {b.secondaryPhone && (
                                <span className="ml-2 font-medium">/ {b.secondaryPhone}</span>
                              )}
                            </div>
                          </div>
                          {b.fax && (
                            <div className="flex gap-2.5 text-muted-foreground">
                              <Printer className="h-4 w-4 mt-0.5 text-slate-400 shrink-0" />
                              <span>Fax: {b.fax}</span>
                            </div>
                          )}
                          {b.email && (
                            <div className="flex gap-2.5 text-muted-foreground">
                              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                              <a href={`mailto:${b.email}`} className="hover:text-primary transition-colors">{b.email}</a>
                            </div>
                          )}
                          <div className="flex gap-2.5 text-muted-foreground">
                            <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                            <span>{b.hours}</span>
                          </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                          <a
                            href={`tel:${b.phoneRaw}`}
                            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                              b.isHeadOffice
                                ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow"
                                : "bg-ink text-white hover:bg-primary"
                            }`}
                          >
                            <Phone className="h-3.5 w-3.5" /> Call {b.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}

