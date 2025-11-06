import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Easing,
} from "framer-motion";
import matrixSA from "../Assets/matrixSA.png";

type Step = { title: string; body: string };

const STEPS: Step[] = [
  {
    title: "Mission Intelligence",
    body: "Coordinated mission of unmanned systems with intelligence running across the decentralized virtual brains.",
  },
  {
    title: "Cognitive AI Agents",
    body: "Adaptive, edge-evolving AI agents that sense, comprehend, and act in real time. Continuously learning from every signal.",
  },
  {
    title: "Augmented Situational Awareness",
    body: "Unifying insights across all domains to deliver situational awareness and mission mastery — empowering faster, smarter, and more resilient mission autonomy.",
  },
];

// Framer Motion variants / easing
const EASE: Easing = [0.18, 0.72, 0.24, 1];
const slide: Variants = {
  enterUp: { opacity: 0, y: 24 },
  enterDown: { opacity: 0, y: -24 },
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  exitUp: { opacity: 0, y: -24, transition: { duration: 0.35, ease: EASE } },
  exitDown: { opacity: 0, y: 24, transition: { duration: 0.35, ease: EASE } },
};

export default function MatrixSAIntro() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"up" | "down">("down"); // controls slide direction

  // — scroll throttle so each wheel step moves exactly one slide —
  const cooldownRef = useRef(false);
  const go = useCallback((next: number, direction: "up" | "down") => {
    if (cooldownRef.current) return;
    cooldownRef.current = true;
    setDir(direction);
    setIndex(((next % STEPS.length) + STEPS.length) % STEPS.length);
    setTimeout(() => (cooldownRef.current = false), 550);
  }, []);

  const next = () => go(index + 1, "down");
  const prev = () => go(index - 1, "up");

  // wheel, arrow keys, swipe
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 10) return;
      e.preventDefault();
      e.deltaY > 0 ? next() : prev();
    };

    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        next();
      }
      if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
        e.preventDefault();
        prev();
      }
    };

    // simple touch swipe
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dy = e.changedTouches[0].clientY - touchY;
      if (Math.abs(dy) > 30) dy < 0 ? next() : prev();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
    };
  }, [next, prev]);

  return (
    <section
      id="matrixSAIntro"
      ref={sectionRef}
      className="fullscreen-dark relative flex items-center justify-start w-full overflow-hidden border-b border-white"
      style={{
        backgroundImage: `url(${matrixSA})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="MatriX-SA Intro Stepper"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

      {/* Title block (static) */}
      <div className="relative z-10 pl-[8%] pr-4 pt-6 w-full max-w-5xl">
        <h3 className="text-sm tracking-[0.3em] font-semibold mb-2">
          Matri<span className="text-white">X-SA</span>
        </h3>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-snug mb-8">
          Intelligence Behind <br />
          Every Mission
        </h1>

        {/* Stepper core — only one step visible */}
        <div className="relative w-full max-w-2xl">
          {/* bullets/dots (left) */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > index ? "down" : "up")}
                aria-label={`Go to step ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/40 transition
                 ${i === index ? "scale-125 bg-white" : "bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>

          {/* content area */}
          <div className="min-h-[180px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                variants={slide}
                initial={dir === "down" ? "enterDown" : "enterUp"}
                animate="center"
                exit={dir === "down" ? "exitUp" : "exitDown"}
              >
                <h4 className="text-2xl md:text-3xl font-semibold text-rose-300 mb-3">
                  {STEPS[index].title}
                </h4>
                <p className="text-white/90 text-lg leading-relaxed">
                  {STEPS[index].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* controls (mobile) */}
          <div className="mt-6 flex items-center gap-4 md:hidden">
            <button
              onClick={prev}
              className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition"
            >
              ↑
            </button>
            <button
              onClick={next}
              className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition"
            >
              ↓
            </button>

            <div className="ml-auto flex items-center gap-2">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > index ? "down" : "up")}
                  className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA (unchanged) */}
        <div className="mt-10">
          <a
            href="/matrix/sa"
            className="inline-flex items-center gap-3 text-lg font-semibold group relative"
          >
            <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-section-light after:transition-all after:duration-300 group-hover:after:w-full">
              Explore MatriX-SA
            </span>
            <span className="inline-block transition-transform group-hover:translate-x-2 duration-300">
              →
            </span>
          </a>
        </div>
      </div>

      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_160px_rgba(0,0,0,0.35)]" />

      {/* responsive bg tweak */}
      <style>{`
        @media (max-width: 1024px) {
          section#matrixSAIntro { background-position: 65% center !important; }
        }
        @media (max-width: 768px) {
          section#matrixSAIntro { background-position: 60% center !important; padding-top: 80px; }
        }
      `}</style>
    </section>
  );
}
