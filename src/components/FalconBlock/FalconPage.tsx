import { motion } from "framer-motion";
import falconImg from "../../Assets/falcon.jpg";
import VideoSection from "../VideoSection";

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
      <section className="relative flex flex-col md:flex-row items-center justify-between py-24 px-8 md:px-16 bg-section-light text-text-dark">
        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src={falconImg}
            alt="Falcon Drone"
            className="rounded-2xl shadow-[0_0_50px_rgba(255,0,0,0.1)] border border-gray-400"
          />
        </motion.div>

        {/* RIGHT: DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 md:pl-12 mt-10 md:mt-0"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-red-600">
            Falcon
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-text-dark/90">
            Falcon is a high-speed interceptor drone that, using external radar
            and an onboard optical camera, rapidly detects, tracks, and
            eliminates hostile or unauthorized aerial targets—like rogue
            drones—within seconds.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-text-dark/90">
            Built for ground-based air defense, Falcon can rapidly launch,
            identify, intercept, and destroy a wide variety of aerial threats at
            a fraction of the cost of conventional methods. It operates under
            all weather conditions and can be safely recovered and relaunched
            with zero additional cost.
          </p>

          {/* Bullet Features */}
          <ul className="space-y-3 text-base md:text-lg text-text-dark/90">
            <li>🚀 <b>High-Speed Interception:</b> Cruise speeds of 150–200 km/h</li>
            <li>🎯 <b>Autonomous Target Tracking & Engagement</b></li>
            <li>🕶 <b>Stealth-Optimized Design:</b> Compact 3.0 kg frame</li>
            <li>🤖 <b>AI-Driven Precision Guidance:</b> Powered by MatriX OS SUIT</li>
            <li>⚙️ <b>Rapid Deployment & Recovery:</b> Launch-ready in seconds</li>
            <li>🛫 <b>Endurance & Range:</b> 10 minutes of high-intensity endurance</li>
            <li>🔗 <b>Multi-Platform Integration</b></li>
            <li>🧠 <b>Autonomous Swarm Capability</b></li>
            <li>🧩 <b>Modular Architecture</b></li>
            <li>🏔 <b>Optimized Altitude & Payload Capacity</b></li>
          </ul>
        </motion.div>
      </section>

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
