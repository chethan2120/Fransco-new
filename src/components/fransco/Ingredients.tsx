import { Reveal } from "./Reveal";

const ingredients = [
  {
    name: "Rice Water Brightening Complex",
    image: "/whates-inside-section/rice-water.jpg",
  },
  {
    name: "Niacinamide for Even Skin Tone",
    image: "/whates-inside-section/niacinamide.jpg",
  },
  {
    name: "Azelaic Acid for Spot Reduction",
    image: "/whates-inside-section/azelaic-acid.jpg",
  },
  {
    name: "Salicylic Acid for Acne Control",
    image: "/whates-inside-section/salicylic-acid.jpg",
  },
];

export function Ingredients() {
  return (
    <section
      id="ingredients"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#FCFBF9" }}
    >
      {/* Background texture using palette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #F5EAE6 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(245,230,224,0.6) 0%, transparent 50%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label-pill">What&apos;s Inside</span>
          <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl" style={{ color: "#1D1615" }}>
            Key Ingredients
          </h2>
          <p className="mt-4" style={{ color: "#8A736D" }}>
            Every ingredient is chosen with purpose — clean, effective, and skin-loving.
          </p>
        </Reveal>

        {/* Clean 2 x 2 Grid layout (1 column on mobile, 2 columns on tablet & desktop) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 max-w-6xl mx-auto">
          {ingredients.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <div
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                onContextMenu={(event) => event.preventDefault()}
                style={{
                  boxShadow: "0 10px 30px -10px rgba(125,64,71,0.06), 0 4px 12px -4px rgba(46,46,46,0.03)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  draggable={false}
                  loading="lazy"
                  width={960}
                  height={640}
                  className="protected-image block w-full h-auto aspect-[16/10.5] object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
