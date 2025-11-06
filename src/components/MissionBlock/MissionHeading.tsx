import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function MissionHeading() {
  return (
    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-snug text-center md:text-left">
      {[
        "Protecting Tomorrow",
        "with Intelligence &",
        "Autonomy In Every Step",
      ].map((line, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={
            i === 0
              ? "block text-6xl md:text-7xl text-text-dark/95"
              : i === 1
                ? `relative inline-block mt-3
                 font-extrabold
                 text-red-600
                 bg-gradient-to-r from-red-800 via-red-600 to-rose-500
                 bg-clip-text text-transparent
                 [text-shadow:0_2px_3px_rgba(0,0,0,0.25)]
                 before:absolute before:inset-0 before:text-red-800/25 before:blur-[1.5px] before:content-[attr(data-text)]`
                : "block mt-2 text-text-dark/80"
          }
          data-text={line}
        >
          {line}
        </motion.span>
      ))}
    </h2>
  );
}
