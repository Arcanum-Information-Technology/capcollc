import { Mail, Phone, MapPin, Clock, Printer } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { HEAD_OFFICE_PHONE, HEAD_OFFICE_PHONE_DISPLAY, BRANCHES_DATA } from "@/data/branches";

const exploreLinks = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/exports-branches", label: "Exports & Branches" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img src="/Centeral_Auto_Part_Logo.svg" alt="Central Auto Parts Logo" className="h-11 w-auto" />
              <div>
                <div className="font-display text-lg font-semibold">Central Auto Parts Co. LLC</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">Established 1975 · UAE</div>
              </div>
            </Link>
            <p className="mt-6 text-white/60 leading-relaxed max-w-md text-sm">
              One of the United Arab Emirates' longest-established importers, exporters and distributors of European truck and trailer spare parts. Serving UAE, GCC and Africa.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${HEAD_OFFICE_PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5" /> Call Head Office: {HEAD_OFFICE_PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              {[FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 hover:bg-primary hover:border-primary hover:text-white transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">Explore</div>
            <ul className="mt-5 space-y-3 text-sm">
              {exploreLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/80 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">Get in touch</div>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:info@capcollc.ae" className="text-white/85 hover:text-white">info@capcollc.ae</a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div className="text-white/85 space-y-1">
                  <div><strong>Head Office (Abu Dhabi):</strong> <a href={`tel:${HEAD_OFFICE_PHONE}`} className="hover:text-emerald-400">02 555 6900</a></div>
                  <div><strong>Mussafah:</strong> 02 554 2424 / 2425</div>
                  <div><strong>Deira (Dubai):</strong> 04 282 8001</div>
                  <div><strong>Ras Al Khor (Dubai):</strong> 04 333 3828</div>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="text-white/85">Abu Dhabi · Mussafah · Deira · Ras Al Khor</span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="text-white/85">Sat – Thu · 08:00 – 18:00 GST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Central Auto Parts Co. LLC. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

