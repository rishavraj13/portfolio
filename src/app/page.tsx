import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden">
      <Hero />
      <TechMarquee />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Education />
      <Hobbies />
      <Footer />
    </main>
  );
}
