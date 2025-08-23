"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NavLinks, siteMeta } from "../site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((v) => !v);

  return (
    <header
      id="#"
      className="sticky top-0 z-20 py-4  mx-auto backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-foreground/10 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
    >
      <div className="mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold tracking-tight text-sm sm:text-base"
        >
          {siteMeta.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm">
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
            className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-foreground/5"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      
      <div
        className={`fixed z-20 top-full left-0 backdrop-blur supports-[backdrop-filter]:bg-background w-full lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-auto opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <nav className="border-t border-foreground/10 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] mx-auto max-w-5xl px-6 py-3 flex flex-col items-start gap-3 text-sm">
          {NavLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="py-2 text-foreground/80 hover:text-foreground/100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
