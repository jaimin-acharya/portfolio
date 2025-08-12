import { clientReviews } from "../site";

export default function Clients() {
  if (!clientReviews || clientReviews.length === 0) return null;

  const items = [...clientReviews, ...clientReviews]; // duplicate for loop

  return (
    <section
      id="clients"
      className="py-16 border-t border-foreground/10 scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold tracking-tight">
        Hear From My Clients
      </h2>

      <div className="relative overflow-hidden mt-8 group">
        <div className="flex animate-marquee">
          {items.map((client, i) => (
            <div
              key={i}
              className="
                min-w-[85%] sm:min-w-[60%] md:min-w-[400px] lg:min-w-[500px]
                rounded-lg border border-foreground/10 p-4 sm:p-6 mx-2 sm:mx-3 bg-background
                transition-all duration-300
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
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {client.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
