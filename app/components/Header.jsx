"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NavLinks, siteMeta, contact } from "../site";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((v) => !v);

  return (  
    <header
      id="#"
      className="sticky top-0 z-20 py-4 max-w-full mx-auto backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-foreground/10 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
    >
      <div className="mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold tracking-tight text-md sm:text-base"
        >
          {siteMeta.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NavLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-foreground/80 hover:text-foreground/100 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:ml-6">
          <div className="flex">
            <ThemeToggle />
          </div>
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle menu"
            className="md:hidden z-30 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-foreground/5"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "100vh" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed z-20 top-0 left-0 w-full lg:hidden overflow-hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Nav links */}
            <nav className="backdrop-blur-md bg-background supports-[backdrop-filter]:bg-background h-full border-t border-b border-foreground/10 mx-auto max-w-5xl px-6 py-3 flex flex-col items-center justify-center gap-3 text-sm">
              {NavLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="py-2 text-lg text-foreground/80 hover:text-foreground/100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
