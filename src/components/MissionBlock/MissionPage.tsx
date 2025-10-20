import { useEffect } from "react";

export default function MissionPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* --- MISSION --- */}
      <section className="h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-black via-black to-carbon-black">
        <div className="max-w-4xl space-y-12 text-center">
          {/* ✅ Unified heading style */}
          <div>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              Mission
            </h1>
            <div className="w-20 h-[3px] bg-white/60 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Mission content */}
          <div className="text-left border-l-[3px] border-white/20 pl-6 space-y-6">
            <p className="text-2xl md:text-3xl font-light text-gray-200 leading-snug">
              Protecting Tomorrow with{" "}
              <span className="font-semibold text-white">
                Intelligence and Autonomy
              </span>{" "}
              in Every Step.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              At{" "}
              <span className="font-semibold text-white">
                Naavi Aerospace & Technologies
              </span>
              , we envision a future where intelligence and autonomy protect
              every soldier and every citizen from emerging global threats.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Modern threats are advancing faster than ever — evolving with
              intelligence is no longer optional; it is essential.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              As an{" "}
              <span className="font-semibold text-white">
                AI-first aerospace, technology, and defense company
              </span>
              , we are pioneering next-generation autonomous systems that
              combine intelligence and power — brain and muscle — to tackle the
              most complex challenges.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We stand committed to ensuring that those we serve remain secure,
              capable, and ready for the future.
            </p>
          </div>
        </div>
      </section>

      {/* --- OUR TEAM --- */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-carbon-black text-white">
        <div className="max-w-6xl text-center space-y-12">
          {/* ✅ Same heading style */}
          <div>
            <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              Our Team
            </h2>
            <div className="w-20 h-[3px] bg-white/60 mx-auto mt-4 rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The minds behind Naavi Aerospace & Technologies are a blend of
            engineers, innovators, and strategists — united by a single goal:{" "}
            <span className="text-white font-semibold">
              redefining autonomy for the future of defense and aerospace.
            </span>
          </p>

          {/* Team grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {[
              { name: "Dr. Arjun Naavi", role: "Founder & CEO" },
              { name: "Asha Menon", role: "Chief AI Officer" },
              { name: "Rahul Dev", role: "Head of Autonomous Systems" }
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-black border border-white/10 hover:border-white/40
                           rounded-2xl p-8 transition-all duration-300 
                           hover:-translate-y-2 shadow-lg hover:shadow-white/10"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-white/20 
                                flex items-center justify-center text-3xl font-bold text-white/80 
                                group-hover:text-white group-hover:border-white transition-all">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
