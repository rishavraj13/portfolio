"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Simulate loading time (2.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          >
            {/* The Thunderbolt Container */}
            <div className="relative flex flex-col items-center justify-center mb-8">
               
               {/* Pulsing Glow Behind Thunderbolt */}
               <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute inset-0 bg-neon-green rounded-full blur-[60px] -z-10"
               />

               {/* Thunderbolt SVG with Flicker Animation */}
               <motion.div
                 initial={{ scale: 0.5, opacity: 0 }}
                 animate={{ 
                   scale: [0.8, 1.1, 1, 1.05, 1], 
                   opacity: [0, 1, 0.6, 1, 0.8, 1],
                   rotate: [ -5, 5, -2, 2, 0 ]
                 }}
                 transition={{ 
                   duration: 1.2, 
                   repeat: Infinity,
                   repeatType: "reverse",
                   ease: "circOut"
                 }}
                 className="relative text-neon-green drop-shadow-[0_0_25px_rgba(110,231,22,1)]"
               >
                 <svg 
                   xmlns="http://www.w3.org/2000/svg" 
                   width="120" 
                   height="120" 
                   viewBox="0 0 24 24" 
                   fill="currentColor" 
                   stroke="currentColor" 
                   strokeWidth="0.5" 
                   strokeLinecap="round" 
                   strokeLinejoin="round" 
                   className="animate-pulse"
                 >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                 </svg>
               </motion.div>
            </div>
            
            {/* Loading Text and Progress Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center gap-4 w-full max-w-xs px-6"
            >
              <span className="font-mono text-neon-green text-sm tracking-[0.3em] uppercase drop-shadow-[0_0_5px_rgba(110,231,22,0.8)]">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  System Powering Up
                </motion.span>
              </span>
              
              <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut", delay: 0.1 }}
                  className="h-full bg-neon-green shadow-[0_0_15px_rgba(110,231,22,1)]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
