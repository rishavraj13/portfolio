import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const caveat = Caveat({ subsets: ["latin"], variable: '--font-signature' });

export const metadata: Metadata = {
  title: "Rishav | Developer Portfolio",
  description: "Full Stack Developer & AI Enthusiast specializing in MERN stack and Computer Vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${caveat.variable} font-inter antialiased bg-background text-foreground min-h-screen relative`}>
        {/* Ambient Blurred Background Grid */}
        <div className="fixed inset-0 z-[-1] bg-grid-pattern blur-[10px] opacity-70 inset-shadow-sm pointer-events-none mix-blend-screen" />
        
        <Preloader>
          <Navbar />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Preloader>
      </body>
    </html>
  );
}
