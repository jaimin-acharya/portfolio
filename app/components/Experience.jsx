import { experience } from "../site";

export default function Experience() {
  if (!experience || experience.length === 0) return null;

  return (
    <section
      id="experience"
      className="py-16 border-t border-foreground/10 scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold tracking-tight">
        Experience
      </h2>

      <div className="mt-8 ">
        {experience.map((item) => (
          <div
            key={`${item.role}-${item.duration}`}
            className="group block rounded-lg border border-foreground/10 p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
          >
            {/* Role + Duration */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-lg font-semibold tracking-tight text-card-foreground">
                {item.role}
                
              </div>
              <div className="text-xs text-muted-foreground">{item.duration}</div>
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
          </div>
        ))}
      </div>
    </section>
  );
}
