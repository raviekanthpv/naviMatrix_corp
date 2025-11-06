import { useState } from "react";
import { motion } from "framer-motion";

// props: falconImg (string)
export default function FalconSection({ falconImg }: { falconImg: string }) {
  const [tab, setTab] = useState<
    "overview" | "mission" | "specs" | "highlights"
  >("overview");

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-16 bg-section-light text-text-dark">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT: IMAGE (sticky on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="lg:sticky lg:top-24">
            <img
              src={falconImg}
              alt="Falcon Drone"
              className="w-full rounded-2xl shadow-[0_0_50px_rgba(255,0,0,0.12)] border border-gray-500/40"
            />
          </div>
        </motion.div>

        {/* RIGHT: CONTENT */}
        <div className="lg:col-span-7">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            <span className="text-red-600">FALCON</span> — High-Velocity Kinetic
            Interceptor
          </h2>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <Stat label="MTOW" value="3.0 kg" />
            <Stat label="Endurance" value="10 min" />
            <Stat label="Cruise" value="150–200 km/h" />
            <Stat label="Range (AGL)" value="500 m" />
          </div>

          {/* Tabs */}
          <div className="mb-4 flex flex-wrap gap-2">
            <TabBtn id="overview" tab={tab} setTab={setTab} label="Overview" />
            <TabBtn id="mission" tab={tab} setTab={setTab} label="Mission" />
            <TabBtn id="specs" tab={tab} setTab={setTab} label="Specs" />
            <TabBtn
              id="highlights"
              tab={tab}
              setTab={setTab}
              label="Highlights"
            />
          </div>

          {/* Panels */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
            {tab === "overview" && <OverviewPanel />}
            {tab === "mission" && <MissionPanel />}
            {tab === "specs" && <SpecsPanel />}
            {tab === "highlights" && <HighlightsPanel />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pieces ---------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
      <div className="text-xs uppercase tracking-widest opacity-70">
        {label}
      </div>
      <div className="text-lg md:text-xl font-semibold">{value}</div>
    </div>
  );
}

function TabBtn({
  id,
  tab,
  setTab,
  label,
}: {
  id: "overview" | "mission" | "specs" | "highlights";
  tab: string;
  setTab: (t: any) => void;
  label: string;
}) {
  const active = tab === id;
  return (
    <button
      onClick={() => setTab(id)}
      className={`rounded-full px-4 py-2 text-sm md:text-base border transition
        ${active ? "bg-red-600 text-white border-red-600" : "bg-transparent border-white/15 hover:border-white/40"}`}
    >
      {label}
    </button>
  );
}

/* ---------- Panels ---------- */

function OverviewPanel() {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        Falcon is a high-velocity kinetic interceptor drone designed to
        neutralize hostile aerial targets within seconds. Built for tactical
        multi-domain air defense, it autonomously detects, tracks, and engages
        enemy drones mid-air — making it a fast, cost-effective alternative to
        conventional counter-UAS systems.
      </p>
      <p className="text-base md:text-lg leading-relaxed">
        Compact, and nearly invisible to enemy radar, Falcon combines AI-driven
        guidance with optical and radar-based terminal tracking, ensuring
        unmatched precision and reliability in contested airspace.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-sm">
          Recovery
        </span>
        <span className="px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-sm">
          Autonomous Return
        </span>
      </div>
    </motion.div>
  );
}

function MissionPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
    >
      <Cap
        item="🎯 Autonomous Interception"
        desc="Detects, locks, and engages rogue drones without operator input."
      />
      <Cap
        item="🕶 Stealth-Optimized Airframe"
        desc="Small, radar-resistant carbon-composite body for minimal visibility."
      />
      <Cap
        item="⚡ Precision Kinetic Impact"
        desc="Physically disables targets mid-air using AI-guided collision trajectories."
      />
    </motion.div>
  );
}

function Cap({ item, desc }: { item: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
      <div className="font-semibold">{item}</div>
      <div className="opacity-90">{desc}</div>
    </div>
  );
}

function SpecsPanel() {
  const rows = [
    ["Maximum Takeoff Weight", "3.0 kg"],
    ["Payload", "Visual"],
    ["Endurance", "10 minutes (High-Intensity Flight)"],
    ["Vertical Range (AGL)", "500 meters"],
    ["Battery Capacity", "6000 mAh Li-Po"],
    ["Cruise Speed", "150–200 km/h"],
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <table className="w-full text-sm md:text-base">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left p-3 font-semibold">Parameter</th>
              <th className="text-left p-3 font-semibold">Specification</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(odd)]:bg-white/0 [&>tr:nth-child(even)]:bg-white/5">
            {rows.map(([k, v]) => (
              <tr key={k}>
                <td className="p-3">{k}</td>
                <td className="p-3">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function HighlightsPanel() {
  const items = [
    "Rapid Response",
    "AI-Powered Navigation",
    "Precision Tracking",
  ];
  return (
    <motion.ul
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {items.map((t) => (
        <li
          key={t}
          className="p-3 rounded-xl bg-white/5 border border-white/10"
        >
          {t}
        </li>
      ))}
    </motion.ul>
  );
}
