"use client";

import { useRef, useEffect, useState } from "react";
import { Github } from "lucide-react";
import { hero as heroData } from "../site";
import { contact as contactData } from "../site";
import ShinyText from "../ui/ShinyText";
import { motion } from "framer-motion";
import VenomBeam from "@/components/ui/venom-beam";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <VenomBeam className="flex items-center justify-center w-full flex-col">
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
            className="inline-flex mt-3 items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 mb-6"
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
              LET'S TALK
            </a>
          </motion.div>
        </div>
      </VenomBeam>
    </section>
  );
}
