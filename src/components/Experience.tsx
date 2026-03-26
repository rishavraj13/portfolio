"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, Database, Code2, Globe } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Freelance Developer",
    company: "Nirmanakara Realty LLP",
    location: "Remote",
    period: "May 2025 — Jul 2025",
    description: "Engineered robust internal tooling, streamlining workflows and achieving a staggering reduction in manual operations. Focused on high-performance web applications and automated data management.",
    impact: "60%",
    impactLabel: "Efficiency Boost",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: <Briefcase className="text-neon-green" size={24} />,
    color: "neon-green"
  },
  {
    title: "Full Stack Developer",
    company: "Personal Projects & Open Source",
    location: "Global",
    period: "2024 — Present",
    description: "Architecting and deploying end-to-end solutions using the MERN stack. Implementing advanced UI/UX patterns and integrating AI capabilities into web platforms for enhanced user interaction.",
    impact: "15+",
    impactLabel: "Active Deployments",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    icon: <Globe className="text-blue-400" size={24} />,
    color: "blue-400"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full relative isolate"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] -z-10 rounded-full" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md"
        >
          <Sparkles size={16} className="text-neon-green" />
          <span className="text-sm font-mono text-neutral-300 uppercase tracking-widest">Journey</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tight"
        >
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-300">Experience</span>
        </motion.h2>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000">
        {EXPERIENCES.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: typeof EXPERIENCES[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="group relative bg-[#080808] border border-neutral-800/50 rounded-[2.5rem] p-8 md:p-10 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(110,231,22,0.1), transparent 40%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top Section: Icon and Period */}
        <div className="flex justify-between items-start mb-8">
          <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-inner group-hover:border-neon-green/50 transition-colors duration-500">
            {exp.icon}
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 text-neutral-500 font-mono text-xs uppercase tracking-tighter">
              <Calendar size={12} className="text-neon-green" />
              {exp.period}
            </div>
            <div className="flex items-center gap-2 text-neutral-500 font-mono text-xs uppercase tracking-tighter mt-1">
              <MapPin size={12} />
              {exp.location}
            </div>
          </div>
        </div>

        {/* Middle Section: Title and Company */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
            {exp.title}
          </h3>
          <p className="text-lg text-neutral-400 font-medium">{exp.company}</p>
        </div>

        {/* Description */}
        <p className="text-neutral-400 leading-relaxed mb-8 flex-grow">
          {exp.description}
        </p>

        {/* Impact Metric & Tech Stack */}
        <div className="mt-auto space-y-8">
          {/* Metric */}
          <div className="flex items-baseline gap-4">
            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700/50">
              {exp.impact}
            </span>
            <span className="text-xs font-mono tracking-widest text-neon-green uppercase font-bold">
              {exp.impactLabel}
            </span>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-900/50">
            {exp.tech.map(t => (
              <span
                key={t}
                className="px-3 py-1 bg-black/50 rounded-lg border border-neutral-800 text-[10px] font-bold text-neutral-500 uppercase tracking-widest group-hover:border-neon-green/30 group-hover:text-neutral-300 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <Database className="absolute -right-12 -bottom-12 w-64 h-64 text-white/[0.02] rotate-[-15deg] pointer-events-none group-hover:text-neon-green/[0.03] transition-colors duration-700" />
    </motion.div>
  );
}
