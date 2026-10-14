import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

type TestimonialItem = {
  quote: string;
  name: string;
  company: string;
};

const items: TestimonialItem[] = [
  { quote: "Central Auto Parts has been our trusted parts partner for over fifteen years. Their inventory depth and delivery consistency are unmatched in the region.", name: "Fleet Operations Director", company: "GCC Logistics Group" },
  { quote: "The team's technical knowledge and access to genuine European stock has made them essential to our workshop operations.", name: "Managing Partner", company: "Heavy Vehicle Workshops LLC" },
  { quote: "For our East African distribution business, their export division delivers with precision — invoicing, documentation and freight are all handled seamlessly.", name: "Procurement Head", company: "Nairobi Trailer Co." },
  { quote: "Same-day delivery in Abu Dhabi and Dubai has saved our fleet from costly downtime multiple times. Their customer support is top-notch.", name: "Logistics Manager", company: "Al Maha Transport" },
  { quote: "Finding genuine OEM parts for older model Mercedes and Volvo trucks used to be a struggle until we partnered with Central Auto Parts.", name: "Maintenance Supervisor", company: "Emirates Fleet Services" },
  { quote: "Their wholesale pricing and flexible shipping terms make them the perfect distributor for independent parts retailers like us.", name: "Operations Lead", company: "Apex Auto Spares" },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = items.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // We want to scroll up to totalItems - 3 on large screen, totalItems - 2 on medium, totalItems - 1 on mobile
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = totalItems - visibleCount;

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [maxIndex]);



  return (
    <section className="relative py-28 md:py-40 bg-panel overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow"><span className="hairline" /> Client voices</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight">
              Trusted by operators who can't afford downtime.
            </h2>
          </div>
        </div>

        {/* Viewport for slider */}
        <div className="relative overflow-hidden -mx-4 px-4 py-4">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `calc(-${activeIndex * (100 / visibleCount)}% - ${activeIndex * (24 / visibleCount)}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {items.map((item, idx) => (
              <div 
                key={idx}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
              >
                <div className="relative h-full rounded-2xl bg-white border border-border p-8 md:p-10 shadow-elev-1 flex flex-col justify-between hover:shadow-elev-2 hover:border-primary/20 transition-all duration-300 group">
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/5 group-hover:text-primary/10 transition-colors" strokeWidth={1} />
                  
                  <div>
                    <p className="font-display text-lg md:text-xl leading-relaxed text-ink/90 font-medium">
                      "{item.quote}"
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="font-semibold text-ink group-hover:text-primary transition-colors">{item.name}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                stopTimer();
                setActiveIndex(idx);
                startTimer();
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-10 bg-primary" : "w-2.5 bg-border hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
