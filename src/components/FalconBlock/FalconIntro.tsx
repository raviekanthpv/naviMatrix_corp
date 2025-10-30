import { motion } from "framer-motion";
import falconBg from "../../Assets/falcon.png"; // your generated Falcon background

export default function FalconIntro() {
  return (
    <section
      className="fullscreen-dark relative flex items-center justify-start w-full overflow-hidden"
      style={{
        backgroundImage: `url(${falconBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* === Overlay Gradient === */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#0b1a33]/60 to-transparent"></div>

      {/* === Soft Ambient Glow (left accent) === */}
      <motion.div
        className="absolute left-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-cyan-400/15 rounded-full blur-[120px]"
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
        <h3 className="mb-6 text-lg md:text-3xl font-semibold tracking-wider mb-2">
          Falcon
        </h3>

        {/* Headline */}
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-snug mb-6">
          High-Speed Interceptor
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
          Uses external radar and an onboard optical camera to rapidly detect,
          track, and eliminate hostile or unauthorized aerial targets — like rogue
          drones — within seconds.
        </p>

        {/* === Unified CTA (Mission-style link) === */}
        <div className="mt-8">
          <a
            href="/falcon"
            className="inline-flex items-center gap-3 text-lg font-semibold group relative"
          >
            <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-section-light after:transition-all after:duration-300 group-hover:after:w-full">
              Explore Falcon
            </span>
            <span className="inline-block transition-transform group-hover:translate-x-2 duration-300">
              →
            </span>
          </a>
        </div>
      </div>

      {/* === Subtle vignette === */}
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_160px_rgba(0,0,0,0.35)]" />
    </section>
  );
}
