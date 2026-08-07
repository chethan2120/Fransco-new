import { Reveal } from "./Reveal";

const steps = [
  {
    step: "01",
    title: "Cleanse Your Face",
    desc: "Start with a gentle cleanser to remove impurities and prepare your skin for maximum absorption.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
        <path d="M2 20l4-4M2 16l4 4" />
        <path d="M9 9h6M9 13h3" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Apply Facewash",
    desc: "Squeeze a small amount of Fransco 4-in-1 Facewash onto damp hands and lather gently.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Mist from Distance",
    desc: "Hold 20–30 cm from your face and mist evenly across your skin for light, full coverage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M5 8h14M5 12h14M5 16h6" />
        <circle cx="17" cy="16" r="3" />
        <path d="M17 13v-1M17 22v-3" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Pat Gently to Absorb",
    desc: "Lightly press fingertips or a cloth to help the mist sink in fully. Let it absorb completely.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
        <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "linear-gradient(160deg, #FAF2EF 0%, #FCFBF9 40%, #FAF2EF 100%)",
      }}
    >
      {/* Decorative radial overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 10% 50%, rgba(125,64,71,0.05) 0%, transparent 60%),
                            radial-gradient(ellipse at 90% 50%, rgba(245,230,224,0.4) 0%, transparent 60%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span 
            className="label-pill"
            style={{
              color: "#7D4047",
              borderColor: "rgba(125,64,71,0.25)",
              background: "rgba(125,64,71,0.07)"
            }}
          >
            Application Guide
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl" style={{ color: "#7D4047" }}>
            How to Use
          </h2>
          <p className="mt-4 font-medium" style={{ color: "#7D4047" }}>
            Four simple steps to a clear, balanced, and radiant complexion — morning and night.
          </p>
        </Reveal>

        {/* Single protected full image */}
        <Reveal delay={100} className="mt-14 max-w-5xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-white"
            onContextMenu={(event) => event.preventDefault()}
            style={{
              boxShadow: "0 20px 50px -15px rgba(125,64,71,0.12)",
            }}
          >
            <img
              src="/brand images/Application Guide.webp"
              alt="Fransco Application Guide — How to Use"
              draggable={false}
              loading="lazy"
              width={1600}
              height={900}
              className="protected-image block w-full h-auto object-cover pointer-events-none select-none transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
