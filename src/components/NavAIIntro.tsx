import { motion } from "framer-motion";
import navAiBg from "../Assets/naavi-ai.png";

export default function NavAIIntro() {
  return (
    <section
      className="fullscreen-dark relative flex items-center justify-start w-full overflow-hidden"
      style={{
        backgroundImage: `url(${navAiBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* === Overlay for text readability === */}
      <div className="absolute inset-0 " />

      {/* === Left-side glow accent === */}
      <motion.div
        className="absolute left-[6%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/25 blur-[120px] rounded-full"
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
        {/* Product Label */}
        <h3 className="text-3xl mb-6 font-semibold tracking-wider">
          Nav<span className="text-cyan-400">AI</span>
        </h3>

        {/* Headline */}
        <h1 className="mt-6 text-6xl font-extrabold leading-tight">
          Intelligent Brain
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg leading-relaxed max-w-2xl text-gray-200">
          Platform autonomy: an intelligent core that gives unmanned vehicles
          the power to think, adapt, and navigate with purpose. Trained through
          advanced AI modeling and real-world learning for unknown environments.
        </p>

        {/* === Unified Mission-style CTA === */}
        <div className="mt-10">
          <a
            href="/matrix/naav-ai"
            className="inline-flex items-center gap-3 text-lg font-semibold group relative"
          >
            {/* Animated underline */}
            <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 group-hover:after:w-full">
              Explore NavAI
            </span>
            <span className="inline-block transition-transform group-hover:translate-x-2 duration-300 text-cyan-400">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
