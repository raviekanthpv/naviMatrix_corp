import { useEffect } from "react";

export default function MissionPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const teamDetails = [{ name: "Navanit AV", role: "Founder & CEO" }];

  return (
    <div className="w-full min-h-screen bg-section-dark text-text-light overflow-x-hidden">
      {/* --- MISSION --- */}
      <section
        className="h-screen flex flex-col justify-center items-center px-6
                   bg-gradient-to-b from-black via-black to-carbon-black blockBreakerBottomBorder"
      >
        <div className="max-w-4xl space-y-12 text-center">
          {/* Unified heading style */}
          <div>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight ">
              Mission
            </h1>
            <div className="relative w-24 h-[3px] bg-red-600/40 mx-auto mt-4 rounded-full overflow-hidden">
              <span
                className="absolute inset-0 w-8 bg-gradient-to-r from-transparent via-red-500 to-transparent 
                     animate-[scan_2.5s_ease-in-out_infinite]"
              ></span>
            </div>{" "}
          </div>

          {/* Mission content */}
          <div className="text-left border-l-[3px] border-white/20 pl-6 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              At{" "}
              <span className="font-semibold">
                Naavi Aerospace & Technologies
              </span>
              , we envision a future where intelligence and autonomy protect
              every soldier and every citizen from emerging global threats.
            </p>
            <p className="text-lg md:text-xl  leading-relaxed">
              Modern threats are advancing faster than ever — evolving with
              intelligence is no longer optional; it is essential.
            </p>
            <p className="text-lg md:text-xl  leading-relaxed">
              As an{" "}
              <span className="font-semibold ">
                AI-first aerospace, technology, and defense company
              </span>
              , we are pioneering next-generation autonomous systems that
              combine intelligence and power — brain and muscle — to tackle the
              most complex challenges.
            </p>
            <p className="text-lg md:text-xl  leading-relaxed">
              We stand committed to ensuring that those we serve remain secure,
              capable, and ready for the future.
            </p>
          </div>
        </div>
      </section>

      {/* --- OUR TEAM --- */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-section-light text-text-dark relative overflow-hidden">
        <div className="max-w-6xl text-center space-y-12 relative z-10">
          {/* === Heading with animated underline === */}
          <div>
            <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight text-text-dark">
              Our Team
            </h2>
            <div className="relative w-24 h-[3px] bg-red-600/40 mx-auto mt-4 rounded-full overflow-hidden">
              <span
                className="absolute inset-0 w-8 bg-gradient-to-r from-transparent via-red-500 to-transparent 
                     animate-[scan_2.5s_ease-in-out_infinite]"
              ></span>
            </div>
          </div>

          {/* === Intro Text === */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-text-dark/90">
            The minds behind{" "}
            <span className="font-semibold">
              Naavi Aerospace & Technologies
            </span>
            are a blend of engineers, innovators, and strategists — united by a
            single goal:{" "}
            <span className="font-semibold text-text-dark">
              redefining autonomy for the future of defense and aerospace.
            </span>
          </p>

          {/* === Team Cards === */}
          <div className="flex flex-wrap justify-center gap-10 mt-12">
            {teamDetails.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-[#111] to-[#1b1b1b]
                     border border-red-800/30 hover:border-red-500/70
                     rounded-2xl p-8 w-[200px] transition-all duration-300 
                     hover:-translate-y-2 shadow-[0_0_20px_rgba(255,0,0,0.1)]
                     hover:shadow-[0_0_30px_rgba(255,0,0,0.25)]"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full border border-red-500/30 
                        flex items-center justify-center text-3xl font-bold text-red-500/90 
                        group-hover:text-white group-hover:border-red-500 transition-all"
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === Subtle background pulse effect === */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05)_0%,transparent_70%)] animate-pulse-slow"></div>

        {/* === Animation keyframes === */}
        <style>{`
    @keyframes scan {
      0% { transform: translateX(-100%); opacity: 0.2; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0.2; }
    }

    @keyframes pulse-slow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 0.8; }
    }

    .animate-pulse-slow {
      animation: pulse-slow 6s ease-in-out infinite;
    }
  `}</style>
      </section>
    </div>
  );
}
