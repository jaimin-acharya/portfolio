import Image from "next/image";
import { clientReviews } from "../site";
import { motion } from "framer-motion";

export default function Clients() {
  if (!clientReviews || clientReviews.length === 0) return null;

  const items = [...clientReviews];

  return (
    <section
      id="clients"
      className="py-14 font-sans overflow-hidden scroll-mt-24 relative"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl text-center font-semibold font-sans bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent tracking-tight mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Hear From My Clients
      </motion.h2>

      {/* Marquee container */}
      <div className="relative mt-10 flex overflow-hidden group">
        <ul className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {/* Duplicate list for seamless loop */}
          {[...items, ...items].map((client, i) => (
            <li
              key={`${client.name}-${i}`}
              className="flex-shrink-0 w-[300px] sm:w-[400px] 
                         rounded-xl border border-foreground/10 p-4 sm:p-6
                         bg-background hover:border-foreground/20
                         transition-all duration-300"
            >
              {/* Client Image */}
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src={client.img}
                  alt={client.name}
                  height={100}
                  width={100}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-base font-sans sm:text-lg font-semibold tracking-tight">
                    {client.name}
                  </div>
                  <div className="text-xs font-sans sm:text-sm text-muted-foreground">
                    {client.position}
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-muted-foreground">
                {client.review}
              </p>
            </li>
          ))}
        </ul>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/95 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/95 to-transparent"></div>
      </div>
    </section>
  );
}
