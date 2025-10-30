import { motion } from "framer-motion";
import matrixSA from "../Assets/matrixSA.png"; // warm-themed image

export default function MatrixSAIntro() {
  return (
    <section
      className="fullscreen-dark relative flex items-center justify-start w-full overflow-hidden"
      style={{
        backgroundImage: `url(${matrixSA})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* === Overlay Gradient === */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0705]/95 via-[#3b0f0a]/60 to-transparent"></div>

      {/* === Soft Ambient Glow (left accent) === */}
      <motion.div
        className="absolute left-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-amber-500/15 rounded-full blur-[120px]"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.1, 1],
          y: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === Text Block === */}
      <div className="relative z-10 max-w-4xl pl-[8%] pr-6">
        {/* Label */}
        <h3 className="text-lg md:text-3xl mb-6 font-semibold tracking-wider text-amber-300/90 mb-2">
          Matri<span className="text-amber-500">X-SA</span>
        </h3>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-snug mb-6">
          Intelligence Behind Every Mission
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200/90 mb-10 max-w-2xl leading-relaxed">
          MatriX-SA fuses perception with purpose — transforming data into
          intelligence and intelligence into action. Through adaptive,
          edge-evolving AI agents, it senses, understands, and responds in real
          time, empowering autonomous systems with unparalleled awareness and
          mission mastery.
        </p>

        {/* === Unified CTA (Mission-style link) === */}
        <div className="mt-8">
          <a
            href="/matrix/sa"
            className="inline-flex items-center gap-3 text-lg font-semibold group relative text-amber-300"
          >
            <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 group-hover:after:w-full">
              Explore MatriX-SA
            </span>
            <span className="inline-block transition-transform group-hover:translate-x-2 duration-300 text-amber-400">
              →
            </span>
          </a>
        </div>
      </div>

      {/* === Subtle vignette for cinematic depth === */}
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_160px_rgba(0,0,0,0.35)]" />

      {/* === Responsive tweaks === */}
      <style>{`
        @media (max-width: 1024px) {
          section { background-position: 65% center !important; }
        }
        @media (max-width: 768px) {
          section { background-position: 60% center !important; padding-top: 80px; }
          h1 { font-size: 2.5rem !important; line-height: 1.2 !important; }
        }
      `}</style>
    </section>
  );
}
