import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroIntro() {
  return (
    <section
      id="intro"
      className="relative flex flex-col justify-center items-center h-[100dvh] w-full overflow-hidden 
                 text-text-light bg-gradient-to-b from-section-dark via-gray-900 to-section-dark blockBreakerBottomBorder"
    >
      {/* Glowing pulse background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)]"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 px-6 text-center max-w-5xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Next-Gen Autonomy Platform
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-2xl md:text-3xl text-gray-300 font-medium"
        >
          Empowering the{" "}
          <span className="bg-gradient-to-r from-red-700 via-red-500 to-rose-400 bg-clip-text text-transparent font-semibold">
            Autonomous Precision
          </span>
        </motion.p>
      </motion.div>

      {/* Scroll Down Prompt */}
      <motion.div
        className="absolute bottom-12 flex flex-col items-center text-gray-400 space-y-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-sm md:text-base tracking-widest uppercase text-gray-400">
          Scroll down to explore products
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-red-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
