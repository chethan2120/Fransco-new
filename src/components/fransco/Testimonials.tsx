import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Ashwini S.",
    role: "Verified Buyer",
    location: "Mumbai",
    text: "The Fransco 4-in-1 Facewash is an absolute game-changer. My skin feels so fresh, clear, and radiant after every wash — it has become my favourite daily cleanser.",
    rating: 5,
  },
  {
    name: "Ananya S.",
    role: "Verified Buyer",
    location: "Delhi",
    text: "I was skeptical at first but after two weeks my skin feels genuinely smoother and more balanced than ever. Truly a luxurious experience worth every penny.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Verified Buyer",
    location: "Bengaluru",
    text: "This facewash brightened my complexion and got rid of that tired, dull look I always had. Fransco 4-in-1 Facewash is now a non-negotiable part of my morning routine.",
    rating: 5,
  },
  {
    name: "Rina T.",
    role: "Verified Buyer",
    location: "Chennai",
    text: "Gentle, non-stripping, and refreshing. I use it every day for a thorough cleanse and it works every single time. My skin has never looked this healthy.",
    rating: 5,
  },
  {
    name: "Mehak V.",
    role: "Verified Buyer",
    location: "Pune",
    text: "Finally a cleanser that actually does what it promises. No fragrance overload, just pure science-backed ingredients and a clear, balanced finish.",
    rating: 5,
  },
  {
    name: "Divya K.",
    role: "Verified Buyer",
    location: "Hyderabad",
    text: "I gifted this to my sister and she's obsessed. We both use it now. The 4-in-1 formula with Rice Water, Niacinamide, Azelaic, and Salicylic acid is incredible.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "linear-gradient(160deg, #FAF2EF 0%, #FCFBF9 50%, #FAF2EF 100%)",
      }}
    >
      {/* Decorative radial overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 0% 0%, rgba(125,64,71,0.06) 0%, transparent 50%),
                            radial-gradient(ellipse at 100% 100%, rgba(245,230,224,0.4) 0%, transparent 50%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label-pill">Customer Love</span>
          <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl" style={{ color: "#1D1615" }}>
            What Our Customers Say
          </h2>
          <p className="mt-4" style={{ color: "#8A736D" }}>
            Real stories from people who made Fransco part of their daily ritual.
          </p>
        </Reveal>

        {/* Overall rating summary */}
        <Reveal delay={100} className="mx-auto mt-10 max-w-xs">
          <div
            className="rounded-2xl p-6 text-center"
            style={{
              background: "linear-gradient(145deg, #FFFFFF 0%, #FCF9F7 100%)",
              border: "1px solid rgba(125,64,71,0.10)",
              boxShadow: "0 12px 40px -12px rgba(125,64,71,0.15)",
            }}
          >
            <p className="font-display text-6xl font-bold" style={{ color: "#7D4047" }}>
              4.8
            </p>
            <div className="mt-2 flex justify-center gap-1" style={{ color: "#D4AF37" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <p className="mt-2 text-sm" style={{ color: "#8A736D" }}>
              Based on 1,284 verified reviews
            </p>
            {/* Soft divider */}
            <div
              className="mx-auto mt-4 h-px w-16"
              style={{ background: "linear-gradient(90deg, transparent, rgba(125,64,71,0.15), transparent)" }}
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <figure
                className="hover-glow-primary group flex h-full flex-col overflow-hidden rounded-3xl p-8"
                style={{
                  background: "linear-gradient(145deg, #FFFFFF 0%, #FCF9F7 100%)",
                  border: "1px solid rgba(125,64,71,0.08)",
                  boxShadow: "0 8px 30px -8px rgba(125,64,71,0.08)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5" style={{ color: "#D4AF37" }}>
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>

                <blockquote
                  className="mt-4 flex-1 text-sm leading-relaxed"
                  style={{ color: "#8A736D" }}
                >
                  &ldquo;{r.text}&rdquo;
                </blockquote>

                <figcaption
                  className="mt-6 flex items-center gap-3 pt-5"
                  style={{ borderTop: "1px solid rgba(125,64,71,0.10)" }}
                >
                  {/* Avatar with palette gradient */}
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      background: "linear-gradient(135deg, #7D4047 0%, #F5EAE6 100%)",
                      color: "#FFFFFF",
                    }}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold" style={{ color: "#1D1615" }}>
                      {r.name}
                    </p>
                    <p className="text-xs" style={{ color: "#B08B81" }}>
                      {r.role} · {r.location}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}