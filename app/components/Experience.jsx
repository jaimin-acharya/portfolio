"use client";

import { experience } from "../site";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // delay between each card
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
      className="py-16 border-t border-foreground/10 scroll-mt-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-semibold tracking-tight"
        variants={item}
      >
        Experience
      </motion.h2>

      <motion.div className="mt-8 grid gap-6" variants={container}>
        {experience.map((item) => (
          <motion.div
            key={`${item.role}-${item.duration}`}
            className="group block rounded-lg border border-foreground/10 p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
            variants={item}
          >
            {/* Role + Duration */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-lg font-semibold tracking-tight text-card-foreground">
                {item.role}
              </div>
              <div className="text-xs text-muted-foreground">
                {item.duration}
              </div>
            </div>

            <span className="text-foreground/70 text-sm">{item.company}</span>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>

            {/* Skills */}
            {item.skills?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 bg-foreground/5 rounded-full border border-foreground/10 text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
