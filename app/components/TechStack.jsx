"use client";

import { useEffect, useState } from "react";
import { techIcons } from "../site";

export default function TechStack() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Initialize theme from localStorage
    const stored = localStorage.getItem("theme");
    setTheme(stored === "dark" ? "dark" : "light");

    // Listen to localStorage changes on other tabs or this tab
    const onStorage = (e) => {
      if (e.key === "theme") {
        setTheme(e.newValue === "dark" ? "dark" : "light");
      }
    };
    window.addEventListener("storage", onStorage);

    // Also listen to manual updates in same tab (localStorage.setItem doesn't fire 'storage' event in same tab)
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
    <section
      id="tech"
      className="py-20 border-t border-foreground/10 scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold tracking-tight mb-8">Stack</h2>

      <div className="flex flex-wrap gap-2">
        {techIcons.map((tech) => {
          const color =
            tech.color ||
            (theme === "dark"
              ? tech.darkColor || tech.color
              : tech.lightColor || tech.color);

          return (
            <div
              key={tech.name}
              className="group w-12 h-12 rounded-lg flex items-center justify-center hover:bg-foreground/5 transition-colors cursor-pointer"
              title={tech.name}
              aria-label={tech.name}
            >
              <div className="relative group flex items-center justify-center">
                <img
                  key={theme} // force reload on theme change
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
