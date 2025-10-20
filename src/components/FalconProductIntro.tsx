import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Radar,
  Cpu,
  Crosshair,
  Gauge,
  AirVent,
} from "lucide-react";
import falcon from "../Assets/falcon.jpg";

export default function FalconProductIntro() {
  return (
    <section
  id="falcon"
  className="relative w-full bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 py-24 space-y-28">

    {/* === INTRO === */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center max-w-4xl mx-auto space-y-6"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold text-sky-400">
        Falcon Series
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 italic">
        “Precision in Every Launch, Autonomy in Every Mile”
      </p>
      <p className="text-gray-400 text-lg leading-relaxed">
        A new class of interceptor drones engineered for <span className="text-sky-400 font-semibold">autonomous air defense</span>.
        Powered by the <span className="font-semibold text-white">MatriX OS Suite</span>,
        Falcon drones combine AI-driven tracking and real-time decision systems
        to intercept threats with speed, precision, and intelligence.
      </p>
    </motion.div>

    {/* === HERO IMAGE === */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      <img
        src={falcon}
        alt="Falcon Drone"
        className="rounded-2xl w-full w-[460px] object-cover shadow-[0_0_80px_rgba(56,189,248,0.25)]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
    </motion.div>

    {/* === FALCON INTERCEPTOR === */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center gap-12"
    >
      <img
        src={falcon}
        alt="Falcon Interceptor"
        className="w-full w-[450px] rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)]"
      />
      <div className="md:w-1/2 space-y-5">
        <h3 className="text-4xl font-bold text-sky-400">Falcon Interceptor</h3>
        <p className="text-gray-300 leading-relaxed">
          Compact, stealth-optimized, and fully autonomous — the Falcon Interceptor
          neutralizes airborne intrusions with precision.
          Using multi-sensor fusion (radar, optical, and infrared), it reacts and
          eliminates threats within seconds.
        </p>
        <p className="text-gray-400">
          Networked via the <span className="text-white font-semibold">MatriX Defense Grid</span>,
          it operates in coordinated missions across aerial, naval, and land-based platforms.
        </p>
      </div>
    </motion.div>

    {/* === FEATURE GRID === */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {[
        { title: "High-Speed Interception", desc: "Cruise at 200 km/h with advanced stability controls.", icon: <Gauge /> },
        { title: "Autonomous Target Tracking", desc: "AI-guided pursuit and lock-on, even without GPS.", icon: <Crosshair /> },
        { title: "Stealth Frame", desc: "3 kg radar-absorbent composite for silent mobility.", icon: <AirVent /> },
        { title: "AI-Guided Precision", desc: "MatriX OS neural core for sub-second decisions.", icon: <Cpu /> },
        { title: "Rapid Launch", desc: "Deployment-ready in under 5 seconds.", icon: <Rocket /> },
        { title: "Swarm Coordination", desc: "Synchronizes with other Falcons for multi-threat response.", icon: <Radar /> },
      ].map(({ title, desc, icon }, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/70 border border-gray-700 hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all duration-300"
        >
          <div className="mb-4 text-sky-400">{icon}</div>
          <h4 className="text-lg font-semibold mb-1">{title}</h4>
          <p className="text-sm text-gray-400">{desc}</p>
        </div>
      ))}
    </motion.div>

    {/* === CTA === */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center pt-10"
    >
      <a
        href="#falcon-details"
        className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 font-semibold text-lg shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all duration-300"
      >
        Explore Falcon System
        <ArrowRight className="w-5 h-5" />
      </a>
      <p className="text-gray-400 mt-3 text-sm">
        Dive deeper into Falcon’s architecture, payloads & control systems.
      </p>
    </motion.div>
  </div>
</section>

  );
}
