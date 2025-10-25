import { motion } from "framer-motion";
import falcon from "../../Assets/falcon.jpg";
import { useNavigate } from "react-router-dom";

export default function FalconIntro() {
  const navigate = useNavigate();
  return (
    <section
      id="falcon"
      className="relative w-full overflow-hidden blockBreakerBottomBorder"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* === INTRO === */}
        <motion.div
          onClick={() => navigate("/falcon")}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer flex flex-col md:flex-row items-start gap-12"
        >
          <div className="md:w-1/2 text-left space-y-4">
            <h3 className="text-5xl md:text-6xl font-extrabold text-red-600">
              Falcon Series
            </h3>
            <br />
            <p className="text-xl md:text-2xl italic">
              “Precision in Every Launch, Autonomy in Every Mile”
            </p>
            <p className="text-lg leading-relaxed">
              Falcon is a <b>high-speed interceptor</b> drone that Using
              external radar and an <b>onboard optical camera</b>, rapidly
              detects, tracks, and eliminates hostile or unauthorized aerial
              targets—like rogue drones—<b>within seconds</b>.
            </p>
          </div>
          <div className="mt-0 flex justify-center md:mt-2">
            <img
              src={falcon}
              alt="Matrix OS Suite"
              className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] max-w-full mx-auto rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)] border border-gray-400 rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
