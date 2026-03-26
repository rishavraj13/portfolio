"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Code2,
  ChefHat,
  Guitar,
  BookOpen,
  Plane,
  Dumbbell,
  Trophy,
  Sparkles
} from "lucide-react";

const HOBBIES = [
  {
    name: "Coding",
    icon: <Code2 size={28} />,
    detail: "Turning caffeine into code — from late-night side projects to competitive programming marathons.",
    color: "from-neon-green/20 to-emerald-500/10",
    accent: "text-neon-green",
    border: "hover:border-neon-green/30",
    gif: "https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif"
  },
  {
    name: "Cooking",
    icon: <ChefHat size={28} />,
    detail: "Experimenting with flavors and mastering regional Indian recipes. Biryani specialist in the making.",
    color: "from-orange-500/20 to-amber-500/10",
    accent: "text-orange-400",
    border: "hover:border-orange-400/30",
    gif: "https://media1.tenor.com/m/ASmjMYt_BEkAAAAC/let-him-cook-cook.gif"
  },
  {
    name: "Guitarist",
    icon: <Guitar size={28} />,
    detail: "Strumming acoustic melodies to unwind. From Bollywood classics.",
    color: "from-red-500/20 to-rose-500/10",
    accent: "text-red-400",
    border: "hover:border-red-400/30",
    gif: "https://media.tenor.com/y1dQSq4vVvAAAAAj/guitar-solo-cole-rolland.gif"
  },
  {
    name: "Book Reading",
    icon: <BookOpen size={28} />,
    detail: "Avid reader of both fiction and non-fiction.",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "text-blue-400",
    border: "hover:border-blue-400/30",
    gif: "https://media1.tenor.com/m/CsPCJHIlhy8AAAAC/frantic-studying.gif"
  },
  {
    name: "Travel & Explore",
    icon: <Plane size={28} />,
    detail: "Loves discovering new places, cultures, and cuisines. Every trip is a story waiting to be told.",
    color: "from-cyan-500/20 to-teal-500/10",
    accent: "text-cyan-400",
    border: "hover:border-cyan-400/30",
    gif: "https://media1.tenor.com/m/n3_jCCC4AdUAAAAd/rock-chick-dance.gif"
  },
  {
    name: "Fitness Freak",
    icon: <Dumbbell size={28} />,
    detail: "Discipline starts at the gym. Consistency over perfection.",
    color: "from-purple-500/20 to-violet-500/10",
    accent: "text-purple-400",
    border: "hover:border-purple-400/30",
    gif: "https://media1.tenor.com/m/ZR3WuBMnnjsAAAAC/jujutsu-kaisen-jjk.gif"
  },
  {
    name: "Football Player",
    icon: <Trophy size={28} />,
    detail: "Weekend warrior on the pitch.",
    color: "from-emerald-500/20 to-green-500/10",
    accent: "text-emerald-400",
    border: "hover:border-emerald-400/30",
    gif: "https://media1.tenor.com/m/bY6ekKqQWi8AAAAd/cristiano-ronaldo-cristiano-ronaldo-meme.gif"
  },
];

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full -z-10 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <Heart size={16} className="text-red-400" />
          <span className="text-sm font-mono text-white/70 uppercase tracking-widest">
            Off the Clock
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black text-white tracking-tighter"
        >
          Hobbies{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            & Passions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-500 max-w-lg text-lg"
        >
          Life beyond the terminal — the things that keep me balanced, inspired, and always growing.
        </motion.p>
      </div>

      {/* Hobbies Grid - Seamless Bento */}
      <div className="relative w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A]">
        {/* Inner Grid with 1px gap for "borders" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {HOBBIES.map((hobby, idx) => {
            // Determine span classes for a mixed bento layout
            // We have 7 items. A 4-column grid needs a combination that totals a multiple of 4 (e.g., 8 or 12 units).
            // Layout plan (total 12 units = 3 rows of 4 cols):
            // Row 1: Coding (cols: 2, rows: 2) | Cooking (cols: 2, rows: 1)
            // Row 2: ........................ | Guitarist (cols: 1) | Book Reading (cols: 1)
            // Row 3: Travel (cols: 2) | Fitness (cols: 1) | Football (cols: 1)

            let spanClass = "";

            if (idx === 0) spanClass = "col-span-1 md:col-span-2 lg:col-span-2 row-span-2"; // Coding (Large square)
            else if (idx === 1) spanClass = "col-span-1 md:col-span-2 lg:col-span-2"; // Cooking (Wide)
            else if (idx === 2) spanClass = "col-span-1 md:col-span-1 lg:col-span-1"; // Guitarist (Square)
            else if (idx === 3) spanClass = "col-span-1 md:col-span-1 lg:col-span-1"; // Book Reading (Square)
            else if (idx === 4) spanClass = "col-span-1 md:col-span-2 lg:col-span-2"; // Travel (Wide)
            else spanClass = "col-span-1 md:col-span-1 lg:col-span-1"; // Fitness & Football (Squares)

            return (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative bg-[#0A0A0A] overflow-hidden ${spanClass} min-h-[280px]`}
              >
                {/* Background GIF */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-95 group-hover:opacity-60 transition-all duration-700 ease-out mix-blend-screen scale-105 group-hover:scale-110"
                  style={{ backgroundImage: `url(${hobby.gif})` }}
                />

                {/* Overlay gradient to ensure text readability */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent transition-opacity duration-500`} />

                {/* Content Container */}
                <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end z-10">

                  {/* Floating Icon Top Right */}
                  <div className={`absolute top-6 right-6 w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center ${hobby.accent} shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                    {hobby.icon}
                  </div>

                  <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Title */}
                    <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                      {hobby.name}
                    </h3>

                    {/* Description - Fades in and slides up on hover */}
                    <p className={`text-sm text-neutral-300 leading-relaxed font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2`}>
                      {hobby.detail}
                    </p>
                  </div>

                  {/* Hover Accent Line at bottom */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${hobby.color} group-hover:w-full transition-all duration-700 opacity-80`} />
                </div>

                {/* Ambient Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay" style={{ background: `radial-gradient(circle at center, var(--${hobby.accent.replace('text-', '')}), transparent)` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
