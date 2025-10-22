import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import matrixSA from "../Assets/matrixSA.png";
import matrixOSsuit from "../Assets/matrixOS.png";
import naaviAI from "../Assets/naavi-ai.png";

export default function MatrixProductIntro() {
  const navigate = useNavigate();

  return (
    <section
      id="matrix"
      className="relative w-full bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden blockBreakerBottomBorder"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* === MATRIX OS SUITE === */}
        <motion.div
  onClick={() => navigate("/matrix-os")}
  whileHover={{ scale: 1.02 }}
  className="cursor-pointer flex flex-col md:flex-row items-start gap-12"
>
  <div className="md:w-1/2 text-left space-y-4">
    <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
      Matri<span className="text-sky-400">X OS Suite</span>
    </h2>
    <br />
    <p className="text-lg mb-5 md:text-xl text-gray-300 leading-relaxed">
      MatriX OS SUIT is the unified operating system that acts as the intelligent autonomous core for all Naavi Aerospace assets.
    </p>
    <p className="text-lg mb-5 md:text-xl text-gray-300 leading-relaxed">
      It seamlessly connects and manages assets across air, land, and sea.
    </p>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
      By integrating real-time mission data, MatriX OS enables autonomous decision-making and ensures flawless command integration for enhanced operational efficiency.
    </p>
  </div>
  <div className="mt-0 flex justify-center md:mt-2">
    <img
      src={matrixOSsuit}
      alt="Matrix OS Suite"
      className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] max-w-full mx-auto rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)] border border-gray-400 rounded-lg"
    />
  </div>
</motion.div>


        {/* === MAMATRIX SA === */}
        <motion.div
          onClick={() => navigate("/mamatrix-sa")}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer flex flex-col md:flex-row items-center gap-12"
        >
          {/* <img
            src={matrixSA}
            alt="MAMATRIX SA"
            className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] max-w-full mx-auto rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)] border border-gray-400 rounded-lg"
          /> */}
          <div className="md:w-1/2 text-left space-y-4">
            <h3 className="text-4xl font-bold text-sky-400">MATRIX SA</h3>
            <p className="text-lg text-gray-300">
              Matrix SA provides advanced situational awareness, acting as intelligent "senses" for any system.
            </p>
            <p className="text-lg text-gray-300">
It uses high-level sensor fusion, blending real-time and historical data, to empower AI for critical, autonomous decisions. Matrix SA delivers mission clarity and a decisive tactical edge.
            </p>
          </div>
        </motion.div>

        {/* === MATRIX NAAV.AI === */}
        <motion.div
          onClick={() => navigate("/matrix-naav-ai")}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer flex flex-col md:flex-row-reverse items-center gap-12"
        >
          {/* <img
            src={naaviAI}
            alt="Matrix NAAV.AI"
            className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] max-w-full mx-auto rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)] border border-gray-400 rounded-lg"
          /> */}
          <div className="md:w-1/2 text-left space-y-4">
            <h3 className="text-4xl font-bold text-sky-400">Matrix NAAV.AI</h3>
            <p className="text-lg text-gray-300">
              <b>Matrix NAAV.AI</b> is the <b>AI-native central brain</b> for your autonomous force.
            </p>
            <p className="text-lg text-gray-300">
              It unifies all assets (drones, vehicles, etc.) into a <b>"shared consciousness,"</b>
              enabling <b>split-second</b> decisions by autonomously assigning threats. NAAV.AI also functions as an <b>AI pilot</b>, executing entire missions autonomously while keeping a human in <b>ultimate control</b>.
            </p>

          </div>
        </motion.div>

        {/* === CTA === */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-16"
        >
          <a
            href="#matrix-details"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-lg font-semibold shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all duration-300"
          >
            Explore Full Product Suite
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
