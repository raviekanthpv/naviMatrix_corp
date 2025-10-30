import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MissionBlock() {
  const navigate = useNavigate();

  return (
    <section
      id="mission-block"
      className="relative flex flex-col items-center justify-center
        min-h-screen w-full bg-gradient-to-b from-base-dark via-gray-900 to-base-dark
        text-text-light px-6 border-b border-gray-700 pb-24"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 z-0 pointer-events-none 
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.9)_70%)]"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <p className="uppercase tracking-widest text-gray-400 font-semibold text-sm md:text-base">
          Our Mission
        </p>

        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-snug">
          <span className="text-white block">Protecting Tomorrow</span>
          <span
            className="block mt-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300
                       text-transparent bg-clip-text leading-normal"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            with Intelligence &amp; Autonomy
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We’re building a future where autonomous systems powered by AI protect
          soldiers, citizens, and nations — ensuring intelligence serves
          humanity at every step.
        </p>

        <div className="mt-10">
          <button
            className="group inline-flex items-center gap-2 px-8 py-3 
              rounded-full bg-white hover:bg-gray-200 text-black 
              font-semibold text-lg transition-all duration-300 shadow-lg"
            onClick={() => navigate("/mission")}
          >
            Learn More About Our Mission
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-gray-400 text-sm md:text-base">
            Includes <span className="text-gray-200 font-medium">Mission</span>{" "}
            and <span className="text-gray-200 font-medium">Team</span>{" "}
            insights.
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 w-full h-48 
        bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
      />
    </section>
  );
}
