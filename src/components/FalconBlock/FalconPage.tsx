import { motion } from "framer-motion";
import falconImg from "../../Assets/falcon.png";
import VideoSection from "../VideoSection";
import FalconSection from "./FalconSection";

export default function FalconPage() {
  return (
    <>
      {/* === HERO / VIDEO SECTION === */}
      <section className="relative bg-section-dark text-text-light w-full h-[100vh] overflow-hidden">
        <VideoSection
          videoUrl=""
          title="Falcon Interceptor Drone"
          subtitle="High-Speed Autonomous Defense Drone System"
        />
      </section>

      {/* === ABOUT FALCON === */}
      <FalconSection falconImg={falconImg} />

      {/* === FALCON NEST === */}
      <section className="relative py-24 px-8 md:px-16 bg-gradient-to-b from-[#111] to-[#1b1b1b] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-5xl font-extrabold mb-6 text-red-500">
              Falcon Nest
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-4">
              Falcon Nest is an automated hangar system that houses two Falcon
              drones in a single bay. It ensures the drones remain launch-ready
              at all times.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-4">
              The system autonomously launches Falcons upon detecting a threat
              and features built-in health monitoring to guarantee readiness.
              Nest ensures Falcons can be deployed within seconds, maintained,
              and relaunched seamlessly.
            </p>
            <p className="text-lg text-gray-400 italic">
              Always Ready. Always Watching.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            {/* <img
              src={falconNestImg}
              alt="Falcon Nest"
              className="rounded-2xl shadow-[0_0_50px_rgba(255,0,0,0.15)] border border-red-500/30"
            /> */}
          </motion.div>
        </div>
      </section>
    </>
  );
}
