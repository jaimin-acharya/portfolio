"use client";

import { useRef, useEffect, useState } from "react";
import { Github } from "lucide-react";
import { hero as heroData } from "../site";
import { contact as contactData } from "../site";
import ShinyText from "../ui/ShinyText";
import { motion } from "framer-motion";

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
      {/* Background glow */}
      {/* <div className="absolute w-full h-full inset-0 -z-20 overflow-hidden">
        <div className="absolute w-full h-40 bg-gradient-to-b from-emerald-500/10 to-cyan-500/10 rounded-sm blur-3xl "></div>
      </div> */}

      {/* Cursor-follow glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500 ease-out"
        style={{
          opacity: isActive ? 1 : 0,
          background: `radial-gradient(
      800px circle at ${mousePosition.x}px ${mousePosition.y}px,
      rgba(16, 185, 129, 0.35),   /* bright emerald center */
      rgba(6, 182, 212, 0.25) 25%, /* cyan mid glow */
      transparent 70%
    )`,
          filter: "blur(60px)", // softer fade
          transform: "translateZ(0)",
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

      {/* Content */}
      <div className="relative max-w-4xl flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-7xl font-bold tracking-tight leading-tight"
        >
          <span className="bg-foreground text-foreground/80 bg-clip-text">
            <ShinyText
              text={heroData.greeting}
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-flex mt-3 items-center gap-2 px-3 py-1 rounded-full 
             bg-foreground/5 border border-green-400/50 
             shadow-[0_0_15px_rgba(16,185,129,0.5)] 
             mb-6"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-xs uppercase tracking-widest text-foreground/70">
            {heroData.subtitle}
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap"
        >
          <a
            href={`mailto:${contactData.email}`}
            className="px-4 py-2 bg-foreground text-background rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            LET&apos;S TALK
          </a>
        </motion.div>
      </div>
    </section>
  );
}
