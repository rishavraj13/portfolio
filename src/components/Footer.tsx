"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden mt-20">
      {/* ─── LET'S CONNECT SECTION ─── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 md:px-8 py-24"
      >
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-neon-green/10 to-emerald-500/5 border border-white/10 p-12 md:p-20 backdrop-blur-3xl text-center">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-green/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/20 bg-neon-green/5 mb-8"
          >
            <Sparkles size={14} className="text-neon-green" />
            <span className="text-sm font-mono text-neon-green/80 uppercase tracking-widest">
              Open to opportunities
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">
              Connect
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Got a project in mind or just want to say hello? I&apos;m always open to
            discussing new projects, creative ideas, or opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:[EMAIL_ADDRESS]"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-neon-green text-black font-bold text-lg hover:bg-neon-green/90 transition-all duration-300 rounded-full hover:shadow-[0_0_30px_rgba(110,231,22,0.3)]"
            >
              <Mail size={20} />
              Say Hello
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rishavraj1314/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/10 text-white font-bold text-lg hover:border-neon-green/30 hover:bg-white/5 transition-all duration-300 rounded-full"
            >
              LinkedIn
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </motion.div>

      {/* ─── BOTTOM BAR ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-neutral-900 py-10 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-neutral-500 font-mono text-sm order-2 md:order-1 text-center md:text-left">
            <span className="text-neon-green">©</span>{" "}
            {new Date().getFullYear()} Rishav Raj. Build with excellence.
            <div className="mt-1 text-[10px] text-neutral-700 uppercase tracking-widest">
              All systems functional // Protocol 7-0
            </div>
          </div>

          <div className="flex gap-8 order-1 md:order-2">
            {[
              {
                name: "GitHub",
                path: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4 M9 18c-4.51 2-5-2-7-2",
                link: "https://github.com/rishavraj13",
              },
              {
                name: "LinkedIn",
                path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
                link: "https://www.linkedin.com/in/rishavraj1314/",
              },

            ].map((social) => (
              <a
                key={social.name}
                href={social.link}
                className="text-neutral-500 hover:text-neon-green hover:-translate-y-1 transition-all duration-300 group"
                aria-label={social.name}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:drop-shadow-[0_0_8px_rgba(110,231,22,0.5)]"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
