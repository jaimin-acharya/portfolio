import { clientReviews } from "../site";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // lucide-react icons

export default function Clients() {
  if (!clientReviews || clientReviews.length === 0) return null;

  const items = [...clientReviews];
  const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="clients"
      className="py-16 border-t border-foreground/10 overflow-hidden scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold tracking-tight">
        Hear From My Clients
      </h2>

      <div className="relative mt-8 group">
        {/* Chevron Left (PC only) */}
        <button
          onClick={() => scrollByAmount(-400)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 
                     p-2 rounded-full bg-background shadow-md border border-foreground/10
                     hover:shadow-lg hover:border-foreground/20 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="relative w-full overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          <div className="flex gap-4">
            {items.map((client, i) => (
              <div
                key={i}
                className="
                  flex-shrink-0 snap-start overflow-hidden
                  w-[340px] sm:w-[500px]
                  rounded-lg border border-foreground/10 p-4 sm:p-6
                  bg-background transition-all duration-300
                  hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5
                "
              >
                {/* Client Image */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-base sm:text-lg font-semibold tracking-tight">
                      {client.name}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {client.position}
                    </div>
                  </div>
                </div>

                {/* Review */}
                <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-muted-foreground">
                  {client.review}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Chevron Right (PC only) */}
        <button
          onClick={() => scrollByAmount(400)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 
                     p-2 rounded-full bg-background shadow-md border border-foreground/10
                     hover:shadow-lg hover:border-foreground/20 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
