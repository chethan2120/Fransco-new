import { Reveal } from "./Reveal";

const whyChooseImages = [
  {
    src: "/why chose fransco/french skin.webp",
    alt: "French scientific expertise",
  },
  {
    src: "/why chose fransco/premimum quality.webp",
    alt: "Premium quality ingredients",
  },
  {
    src: "/why chose fransco/dermatologist approved.webp",
    alt: "Dermatologist approved",
  },
  {
    src: "/why chose fransco/cruelty free.webp",
    alt: "Cruelty free formulations",
  },
  {
    src: "/why chose fransco/sutable for all skin.webp",
    alt: "Suitable for all skin types",
  },
  {
    src: "/why chose fransco/a luxury experience.webp",
    alt: "A luxury experience",
  },
];

export function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#FCFBF9" }}
      onContextMenu={(event) => event.preventDefault()}
    >
      {/* Background palette texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(245,230,224,0.5) 0%, transparent 45%),
                            radial-gradient(circle at 90% 80%, #F5EAE6 0%, transparent 45%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center mb-14">
          <span className="label-pill">Why Choose Us</span>
          <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl" style={{ color: "#7D4047" }}>
            Why Choose Fransco
          </h2>
          <p className="mt-4 font-medium" style={{ color: "#8A736D" }}>
            Experience the harmony of French science, dermatologist-approved safety, and pure luxury.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {whyChooseImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 90}>
              <div
                className="overflow-hidden rounded-3xl border border-border/60 shadow-card bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                onContextMenu={(event) => event.preventDefault()}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={750}
                  height={500}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  className="protected-image block aspect-[3/2] w-full object-cover pointer-events-none select-none transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
