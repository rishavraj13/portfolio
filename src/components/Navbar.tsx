"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, Briefcase, Code, GraduationCap, Zap } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero", icon: <Home size={18} /> },
  { label: "Experience", href: "#experience", icon: <Briefcase size={18} /> },
  { label: "Projects", href: "#projects", icon: <Code size={18} /> },
  { label: "Skills", href: "#skills", icon: <Zap size={18} /> },
  { label: "Achievements", href: "#achievements", icon: <Zap size={18} /> },

  { label: "Education", href: "#education", icon: <GraduationCap size={18} /> },

];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll direction detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  // Active section detection using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0% 0px -70% 0px", // Detect when section is in the top portion
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = ["hero", "experience", "projects", "skills", "achievements", "education"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        style={{ x: "-50%" }}
        className="fixed top-3 left-1/2 items-center align-center  z-[100] w-fit"
      >
        <div className="flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-[#0A0A0A]/40 backdrop-blur-md shadow-2xl">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-500
                  ${isActive ? "text-white" : "text-white/40 hover:text-white/70"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.icon}</span>
                <span className="relative z-10 hidden md:block">{item.label}</span>

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-green rounded-full shadow-[0_0_8px_rgba(57,255,20,0.8)]"
                  />
                )}
              </a>
            );
          })}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
