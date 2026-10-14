import { motion } from "framer-motion";

// ─── Desktop map data (1400×560 viewBox) ─────────────────────────────────────
const regionsDesktop = [
  { name: "UAE", cx: 880, cy: 275, primary: true, labelDx: 14, labelDy: -11 },
  { name: "Kuwait", cx: 730, cy: 210, primary: false, labelDx: 14, labelDy: -11 },
  { name: "Saudi Arabia", cx: 660, cy: 295, primary: false, labelDx: -14, labelDy: -12, anchorEnd: true },
  { name: "Bahrain", cx: 790, cy: 245, primary: false, labelDx: -13, labelDy: -11, anchorEnd: true },
  { name: "Qatar", cx: 825, cy: 258, primary: false, labelDx: 13, labelDy: -11 },
  { name: "Oman", cx: 950, cy: 305, primary: false, labelDx: 14, labelDy: -11 },
  { name: "East Africa", cx: 555, cy: 400, primary: false, labelDx: 14, labelDy: -11 },
  { name: "West Africa", cx: 330, cy: 355, primary: false, labelDx: -14, labelDy: -11, anchorEnd: true },
];

// ─── Mobile map data (380×300 viewBox — tight zoom, readable labels) ──────────
// All coordinates fit inside a 380×300 canvas so they render at ~1px/unit on
// a 375px wide phone. fontSize="13" → actual ~13px on mobile = legible.
const regionsMobile = [
  { name: "UAE", cx: 258, cy: 110, primary: true, labelDx: 6, labelDy: 2, anchorEnd: false },
  { name: "Kuwait", cx: 188, cy: 74, primary: false, labelDx: 10, labelDy: -9, anchorEnd: false },
  { name: "Saudi Arabia", cx: 158, cy: 128, primary: false, labelDx: -10, labelDy: -9, anchorEnd: true },
  { name: "Bahrain", cx: 218, cy: 90, primary: false, labelDx: -2, labelDy: 9, anchorEnd: true },
  // Qatar label pushed higher (labelDy=-20) so it doesn't overlap UAE label
  { name: "Qatar", cx: 240, cy: 102, primary: false, labelDx: -5, labelDy: -4, anchorEnd: false },
  { name: "Oman", cx: 300, cy: 134, primary: false, labelDx: 10, labelDy: -9, anchorEnd: false },
  { name: "East Africa", cx: 150, cy: 200, primary: false, labelDx: 10, labelDy: -9, anchorEnd: false },
  // West Africa: moved right enough that label fits, anchor start (right side of dot)
  { name: "West Africa", cx: 98, cy: 174, primary: false, labelDx: 10, labelDy: -9, anchorEnd: false },
];

// Continent shapes scaled to the 380×300 mobile canvas
const mobileContPaths = [
  // Africa
  "M68 100 Q110 90 148 112 Q175 130 165 188 Q150 220 122 224 Q92 225 80 188 Q68 152 70 120 Z",
  // Arabian Peninsula
  "M152 68 Q210 60 266 80 Q308 95 304 132 Q292 150 265 155 Q230 160 200 148 Q166 135 156 110 Q150 88 152 68 Z",
  // India hint
  "M312 62 Q348 56 372 74 Q388 90 380 112 Q360 120 336 108 Q316 96 308 78 Z",
  // Horn of Africa
  "M162 148 Q180 144 188 162 L174 185 Q158 178 152 162 Z",
];

const travelDesktop = [
  { dur: "2.8s", begin: "0s" },
  { dur: "2.4s", begin: "0.6s" },
  { dur: "3.0s", begin: "1.1s" },
  { dur: "2.2s", begin: "0.3s" },
  { dur: "2.6s", begin: "1.5s" },
  { dur: "3.4s", begin: "1.4s" },
  { dur: "2.9s", begin: "0.8s" },
];

// Build route paths from hub to each destination
function buildRoutes(hub: { cx: number; cy: number }, targets: typeof regionsDesktop, prefix: string) {
  return targets.slice(1).map((r, i) => {
    const mx = (hub.cx + r.cx) / 2;
    const my = Math.min(hub.cy, r.cy) - (prefix === "m" ? 22 : 70);
    return {
      id: `${prefix}-route-${i}`,
      d: `M ${hub.cx} ${hub.cy} Q ${mx} ${my} ${r.cx} ${r.cy}`,
      cfg: travelDesktop[i],
    };
  });
}

// ─── Reusable inner SVG renderer ──────────────────────────────────────────────
function MapSVG({
  viewBox,
  regions,
  contPaths,
  routes,
  fontSize,
  dotR,
  travelerR,
  prefix,
}: {
  viewBox: string;
  regions: typeof regionsDesktop;
  contPaths: string[];
  routes: ReturnType<typeof buildRoutes>;
  fontSize: number;
  dotR: { primary: number; secondary: number };
  travelerR: number;
  prefix: string;
}) {
  return (
    <svg viewBox={viewBox} className="relative w-full h-auto">
      <defs>
        {routes.map(rt => <path key={rt.id} id={rt.id} d={rt.d} />)}
      </defs>

      {/* Continent fills */}
      <g fill="none" stroke="currentColor" className="text-ink/10" strokeWidth="1">
        {contPaths.map((d, i) => (
          <path key={i} d={d} fill="currentColor" fillOpacity="0.06" />
        ))}
      </g>

      {/* Dashed arcs */}
      {routes.map((rt, i) => (
        <motion.path
          key={rt.id + "-arc"}
          d={rt.d}
          stroke="var(--brand-green)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.45 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.3 + i * 0.15 }}
        />
      ))}

      {/* Traveling dots */}
      {routes.map(rt => (
        <circle key={rt.id + "-dot"} r={travelerR} fill="var(--brand-green)" opacity="0">
          <animateMotion dur={rt.cfg.dur} repeatCount="indefinite" begin={rt.cfg.begin} calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.6 1">
            <mpath href={`#${rt.id}`} />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={rt.cfg.dur} repeatCount="indefinite" begin={rt.cfg.begin} />
        </circle>
      ))}

      {/* Static dots + labels */}
      {regions.map((r, i) => (
        <g key={prefix + r.name}>
          <motion.circle
            cx={r.cx} cy={r.cy}
            r={r.primary ? dotR.primary : dotR.secondary}
            fill={r.primary ? "var(--brand-green)" : "#0F1115"}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 260 }}
          />
          <motion.text
            x={r.cx + r.labelDx}
            y={r.cy + r.labelDy}
            fontSize={fontSize}
            fill="#0F1115"
            fontWeight="600"
            textAnchor={r.anchorEnd ? "end" : "start"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 + i * 0.1 }}
          >
            {r.name}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}

export function Markets() {
  const hubDesktop = regionsDesktop[0];
  const hubMobile = regionsMobile[0];

  const routesDesktop = buildRoutes(hubDesktop, regionsDesktop, "d");
  const routesMobile = buildRoutes(hubMobile, regionsMobile, "m");

  const desktopContPaths = [
    "M200 40 Q310 18 430 58 Q510 80 530 125 L498 162 L405 168 L315 145 L222 108 Z",
    "M320 215 Q445 192 535 248 Q600 292 570 400 Q535 465 462 472 Q375 474 342 395 Q310 310 318 260 Q318 228 320 215 Z",
    "M660 195 Q790 178 900 215 Q978 242 972 305 Q944 340 882 352 Q810 362 745 338 Q672 308 650 262 Q645 225 660 195 Z",
    "M1000 185 Q1095 172 1160 208 Q1208 238 1188 288 Q1130 305 1065 282 Q1008 258 992 218 Z",
    "M600 315 Q648 308 672 352 L636 402 Q598 388 578 355 Z",
  ];

  return (
    <section className="relative py-28 md:py-40 bg-panel overflow-hidden">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow"><span className="hairline" /> Our markets</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight">
            From Abu Dhabi, serving the region and beyond.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Established distribution channels across the GCC and Africa, with export capabilities that reach 20+ countries.
          </p>
        </div>

        <div className="relative rounded-3xl border border-border bg-white p-4 sm:p-6 md:p-10 shadow-elev-1 overflow-hidden">
          <div className="absolute inset-0 grid-lines-dark opacity-70 pointer-events-none" />

          {/* MOBILE SVG — tight viewBox (380×230), large fonts, zoomed-in */}
          {/* viewBox starts at x=-10 to give West Africa label a small left margin */}
          <div className="block md:hidden">
            <MapSVG
              viewBox="0 0 390 235"
              regions={regionsMobile}
              contPaths={mobileContPaths}
              routes={routesMobile}
              fontSize={12}
              dotR={{ primary: 5, secondary: 3.5 }}
              travelerR={3}
              prefix="m"
            />
          </div>

          {/* DESKTOP SVG — full 1400×560 canvas */}
          <div className="hidden md:block">
            <MapSVG
              viewBox="0 0 1400 560"
              regions={regionsDesktop}
              contPaths={desktopContPaths}
              routes={routesDesktop}
              fontSize={11.5}
              dotR={{ primary: 6, secondary: 4.5 }}
              travelerR={3.5}
              prefix="d"
            />
          </div>

          {/* Footer stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
            {["UAE (Home)", "GCC Region", "East & West Africa", "20+ Countries"].map((s, i) => (
              <div key={s}>
                <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Region {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-1 font-display font-semibold text-base md:text-lg">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
