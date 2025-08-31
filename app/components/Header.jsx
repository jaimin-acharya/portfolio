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
import Link from "next/link";
import LogoName from "../ui/Logoname";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((v) => !v);

  return (
    <header
      id="#"
      className="sticky uppercase top-0 z-20 py-4 max-w-4xl mx-auto backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-foreground/10 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
    >
      <div className="mx-auto px-6 flex flex-row items-center justify-between">
        <Link href="#" className="inline-flex items-center gap-4">
          <LogoName siteMeta={siteMeta} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-md">
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
          <div className="flex z-30">
            <ThemeToggle />
          </div>
          {/* Mobile menu button */}
          <motion.button
            type="button"
            onClick={toggle}
            aria-label="Toggle menu"
            className="md:hidden z-30 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-foreground/5"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} // off-screen right
            animate={{ opacity: 1, x: 0 }} // slide into view
            exit={{ opacity: 0, x: "100%" }} // slide out to the right
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed z-10 top-0 right-0 h-screen w-full lg:hidden overflow-hidden bg-background backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            {/* Nav links */}
            <nav className="h-full border-t border-b border-foreground/10 mx-auto max-w-5xl px-6 py-3 flex flex-col items-center justify-center gap-3 text-sm">
              {NavLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="py-2 text-lg font-medium text-foreground/100 transition-colors"
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
