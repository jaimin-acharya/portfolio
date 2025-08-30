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
      <h2 className="text-3xl font-semibold tracking-tight mb-8 font-sans">
        Projects
      </h2>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-0 sm:p-2">
        {projects.map((project, idx) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg p-4 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
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
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => {
                const slug = tag.toLowerCase().replace(/\s+/g, ""); // normalize for icon URL
                return (
                  <div
                    key={tag}
                    className="group flex items-center h-8 rounded-full bg-foreground/5 border border-foreground/10
         overflow-hidden transition-all duration-500 ease-out
         w-8 hover:w-auto max-w-xs cursor-pointer
         hover:bg-foreground/10 hover:border-foreground/20 hover:shadow-md
         hover:scale-105 active:scale-95"
                  >
                    {/* Icon */}
                    <div className="w-4 h-4 mx-2 shrink-0 transition-transform duration-500 ease-out group-hover:rotate-12">
                      <img
                        src={`https://cdn.simpleicons.org/${slug}`}
                        alt={tag}
                        width={16}
                        height={16}
                        loading="lazy"
                        className="w-full h-full transition-opacity duration-300"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>

                    {/* Name */}
                    <span
                      className="pr-3 text-xs font-medium opacity-0 translate-x-[-12px] scale-90
           group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
           transition-all duration-500 ease-out whitespace-nowrap
           text-foreground/80 group-hover:text-foreground"
                    >
                      {tag.toUpperCase()}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
