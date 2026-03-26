"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Use same custom SVG as Hero.tsx for consistency
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const PROJECTS = [
  {
    title: "Driver Danger Alert",
    metric: "25+ FPS Real-time processing",
    description: "AI-powered real-time driver drowsiness and distraction detection system using facial landmark analysis.",
    metricValue: "95% Accuracy",
    stack: ["Python", "OpenCV", "MediaPipe"],
    github: "#"
  },
  {
    title: "E-Commerce Platform",
    metric: "50+ Product Listings & Stripe",
    description: "Premium full-stack build with integrated Stripe API, resulting in 50% faster order handling.",
    metricValue: "50% Faster",
    stack: ["Next.js", "React", "Stripe API"],
    github: "#"
  },
  // {
  //   title: "Web Development",
  //   metric: "MERN Stack Design",
  //   description: "Scalable full-stack architectures structured for high performance and rapid deployment.",
  //   metricValue: "Scalable",
  //   stack: ["MongoDB", "Express", "React", "Node.js"],
  //   github: "#"
  // },
  {
    title: "AI Content Moderation",
    metric: "Python Chatbot Automation",
    description: "Automated moderation scaling across channels using optimized NLP technique integrations.",
    metricValue: "Automated",
    stack: ["Python", "TensorFlow", "FastAPI"],
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col gap-16 pt-32 min-h-screen">
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
          Work <span className="text-neon-green font-signature lowercase italic tracking-normal">Archive</span>
        </h2>
        <p className="text-neutral-500 font-mono text-sm tracking-widest uppercase">Select Projects (2024 - 2025)</p>
      </div>

      <div className="flex flex-col border-t border-neutral-900">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative border-b border-neutral-900 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer overflow-hidden"
          >
            {/* Hover Background Reveal */}
            <div className="absolute inset-0 bg-neon-green/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo pointer-events-none" />

            <div className="flex-1 z-10">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs font-mono text-neutral-600 group-hover:text-neon-green/60 transition-colors">0{idx + 1}</span>
                <h3 className="text-3xl md:text-5xl font-bold text-neutral-400 group-hover:text-white transition-all duration-300 tracking-tight">
                  {project.title}
                </h3>
              </div>

              <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-out">
                <p className="text-neutral-500 group-hover:text-neutral-300 text-lg md:text-xl max-w-2xl mt-4 leading-relaxed decoration-neon-green">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-neutral-900 text-[10px] font-bold text-neutral-500 uppercase tracking-widest border border-neutral-800 rounded group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-8 z-10 transition-all duration-500 group-hover:translate-x-[-20px]">
              <div className="flex flex-col items-end">
                <span className="text-2xl md:text-3xl font-black text-neutral-800 group-hover:text-neon-green transition-colors duration-500">{project.metricValue}</span>
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">{project.metric}</span>
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                >
                  <GithubIcon />
                </a>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-neon-green group-hover:border-neon-green group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight className="text-neutral-600 group-hover:text-black" size={24} />
                </div>
              </div>
            </div>

            <a href={project.github} className="absolute inset-0 z-0" aria-label={`View ${project.title}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
