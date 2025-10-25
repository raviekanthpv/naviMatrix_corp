import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import missionImage from "../../Assets/mission.png";
import MissionHeading from "./MissionHeading";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section
      id="mission-block"
      className="relative flex flex-col md:flex-row items-center justify-between 
                 min-h-screen w-full bg-section-light text-text-dark overflow-hidden"
    >
      {/* === Left: Text content === */}
      <div
        className="relative z-10 w-full md:w-1/2 px-6 md:px-16 
                   flex flex-col items-center md:items-start text-center md:text-left space-y-8"
      >
        {/* --- Section Label --- */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-start gap-3 mb-6"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "2rem" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="h-[2px] bg-red-600/80 rounded"
          ></motion.span>
          <p className="uppercase tracking-[0.25em] text-base md:text-lg font-semibold text-text-dark/70">
            Our Mission
          </p>
        </motion.div>

        {/* --- Animated Heading --- */}
        <MissionHeading />

        {/* --- CTA Button + Subtext --- */}
        <div className="mt-10">
          <Link
            to="/mission"
            className="group inline-flex items-center gap-2 px-8 py-3 
              rounded-full hover:scale-110
              font-semibold text-2xl transition-all duration-300 
              shadow-lg underline decoration-2 underline-offset-4 border border-section-dark"
          >
            Learn More About Our Mission
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>

          <p className="mt- text-center text-sm md:text-base text-text-dark/80">
            Includes <span className="font-medium">Mission</span> and{" "}
            <span className="font-medium">Team</span> insights.
          </p>
        </div>
      </div>

      {/* === Right: Full Image === */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen">
        <img
          src={missionImage}
          alt="Mission illustration"
          className="absolute inset-0 w-full h-full object-cover object-center md:rounded-l-2xl"
        />
      </div>
    </section>
  );
}
