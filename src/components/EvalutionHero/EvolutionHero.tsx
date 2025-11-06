import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./EvolutionHero.module.css";
import "./evolution-font.css";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const PHRASES = [
  "Evolution",
  "Autonomy → Intelligence",
  "Intelligence → Superintelligence",
];

/* ---------- math helpers ---------- */
function fibonacciSphere(count: number) {
  const pts: number[] = []; // flat xyz list
  const offset = 2 / count;
  const inc = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * inc;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    pts.push(x, y, z);
  }
  return new Float32Array(pts);
}

function buildLinePairs(points: Float32Array, maxDist = 0.4) {
  const pairs: number[] = [];
  for (let i = 0; i < points.length; i += 3) {
    const ax = points[i],
      ay = points[i + 1],
      az = points[i + 2];
    for (let j = i + 3; j < points.length; j += 3) {
      const bx = points[j],
        by = points[j + 1],
        bz = points[j + 2];
      const dx = ax - bx,
        dy = ay - by,
        dz = az - bz;
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (d < maxDist) {
        pairs.push(ax, ay, az, bx, by, bz);
      }
    }
  }
  return new Float32Array(pairs);
}

/* ---------- R3F sphere ---------- */
function NeuralSphere({
  pointCount = 80,
  radius = 3.2,
  speedX = 12, // degrees/sec
  speedY = 18,
  reduced = false,
}: {
  pointCount?: number;
  radius?: number;
  speedX?: number;
  speedY?: number;
  reduced?: boolean;
}) {
  const group = useRef<THREE.Group>(null!);

  const { pointPositions, linePositions } = useMemo(() => {
    const pts = fibonacciSphere(pointCount);
    const lines = buildLinePairs(pts, 0.4);
    // scale points by radius
    const scaled = new Float32Array(pts.length);
    for (let i = 0; i < pts.length; i++) scaled[i] = pts[i] * radius;
    const scaledLines = new Float32Array(lines.length);
    for (let i = 0; i < lines.length; i++) scaledLines[i] = lines[i] * radius;
    return { pointPositions: scaled, linePositions: scaledLines };
  }, [pointCount, radius]);

  useFrame((_, dt) => {
    const fx = THREE.MathUtils.degToRad(reduced ? speedX * 0.25 : speedX);
    const fy = THREE.MathUtils.degToRad(reduced ? speedY * 0.25 : speedY);
    group.current.rotation.x += fx * dt;
    group.current.rotation.y += fy * dt;
  });

  return (
    <group ref={group}>
      {/* links */}
      <lineSegments>
        <bufferGeometry>
          {/* R3F v8: use constructor args [typedArray, itemSize] */}
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={0x00ffff} transparent opacity={0.25} />
      </lineSegments>

      {/* points */}
      <points>
        <bufferGeometry>
          {/* R3F v8: use constructor args [typedArray, itemSize] */}
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial color={0xffffff} size={0.06} sizeAttenuation />
      </points>
    </group>
  );
}

/* ---------- Text animation (Framer) ---------- */
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // cubic-bezier
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ---------- Main component ---------- */
export default function EvolutionHero() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    setReduced(!!m?.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    m?.addEventListener?.("change", onChange);
    return () => m?.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const display = reduced ? 2600 : 3500;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % PHRASES.length),
      display
    );
    return () => clearInterval(id);
  }, [reduced]);

  const text = PHRASES[index];

  return (
    <section className={`${styles.root}`}>
      {/* Smaller sphere + closer camera */}
      <Canvas
        className={`${styles.neural}`}
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.5} />
        {/* sphere radius explicitly small */}
        <NeuralSphere
          pointCount={80}
          radius={1.2}
          speedX={12}
          speedY={18}
          reduced={false}
        />
      </Canvas>

      {/* Overlay text — centered over sphere */}
      <div className={styles.container}>
        <div className={`${styles.text} ${styles.glow}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {text.split("").map((ch, i) => (
                <motion.span key={`${ch}-${i}`} variants={charVariants}>
                  {ch}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles.subtitle}>Redefining the Future</div>
      </div>
    </section>
  );
}
