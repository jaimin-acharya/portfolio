"use client";

import Image from "next/image";
import { projects } from "../site";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 border-t border-foreground/10 scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold tracking-tight mb-8 font-sans">Projects</h2>

      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 p-0 sm:p-2">
        {projects.map((project, idx) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-foreground/10 p-4 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Title + Icon */}
            <div className="flex flex-col items-start justify-between gap-4 mb-3">
              <Image
                src={project.img}
                alt={project.title}
                width={800}
                height={350}
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

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-foreground/5 rounded-full border border-foreground/10 text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
