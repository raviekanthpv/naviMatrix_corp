export default function Mission() {
  return (
    <section className="fullscreen-light justify-between px-[8%]" id="Mission">
      {/* Divider */}
      {/* <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px bg-neutral-300/40"></div> */}

      {/* Left Side */}
      <div className="flex-1 space-y-6 relative z-10">
        <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Our Mission
        </h2>
        <h1 className="text-7xl font-extrabold leading-tight">
          Protecting Tomorrow
          <br />
          <span>with Intelligence & Autonomy.</span>
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex-1 text-right max-w-md relative z-10">
        <p className="text-xl leading-relaxed mb-8">
          At Naavi Aerospace & Technologies, intelligence and autonomy define
          every mission we undertake. We build systems that think, act, and
          evolve.
        </p>

        <a
          href="/mission"
          className="inline-flex items-center gap-3 text-lg font-semibold group relative text-neutral-900"
        >
          <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-neutral-900 after:transition-all after:duration-300 group-hover:after:w-full">
            Explore Mission & Vision
          </span>
          <span className="inline-block transition-transform group-hover:translate-x-2 duration-300">
            →
          </span>
        </a>
      </div>

      {/* Ambient Highlight */}
      <div className="absolute right-[10%] top-[45%] w-[260px] h-[260px] bg-gradient-to-b from-amber-100/50 to-transparent rounded-full blur-3xl opacity-60"></div>
    </section>
  );
}
