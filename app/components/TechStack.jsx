"use client";

import { useEffect, useState } from "react";
import { techIcons } from "../site";
import { motion } from "framer-motion";

// Parent container for stagger
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }, // delay between each icon
  },
};

// Child animation
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TechStack() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setTheme(stored === "dark" ? "dark" : "light");

    const onStorage = (e) => {
      if (e.key === "theme") {
        setTheme(e.newValue === "dark" ? "dark" : "light");
      }
    };
    window.addEventListener("storage", onStorage);

    const onThemeChange = () => {
      const updated = localStorage.getItem("theme");
      setTheme(updated === "dark" ? "dark" : "light");
    };
    window.addEventListener("themeChange", onThemeChange);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("themeChange", onThemeChange);
    };
  }, []);

  return (
    <motion.section
      id="tech"
      className="py-24 scroll-mt-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl text-center font-semibold font-sans tracking-tight mb-8 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
        variants={item}
      >
        Stack
      </motion.h2>

      {/* Icons */}
      <motion.div className="flex flex-wrap gap-2" variants={container}>
        {techIcons.map((tech) => {
          const color =
            tech.color ||
            (theme === "dark"
              ? tech.darkColor || tech.color
              : tech.lightColor || tech.color);

          return (
            <motion.div
              key={tech.name}
              className="group w-12 h-12 rounded-lg flex items-center justify-center hover:bg-foreground/5 transition-colors cursor-pointer"
              title={tech.name}
              aria-label={tech.name}
              variants={item}
              whileHover={{ scale: 1.1, rotate: 3 }} // 👈 hover animation
              whileTap={{ scale: 0.95, rotate: 3 }}
            >
              <div className="relative group flex items-center justify-center">
                <img
                  key={theme} // reload on theme change
                  src={`https://cdn.simpleicons.org/${tech.slug}/${color}?t=${theme}`}
                  alt={tech.name}
                  className="w-7 h-7 opacity-100 group-hover:opacity-80 transition-opacity duration-200"
                  onError={(e) => {
                    e.currentTarget.src = `https://cdn.simpleicons.org/${tech.slug}`;
                  }}
                />
                <span
                  className="absolute bottom-full mb-1 px-2 py-1 text-xs rounded
                   opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none
                   bg-background text-foreground border border-foreground/20 shadow-sm"
                >
                  {tech.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
