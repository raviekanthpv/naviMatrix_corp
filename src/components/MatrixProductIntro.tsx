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
          className="cursor-pointer text-center max-w-4xl mx-auto transition-transform"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Matri<span className="text-sky-400">X OS Suite</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            MatriX OS SUIT is the intelligent autonomous core of Naavi Aerospace—a unified operating system designed to 
            seamlessly connect and manage assets across air, land, and sea domains. By integrating real-time mission data, 
            it empowers autonomous decision-making, orchestrates coordinated operations, and ensures flawless command 
            integration, delivering enhanced operational efficiency .
          </p>
          <div className="mt-8 flex justify-center">
            <img
              src={matrixOSsuit}
              alt="Matrix OS Suite"
              className="rounded-2xl shadow-[0_0_60px_rgba(56,189,248,0.15)] w-[330px] sm:w-[380px] md:w-[420px] lg:w-[460px] xl:w-[480px]  max-w-full mx-auto object-cover border border-gray-400 rounded-lg "
            />
          </div>
        </motion.div>

        {/* === MAMATRIX SA === */}
        <motion.div
          onClick={() => navigate("/mamatrix-sa")}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer flex flex-col md:flex-row items-center gap-12"
        >
          <img
            src={matrixSA}
            alt="MAMATRIX SA"
            className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] max-w-full mx-auto rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)] border border-gray-400 rounded-lg"
          />
          <div className="md:w-1/2 text-left space-y-4">
            <h3 className="text-4xl font-bold text-sky-400">MATRIX SA</h3>
            <p className="text-lg text-gray-300">
              This delivers a revolutionary layer of situational awareness, acting as the intelligent "senses" for any integrated system. 
              Much like human perception, it employs advanced High-Level Sensor Fusion to create a comprehensive, multi-dimensional 
              picture of the operational environment. The system intelligently processes a cohesive blend of constant, real-time data 
              streams with a deep reserve of historical information. This complete understanding empowers the core AI to execute critical, 
              autonomous, split-second decisions, providing unparalleled battlefield clarity and a decisive tactical edge when it matters most.

            </p>
          </div>
        </motion.div>

        {/* === MATRIX NAAV.AI === */}
        <motion.div
          onClick={() => navigate("/matrix-naav-ai")}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <img
            src={naaviAI}
            alt="Matrix NAAV.AI"
            className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] max-w-full mx-auto rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)] border border-gray-400 rounded-lg"
          />
          <div className="md:w-1/2 text-left space-y-4">
            <h3 className="text-4xl font-bold text-sky-400">Matrix NAAV.AI</h3>
            <p className="text-lg text-gray-300">
              Naav.ai is the intelligent, AI-native operating system that functions as the central brain for a 
              unified autonomous force. It is designed to be installed across all assets, creating a single, 
              seamless network that coordinates disparate systems—from surveillance drones and radars to counter-UAS 
              platforms and ground vehicles. This shared consciousness allows Naav.ai to make critical, split-second 
              tactical decisions, autonomously identifying an incoming threat detected by one asset and instantly 
              dispatching the optimal counter-measure from another. Beyond high-level coordination, Naav.ai also acts 
              as the individual AI pilot, enabling any unmanned vehicle to navigate complex, unknown environments and 
              execute entire missions with full autonomy, all while keeping the human operator in ultimate control.
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
