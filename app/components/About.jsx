import { about, contact } from "../site"
export default function About() {
  return (
    <section id="about" className="py-20 border-t border-foreground/10 scroll-mt-24">
      <h2 className="text-3xl font-semibold tracking-tight mb-6">About</h2>

      <div className="max-w-2xl space-y-6">
        <p className="text-lg leading-relaxed text-foreground/80">
          {about.head}
        </p>
        <p className="text-lg leading-relaxed text-foreground/80">
          {about.bio}
        </p>

        <p className="text-lg leading-relaxed text-foreground/80">
          {about.currentFocus}
        </p>
        <p className="text-lg leading-relaxed text-foreground/80">
          {about.collaboration}
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href="#contact"
            className="px-4 py-2 bg-foreground text-background rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}