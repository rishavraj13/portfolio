"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Globe,
  Database,
  Cpu,
  Zap,
  Layers,
  Braces
} from "lucide-react";

// Map skill names to Simple Icons / Devicon CDN logos
const SKILL_LOGOS: Record<string, string> = {
  // Languages
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

  // Web & Frameworks
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "MERN Stack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "REST API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",

  // Databases & Tools
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Appwrite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
  "Cloudinary": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudinary/cloudinary-original.svg",

  // CV & AI
  "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  "MediaPipe": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  "SciPy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scipy/scipy-original.svg",
};

const SKILLS_DATA = [
  {
    category: "Languages",
    icon: <Terminal className="text-blue-400" size={24} />,
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Web & Frameworks",
    icon: <Globe className="text-neon-green" size={24} />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "MERN Stack", "Node.js", "Express.js", "REST API"],
    color: "from-neon-green/20 to-emerald-500/20"
  },
  {
    category: "Databases & Tools",
    icon: <Database className="text-orange-400" size={24} />,
    skills: ["MongoDB", "SQL", "Git", "GitHub", "Vercel", "Postman", "Firebase", "Appwrite", "Cloudinary"],
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    category: "CV & AI",
    icon: <Cpu className="text-purple-400" size={24} />,
    skills: ["OpenCV", "MediaPipe", "NumPy", "SciPy"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    category: "Core Theory",
    icon: <Layers className="text-red-400" size={24} />,
    skills: ["DSA", "System Design", "DBMS", "Operating Systems", "OOPs", "Full Stack Web Dev"],
    color: "from-red-500/20 to-orange-500/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <Zap size={16} className="text-neon-green" />
          <span className="text-sm font-mono text-white/70 uppercase tracking-widest">Mastery</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black text-white tracking-tighter"
        >
          Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">& Toolkit</span>
        </motion.h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {SKILLS_DATA.map((item, idx) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            animate={{
              y: [0, -12, 0],
              transition: {
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.5
              }
            }}
            className="group relative"
          >
            {/* Gloss Card */}
            <div className={`h-full relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${item.color} border border-white/10 p-10 backdrop-blur-3xl hover:border-white/20 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]`}>
              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-white/30 transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight uppercase">
                    {item.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {item.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm md:text-base text-neutral-300 font-medium transition-all hover:bg-white/10 hover:text-white hover:border-white/20 inline-flex items-center gap-2"
                    >
                      {SKILL_LOGOS[skill] && (
                        <img
                          src={SKILL_LOGOS[skill]}
                          alt={`${skill} logo`}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                        />
                      )}
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none rotate-12">
                <Braces size={160} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
