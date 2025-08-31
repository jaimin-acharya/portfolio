"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { contact as contactData } from "../site";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative font-sans flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32"
    >
      {/* Avatar */}
      <Avatar className="w-28 h-28 mb-6">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/180756712?v=4"
          alt="Jaimin Acharya"
        />
        <AvatarFallback>JA</AvatarFallback>
      </Avatar>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl font-mono font-bold tracking-tight mb-4"
      >
        Hi, I'm <span className="text-foreground uppercase">Jaimin Acharya</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl text-base text-foreground/80 mb-8"
      >
        19, I build, learn fast, and make things happen. Deep into code and
        development; anything that pushes the limits. Curiosity, creativity, and
        great books shaped me. Still chasing mastery. If you’re working on
        something real, let’s talk.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#contact"
          className="px-6 py-2 bg-foreground text-background rounded-md font-medium hover:opacity-90 transition"
        >
          Book a meet
        </a>
        <a
          href={`mailto:${contactData.email}`}
          className="px-6 py-2 bg-foreground/10 text-foreground border border-foreground/20 rounded-md font-medium hover:bg-foreground/20 transition"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
         