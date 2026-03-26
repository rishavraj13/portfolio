"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Users,
  Calendar,
  Code2,
  Sparkles,
  Target,
  Star
} from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "Competitive Programming",
    description:
      "Solved 400+ problems across LeetCode, CodeChef, CodeForces, and GFG.",
    date: "December 2025",
    icon: <Code2 size={24} />,
    platforms: [
      {
        name: "LeetCode",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg",
      },
      {
        name: "CodeChef",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codechef/codechef-original.svg",
      },
      {
        name: "CodeForces",
        logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codeforces.svg",
      },
      {
        name: "GFG",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/geeksforgeeks/geeksforgeeks-original.svg",
      },
    ],
    stat: "400+",
    statLabel: "Problems Solved",
    color: "neon-green",
  },
];

const ACTIVITIES = [
  {
    title: "CyberFest 2024",
    role: "Event Team Member",
    period: "June 2024",
    badge: "Core Team",
    description:
      "Assisted in event management tasks including registration, scheduling, and logistics.",
    icon: <Users size={22} />,
    color: "blue-400",
  },
  {
    title: "RampRaga 2024",
    role: "Event Organizer",
    period: "October 2024",
    badge: "Core Team",
    description:
      "Led the event organization from planning to execution, ensuring successful delivery.",
    icon: <Target size={22} />,
    color: "purple-400",
  },
  {
    title: "HackVerse 2024",
    role: "Event Team Member",
    period: "March 2024",
    badge: "Core Team",
    description:
      "Led the Graphic Designing Team and tasks including poster making and social media posts.",
    icon: <Target size={22} />,
    color: "#be0fb6ff",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 blur-[150px] rounded-full -z-10 pointer-events-none" />

      {/* ─── ACHIEVEMENTS HEADER ─── */}
      <div className="flex flex-col items-center text-center gap-6 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <Trophy size={16} className="text-neon-green" />
          <span className="text-sm font-mono text-white/70 uppercase tracking-widest">
            Milestones
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black text-white tracking-tighter"
        >
          Achievements{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">
            & Activities
          </span>
        </motion.h2>
      </div>

      {/* ─── ACHIEVEMENTS CARDS ─── */}
      <div className="mb-24">
        {ACHIEVEMENTS.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-neon-green/10 to-emerald-500/5 border border-white/10 p-10 md:p-14 backdrop-blur-3xl hover:border-neon-green/30 transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(110,231,22,0.08)]">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                {/* Left Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center text-neon-green group-hover:scale-110 group-hover:bg-neon-green/20 transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-neutral-500 text-sm font-mono mt-1">
                        <Calendar size={14} />
                        {item.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                    {item.description}
                  </p>

                  {/* Platform Logos */}
                  <div className="flex items-center gap-4 mt-2">
                    {item.platforms.map((platform) => (
                      <motion.div
                        key={platform.name}
                        whileHover={{ scale: 1.15, y: -4 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        <img
                          src={platform.logo}
                          alt={platform.name}
                          width={22}
                          height={22}
                          className="w-[22px] h-[22px] object-contain"
                          loading="lazy"
                        />
                        <span className="text-sm text-neutral-300 font-medium">
                          {platform.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Stat */}
                <div className="flex flex-col items-center md:items-end gap-1">
                  <span className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-neon-green to-neon-green/20 leading-none select-none">
                    {item.stat}
                  </span>
                  <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                    {item.statLabel}
                  </span>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -right-10 -bottom-10 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-700 rotate-12 pointer-events-none">
                <Sparkles size={200} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ─── EXTRACURRICULAR HEADER ─── */}
      <div className="flex items-center gap-4 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <Award size={16} className="text-purple-400" />
          <span className="text-sm font-mono text-white/70 uppercase tracking-widest">
            Beyond the Code
          </span>
        </motion.div>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* ─── ACTIVITIES TIMELINE ─── */}
      <div className="relative max-w-5xl mx-auto py-10">
        {/* Center Timeline Line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 md:-ml-[0.5px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col gap-12 md:gap-24">
          {ACTIVITIES.map((activity, idx) => {
            const isEven = idx % 2 === 0;
            
            // Enhanced color map for premium feel
            const colorMap: Record<string, { accent: string; text: string; glow: string; bg: string; iconBg: string }> = {
              "blue-400": { accent: "border-blue-500", text: "text-blue-400", glow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]", bg: "from-blue-600/10 to-transparent", iconBg: "bg-blue-500/20" },
              "purple-400": { accent: "border-purple-500", text: "text-purple-400", glow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]", bg: "from-purple-600/10 to-transparent", iconBg: "bg-purple-500/20" },
              "#be0fb6ff": { accent: "border-cyan-400", text: "text-cyan-400", glow: "shadow-[0_0_30px_rgba(34,211,238,0.2)]", bg: "from-cyan-400/10 to-transparent", iconBg: "bg-cyan-400/20" },
            };
            const colors = colorMap[activity.color] || colorMap["purple-400"];

            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node on Timeline */}
                <div className="absolute left-[28px] md:left-1/2 -ml-[6px] md:-ml-[6px] top-8 md:top-1/2 md:-mt-[6px] w-3 h-3 rounded-full bg-black border-2 border-white/30 z-20 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                <div className={`absolute left-[28px] md:left-1/2 -ml-[20px] top-[18px] md:top-1/2 md:-mt-[40px] w-10 h-10 rounded-full ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur border border-transparent group-hover:${colors.accent} -z-10`} />

                {/* Content Card container (50% width on Desktop) */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                  <div className={`relative p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 group-hover:border-white/20 transition-all duration-500 ${colors.glow} group-hover:-translate-y-2`}>
                    
                    {/* Background gradient injection */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-50 rounded-3xl`} />
                    
                    <div className="relative z-10 flex flex-col gap-4">
                      {/* Icon & Title Row */}
                      <div className={`flex items-center gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${colors.iconBg} ${colors.text} border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner`}>
                          {activity.icon}
                        </div>
                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            {activity.title}
                          </h3>
                          <p className={`text-sm font-semibold uppercase tracking-wider ${colors.text} mt-1`}>
                            {activity.role}
                          </p>
                        </div>
                      </div>

                      {/* Header Badges */}
                      <div className={`flex items-center gap-3 mt-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-neon-green uppercase tracking-wider font-bold">
                          {activity.badge}
                        </span>
                        <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                          <Calendar size={12} />
                          {activity.period}
                        </span>
                      </div>

                      <div className="w-full h-px bg-white/5 my-2" />

                      {/* Description Text */}
                      <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                        {activity.description}
                      </p>
                    </div>

                    {/* Edge glow corresponding to alignment */}
                    <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isEven ? 'right-0 rounded-r-3xl' : 'left-0 rounded-l-3xl'}`} />
                  </div>
                </div>

                {/* Empty spacer for the other half of the flex timeline */}
                <div className="hidden md:block w-full md:w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
