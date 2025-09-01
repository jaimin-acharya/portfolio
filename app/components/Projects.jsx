"use client";

import Image from "next/image";
import { projects } from "../site";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="font-sans scroll-mt-24"
    >
      <h2 className="text-3xl text-center font-semibold tracking-tight mb-8 font-sans bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-0 sm:p-2">
        {projects.map((project, idx) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg p-4 transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Title + Image */}
            <div className="flex flex-col items-start justify-between gap-4 mb-3">
              <Image
                src={project.img}
                alt={project.title}
                width={800}
                height={350}
                loading="lazy"
                className="w-full h-full hover:opacity-80 transition-all duration-300 rounded-md border border-foreground/10"
              />

              <h3 className="text-xl font-medium font-sans tracking-tight group-hover:text-foreground transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-lg text-foreground/70 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tags - Icons */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((s) => (
                <span
                  key={s}
                  className="text-xs font-sans rounded px-2 py-1
                   whitespace-nowrap pointer-events-none
                   bg-background text-foreground border border-foreground/20 shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
