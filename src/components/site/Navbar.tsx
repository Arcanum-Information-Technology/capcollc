import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { HEAD_OFFICE_PHONE, HEAD_OFFICE_PHONE_DISPLAY } from "@/data/branches";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/exports-branches", label: "Exports & Branches" },
  { to: "/contact", label: "Contact" },
];

interface NavbarProps {
  /** When true the navbar starts in solid (scrolled) state — used on inner pages */
  startSolid?: boolean;
}

export function Navbar({ startSolid = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(startSolid);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const currentPath = location.pathname;

  useEffect(() => {
    if (startSolid) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [startSolid]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  const isActive = (to: string) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav-solid" : "glass-nav"}`}>
      <div className="container-x flex h-[74px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src="/Centeral_Auto_Part_Logo.svg" alt="Central Auto Parts Logo" className="h-9 w-auto" />
          <div className="leading-tight">
            <div className={`font-display text-[15px] font-semibold tracking-tight transition-colors ${scrolled ? "text-ink" : "text-white"}`}>Central Auto Parts</div>
            <div className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-white/60"}`}>Est. 1975 · UAE</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors relative py-1 ${
                scrolled ? "text-ink hover:text-primary" : "text-white/85 hover:text-white"
              } ${isActive(l.to) ? (scrolled ? "text-primary" : "text-white") : ""}`}
            >
              {l.label}
              {isActive(l.to) && (
                <motion.span
                  layoutId="nav-active-pill"
                  className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full ${scrolled ? "bg-primary" : "bg-white"}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Call Button for Head Office */}
          <a
            href={`tel:${HEAD_OFFICE_PHONE}`}
            title="Call Head Office (Abu Dhabi)"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all ${
              scrolled
                ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                : "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20"
            }`}
          >
            <Phone className="h-3.5 w-3.5 animate-pulse" />
            <span className="hidden sm:inline">Call:</span>
            <span>{HEAD_OFFICE_PHONE_DISPLAY}</span>
          </a>

          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              scrolled ? "bg-primary text-primary-foreground hover:bg-primary-dark" : "bg-white text-ink hover:bg-white/90"
            }`}
          >
            Request Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen(v => !v)}
            className={`lg:hidden grid h-10 w-10 place-items-center rounded-md ${scrolled ? "text-ink" : "text-white"}`}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container-x py-6 flex flex-col gap-2">
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-ink text-base font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    isActive(l.to) ? "bg-primary/8 text-primary" : "hover:bg-panel"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${HEAD_OFFICE_PHONE}`}
                  className="btn-primary bg-emerald-600 hover:bg-emerald-700 justify-center text-white"
                >
                  <Phone className="h-4 w-4" /> Call Head Office ({HEAD_OFFICE_PHONE_DISPLAY})
                </a>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-outline justify-center"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

