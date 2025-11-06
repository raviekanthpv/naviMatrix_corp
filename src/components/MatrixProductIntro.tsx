import { motion } from "framer-motion";
import matrixOSsuit from "../Assets/matrixOS.png";

export default function MatrixProductIntro() {
  return (
    <section
      className="fullscreen-dark relative flex items-center justify-start w-full overflow-hidden"
      style={{
        backgroundImage: `url(${matrixOSsuit})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      {/* === Overlay for text readability === */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

      {/* === Subtle left-side accent light === */}
      <motion.div
        className="absolute left-[6%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* === Text Content === */}
      <div className="relative z-10 max-w-4xl pl-[8%]">
        {/* Label */}
        <h3 className="text-sm mb-6 font-semibold tracking-[0.3em]">
          Matri<span className="text-white-400">X</span>
        </h3>

        {/* Headline */}
        <h1 className="mt-6 text-6xl font-extrabold leading-tight">
          The Intelligence Core
        </h1>

        <div className="mt-4 text-sm tracking-wider uppercase text-white/70">
          Perceive • Decide • Act
        </div>

        {/* Description */}
        <p className="mt-3 text-lg leading-relaxed max-w-2xl">
          An AI-driven operating system that{" "}
          <span className="font-semibold">perceives</span> the environment,
          <span className="font-semibold"> decides</span> in real time, and
          <span className="font-semibold"> acts</span> with precision across
          air, land, sea, and space.
        </p>

        {/* === Unified Mission-style CTA === */}
        <div className="mt-10">
          <a
            href="/matrix-os"
            className="inline-flex items-center gap-3 text-lg font-semibold group relative"
          >
            {/* Underline on hover */}
            <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-section-light after:transition-all after:duration-300 group-hover:after:w-full">
              Explore Matrix OS
            </span>
            <span className="inline-block transition-transform group-hover:translate-x-2 duration-300 text-text-light">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
