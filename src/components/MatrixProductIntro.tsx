import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import matrixOSsuit from "../Assets/matrixOS.png";

export default function MatrixProductIntro() {
  const navigate = useNavigate();

  return (
    <section
      id="matrix"
      className="relative w-full overflow-hidden blockBreakerBottomBorder"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* === MATRIX OS SUITE === */}
        <motion.div
          onClick={() => navigate("/matrix-os")}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer flex flex-col md:flex-row items-start gap-12"
        >
          <div className="md:w-1/2 text-left space-y-4">
            <h3 className="text-3xl md:text-5xl font-extrabold">
              Matri<span className="text-red-600">X</span>
            </h3>
            <br />
            <p className="text-lg mb-5 md:text-xl leading-relaxed">
              MatriX is our core mission-level autonomy OS suit built for
              moments that demand precision, speed, and absolute intelligence.
              Powered by advanced AI, MatriX seamlessly integrates multi-domain
              unmanned systems at the tactical edge, empowering operators with
              intelligence and autonomy all at their fingertips.
            </p>
            <p className="text-lg mb-5 md:text-xl leading-relaxed">
              Designed for speed, precision, and resilience, MatriX transforms
              complex missions into coordinated, intelligent operations where
              every decision counts, and every second matters.
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
          className="cursor-pointer flex flex-col md:flex-row items-start gap-12"
        >
          <img
            src={matrixOSsuit}
            alt="MAMATRIX SA"
            className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] max-w-full mx-auto rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)] border border-gray-400 rounded-lg"
          />
          <div className="md:w-1/2 text-left space-y-4">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6">
              Matrix <span className="text-red-600">SA</span>
            </h3>

            <br />
            <p className="text-lg md:text-xl leading-relaxed mb-3">
              MatriX-SA transforms plans into action through:
            </p>
            <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed space-y-2">
              <li>Data-driven, multi-domain intelligence.</li>
              <li>Adaptive AI systems that evolve in real time.</li>
              <li>Next Gen Situational Awareness.</li>
            </ul>
          </div>
        </motion.div>

        {/* === MATRIX NAAV.AI === */}
        <motion.div
          onClick={() => navigate("/matrix-naav-ai")}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer flex flex-col md:flex-row-reverse items-start gap-12"
        >
          <img
            src={matrixOSsuit}
            alt="Matrix NAAV.AI"
            className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] max-w-full mx-auto rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)] border border-gray-400 rounded-lg"
          />
          <div className="md:w-1/2 text-left space-y-4">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6">
              Matrix <span className="text-red-600">NAAV.AI</span>
            </h3>

            <br />
            <p className="text-lg">
              <b>Matrix NAAV.AI</b> is the <b>AI-native central brain</b> for
              your autonomous force.
            </p>
            <p className="text-lg">
              It unifies all assets (drones, vehicles, etc.) into a{" "}
              <b>"shared consciousness,"</b>
              enabling <b>split-second</b> decisions by autonomously assigning
              threats. NAAV.AI also functions as an <b>AI pilot</b>, executing
              entire missions autonomously while keeping a human in{" "}
              <b>ultimate control</b>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
