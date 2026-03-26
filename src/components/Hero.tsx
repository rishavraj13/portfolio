"use client";

import { motion } from "framer-motion";
import { Terminal, BrainCircuit, Download } from "lucide-react";
import portrait from "../../public/portrait.jpg";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8">
      {/* Background radial gradient for subtle focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,231,22,0.08)_0%,transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10 pt-20 pb-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-sm font-mono shadow-[0_0_10px_rgba(110,231,22,0.2)]">
            <Terminal size={16} />
            <span>System.out.println(&quot;Hello&quot;);</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            <span className="text-foreground">Namaste! I&apos;m </span>
            <span className="font-signature text-neon-green text-5xl md:text-7xl block mt-2 drop-shadow-[0_0_15px_rgba(110,231,22,0.4)]">Rishav Raj</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-lg">
            Full Stack Developer & AI Enthusiast specializing in MERN stack and Computer Vision.
          </p>

          {/* Action Buttons and Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-6 mt-6"
          >
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3 bg-neon-green text-black font-semibold hover:bg-neon-green/90 transition-colors">
                My Projects
              </a>
              <a href="/sysc.pdf" download="Rishav_Raj_CV.pdf" className="px-8 py-3 border-2 border-neon-green text-foreground hover:bg-neon-green/10 transition-colors inline-flex items-center gap-2">
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                { name: "GitHub", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>, link: "#" },
                { name: "LinkedIn", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>, link: "#" },
                { name: "Twitter", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>, link: "#" },
                { name: "Instagram", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>, link: "#" },
                { name: "Dev", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>, link: "#" }
              ].map((item, i) => (
                <a key={i} href={item.link} aria-label={item.name} className="w-12 h-12 flex items-center justify-center bg-[#1a1a1a] hover:bg-neon-green hover:text-black text-white transition-colors">
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Visual/Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative flex justify-center items-center w-full max-w-md"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Geometric clip-path background glow */}
            <div className="absolute inset-0 bg-neon-green/20 backdrop-blur-md border border-neon-green/50 shadow-[0_0_40px_rgba(110,231,22,0.3)] animate-pulse"
              style={{ clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' }} />

            {/* Grayscale portrait container */}
            <div className="absolute inset-[4px] bg-neutral-900 grayscales overflow-hidden flex items-center justify-center border border-neutral-800"
              style={{ clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' }}>
              {/* Replace this div with an actual <img> tag later */}
              <div>
                <img src="/portrait.jpg" alt="Rishav Portrait" className="h-full w-full object-cover   group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
