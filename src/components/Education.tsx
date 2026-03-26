"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GraduationCap, School, MapPin } from "lucide-react";

const EDUCATION_DATA = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech Computer Science Engineering",
    period: "2022 — 2026",
    metric: "7.0",
    metricLabel: "CGPA",
    color: "neon-green",
    description: "Specializing in Full Stack Development and Artificial Intelligence."
  },
  {
    institution: "Bradford International School",
    location: "Patna, Bihar",
    degree: "12th with Science",
    period: "2020 — 2022",
    metric: "71%",
    metricLabel: "Percentage",
    color: "blue-400",
    description: "Advanced PCM (Physics, Chemistry, Maths) curriculum."
  },
  {
    institution: "Litera Valley School",
    location: "Patna, Bihar",
    degree: "10th with Science",
    period: "2018 — 2020",
    metric: "82%",
    metricLabel: "Percentage",
    color: "purple-400",
    description: "Foundational science and mathematics with consistent performance."
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      id="education"
      className="py-64 px-4 md:px-8 max-w-7xl mx-auto w-full relative min-h-[250vh] flex flex-col items-center justify-start perspective-2000"
    >
      {/* Custom SVG Noise Filter */}
      <svg className="hidden">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.1" />
            <feFuncG type="linear" slope="0.1" />
            <feFuncB type="linear" slope="0.1" />
          </feComponentTransfer>
        </filter>
      </svg>

      {/* Floating Ambient Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              x: useTransform(smoothProgress, [0, 1], [Math.random() * 400 - 200, Math.random() * 400 - 200]),
              y: useTransform(smoothProgress, [0, 1], [Math.random() * 400, Math.random() * -400]),
              rotate: useTransform(smoothProgress, [0, 1], [0, i % 2 === 0 ? 360 : -360]),
            }}
            className="absolute rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
            style={{
              width: `${(i + 1) * 60 + 40}px`,
              height: `${(i + 1) * 60 + 40}px`,
              left: `${i * 20}%`,
              top: `${i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Header Container */}
      <motion.div
        style={{
          y: useTransform(smoothProgress, [0, 0.2], [100, 0]),
          opacity: useTransform(smoothProgress, [0, 0.15], [0, 1]),
          scale: useTransform(smoothProgress, [0, 0.2], [0.8, 1])
        }}
        className="flex flex-col items-center text-center gap-6 mb-32 sticky top-24 z-20"
      >
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <GraduationCap size={20} className="text-neon-green" />
          <span className="text-sm font-mono text-white/70 uppercase tracking-[0.3em]">Knowledge Orbit</span>
        </div>
        <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none select-none">
          EDUCATION <br />
          <span className="text-transparent border-t-2 border-white/10 bg-clip-text bg-gradient-to-r from-neon-green via-emerald-400 to-blue-500 pt-4">TRACKER</span>
        </h2>
      </motion.div>

      {/* 3D Moving Stack Container */}
      <div className="relative w-full max-w-5xl h-fit flex flex-col items-center gap-64 mt-40 pb-64">
        {EDUCATION_DATA.map((edu, idx) => (
          <EducationCard
            key={edu.institution}
            edu={edu}
            index={idx}
            progress={smoothProgress}
          />
        ))}
      </div>
    </section>
  );
}

function EducationCard({ edu, index, progress }: { edu: typeof EDUCATION_DATA[0], index: number, progress: any }) {
  const start = 0.15 + index * 0.2;
  const end = start + 0.4;

  // 3D Scroll Transforms
  const y = useTransform(progress, [start, end], [400, -200]);
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, start + 0.2], [0.7, 1]);
  const rotateX = useTransform(progress, [start, end], [30, -30]);
  const z = useTransform(progress, [start, end], [-400, 100]);
  const brightness = useTransform(progress, [start, start + 0.2], [50, 100]);

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        rotateX,
        z,
        filter: useTransform(brightness, (v) => `brightness(${v}%)`),
      }}
      className="sticky top-1/3 w-full md:w-[90%] group"
    >
      <div className="relative p-[1px] rounded-[3rem] bg-gradient-to-br from-white/20 via-transparent to-white/5 overflow-hidden">
        <div className="relative bg-[#050505]/95 backdrop-blur-3xl rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden border border-white/5 group-hover:border-neon-green/30 transition-all duration-700">

          {/* Card Grain Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] contrast-150" style={{ filter: 'url(#grain)' }} />

          <div className="relative z-10 flex-1 flex flex-col items-start gap-8">
            <div className="w-20 h-20 rounded-3xl bg-neutral-900 border border-white/5 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:border-neon-green/30 transition-all duration-700">
              <div className="p-4 bg-black/50 rounded-2xl">
                {edu.icon}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight group-hover:text-neon-green transition-colors duration-500">
                {edu.institution}
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-xl text-neutral-400 font-medium tracking-tight">
                  {edu.degree}
                </p>
                <div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
                  <MapPin size={14} className="text-orange-400/60" />
                  {edu.location}
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

            <p className="text-neutral-500 max-w-lg leading-relaxed text-lg italic">
              {edu.description}
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center md:items-end gap-2">
            <div className="relative group/metric">
              <span className="text-8xl md:text-[10rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 select-none transition-all duration-700 group-hover:from-neon-green group-hover:to-emerald-900">
                {edu.metric}
              </span>
              <span className="absolute -right-4 text-xs font-mono tracking-[0.4em] text-neon-green font-black rotate-0 origin-left uppercase">
                {edu.metricLabel}
              </span>
            </div>
            <div className="mt-8 flex flex-col items-end">
              <span className="text-2xl font-mono text-white/20 group-hover:text-white/80 transition-colors uppercase tracking-[0.3em]">
                {edu.period}
              </span>
              <div className="mt-4 w-40 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 2, ease: "circOut" }}
                  className="h-full bg-neon-green/30"
                />
              </div>
            </div>
          </div>

          {/* Large Background Glyph */}
          <div className="absolute -right-20 -bottom-20 opacity-[0.01] group-hover:opacity-[0.03] transition-opacity duration-1000 rotate-[-12deg] pointer-events-none">
            <GraduationCap size={400} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
