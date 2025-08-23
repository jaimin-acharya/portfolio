"use client";

import { about, contact } from "../site";
import { motion } from "framer-motion";

// Parent container variant for stagger effect
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between children
    },
  },
};

// Child elements animation
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 border-t border-foreground/10 scroll-mt-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl font-semibold tracking-tight mb-6"
        variants={item}
      >
        About
      </motion.h2>

      {/* Content */}
      <motion.div className="max-w-2xl space-y-6">
        <motion.p
          className="text-lg leading-relaxed text-foreground/80"
          variants={item}
        >
          {about.head}
        </motion.p>
        
        <motion.p
          className="text-lg leading-relaxed text-foreground/80"
          variants={item}
        >
          {about.currentFocus}
        </motion.p>
        <motion.p
          className="text-lg leading-relaxed text-foreground/80"
          variants={item}
        >
          {about.collaboration}
        </motion.p>

        {/* Button */}
        <motion.div className="flex flex-wrap gap-3 mt-4" variants={item}>
          <a
            href="#contact"
            className="px-4 py-2 bg-foreground text-background rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
