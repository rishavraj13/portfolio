"use client";

export default function TechMarquee() {
  const technologies = [
    { name: "C++", slug: "cplusplus" },
    { name: "JavaScript", slug: "javascript" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Python", slug: "python" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "React", slug: "react" },
    { name: "Tailwind", slug: "tailwindcss" },
    { name: "Express", slug: "express" },
    { name: "OpenCV", slug: "opencv" },
    { name: "Docker", slug: "docker" },
    { name: "Firebase", slug: "firebase" },
    { name: "MongoDB", slug: "mongodb" }
  ];

  // Duplicate array multiple times to ensure we have enough content to fill ultra-wide screens
  const marqueeItems = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-16 flex whitespace-nowrap relative isolate z-10">
      {/* Seamless fade edges using CSS variables to perfectly match background without hard colors */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-16 w-fit pl-16">
        {marqueeItems.map((tech, idx) => (
          <div key={idx} className="flex items-center justify-center group cursor-pointer w-16 h-16">
            {/* The monochrome Icon blending perfectly with background */}
            <div className="relative w-full h-full opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
              <img 
                src={`https://cdn.simpleicons.org/${tech.slug}/6EE716`} 
                alt={`${tech.name} logo`}
                className="w-full h-full object-contain mix-blend-screen drop-shadow-none group-hover:drop-shadow-[0_0_20px_rgba(110,231,22,0.8)] transition-all duration-500 transform group-hover:scale-125"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
