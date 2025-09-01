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
  const [isScrolled, setIsScrolled] = useState(false);
  const toggle = () => setIsOpen((v) => !v);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      id="#"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed uppercase top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "w-[95%] max-w-4xl"
          : "w-[95%] max-w-4xl backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
      }`}
    >
      <div
        className={`mx-auto px-6 py-2 flex flex-row items-center justify-between rounded-4xl border border-white/10 transition-all duration-300 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-2xl shadow-black/10"
            : "bg-background/70 backdrop-blur-md shadow-xl shadow-black/5"
        }`}
      >
        <Link href="#" className="inline-flex items-center gap-4">
          <LogoName siteMeta={siteMeta} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NavLinks.map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              className="text-foreground/80 hover:text-foreground transition-all duration-200 font-medium tracking-wide relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="flex">
            <ThemeToggle />
          </div>
          {/* Mobile menu button */}
          <motion.button
            type="button"
            onClick={toggle}
            aria-label="Toggle menu"
            className="md:hidden z-30 inline-flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -180, scale: 0.3 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 180, scale: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 180, scale: 0.3 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -180, scale: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile menu panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-4 mx-4 lg:hidden"
            >
              <div className="bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Nav links */}
                <nav className="px-6 py-6 flex flex-col gap-1">
                  {NavLinks.map(({ href, label }, index) => (
                    <motion.a
                      key={href}
                      href={href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="py-3 px-4 text-lg font-medium text-foreground/90 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
