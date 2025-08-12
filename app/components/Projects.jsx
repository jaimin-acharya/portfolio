import { projects as projects } from "../site"
export default function Projects() {


  return (
    <section id="projects" className="py-20 border-t border-foreground/10 scroll-mt-24">
      <h2 className="text-3xl font-semibold tracking-tight mb-8">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-foreground/10 p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl font-medium tracking-tight group-hover:text-foreground transition-colors">
                {project.title}
              </h3>
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-foreground/40 group-hover:bg-foreground/5 transition-all">

                <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>

            <p className="text-foreground/70 leading-relaxed mb-4">
              {project.description}
            </p>

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
          </a>
        ))}
      </div>
    </section>
  );
}