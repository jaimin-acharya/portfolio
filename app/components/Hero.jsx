"use client";

import { useRef, useEffect, useState } from "react";
import { Github } from "lucide-react";
import { hero as heroData } from "../site";
import { contact as contactData } from "../site";
import ShinyText from "../ui/ShinyText";

export default function Hero() {
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };

    el.addEventListener("pointermove", handleMove);
    return () => el.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      onPointerEnter={() => setIsActive(true)}
      onPointerLeave={() => setIsActive(false)}
      className="relative px-2 py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="absolute w-full h-full inset-0 -z-20 overflow-hidden">
        {/* <div className="absolute w-full h-40 bg-gradient-to-t from-blue-500/10 to-purple-500/10 rounded-sm blur-3xl "></div> */}
        <div className="absolute w-full h-40 bg-gradient-to-b from-emerald-500/10 to-cyan-500/10 rounded-sm blur-3xl "></div>
      </div>

      {/* Cursor-follow glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500 ease-out"
        style={{
          opacity: isActive ? 1 : 0,
          background: `radial-gradient(
      250px circle at ${mousePosition.x}px ${mousePosition.y}px,
      rgba(255, 255, 255, 0.18),
      rgba(255, 255, 255, 0.05) 40%,
      transparent 70%
    )`,
          filter: "blur(40px)", // softer edges
          transform: "translateZ(0)", // GPU acceleration
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            <Github size={14 + i * 2} className="text-foreground/80" />
          </div>
        ))}
      </div>

      <div className="relative max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight leading-tight">
          <span className="bg-foreground text-foreground/80 bg-clip-text">
            <ShinyText
              text={heroData.greeting}
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </span>
        </h1>

        <div className="inline-flex mt-3 items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 mb-6">
          <div className="w-2  h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-xs uppercase tracking-widest text-foreground/70">
            {heroData.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap">
          <a
            href={`mailto:${contactData.email}`}
            className="px-4 py-2 bg-foreground text-background rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </section>
  );
}
