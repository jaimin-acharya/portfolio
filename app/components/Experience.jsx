"use client";

import { experience } from "../site";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  if (!experience || experience.length === 0) return null;

  return (
    <motion.section
      id="experience"
      className="py-16 font-sans scroll-mt-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl text-center font-semibold tracking-tight mb-10 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
        variants={item}
      >
        Experience
      </motion.h2>

      {/* Timeline-like list */}
      <div className="space-y-8 max-w-full ">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            className="group flex items-start gap-4 p-4 rounded-lg transition-all duration-300
                       hover:-translate-y-1 hover:bg-foreground/5 hover:shadow-md
                       border border-transparent hover:border-foreground/10"
            variants={item}
          >
            {/* Logo */}
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center 
                         overflow-hidden "
            >
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              ) : (
                <span className="text-sm font-bold text-foreground/70">
                  {exp.company[0]}
                </span>
              )}
            </div>

            {/* Details */}
            <div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-foreground transition-colors">
                {exp.role}
              </h3>
              <p className="text-sm text-foreground/80">{exp.company}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {exp.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
