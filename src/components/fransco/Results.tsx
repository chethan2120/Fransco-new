import { Reveal } from "./Reveal";
import realResults from "@/assets/real-results.jpg";

export function Results() {
  return (
    <section
      id="results"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#FCFBF9" }}
    >
      {/* Background palette texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 15%, rgba(245,230,224,0.6) 0%, transparent 45%),
                            radial-gradient(circle at 15% 85%, #F5EAE6 0%, transparent 45%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label-pill">Clinical Results</span>
          <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl" style={{ color: "#1D1615" }}>
            Real Results, Real Skin
          </h2>
        </Reveal>

        {/* Single responsive uploaded image */}
        <Reveal delay={100} className="mt-10 max-w-6xl mx-auto">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-white"
            onContextMenu={(event) => event.preventDefault()}
            style={{
              boxShadow: "0 15px 45px -15px rgba(125,64,71,0.1)",
            }}
          >
            <img
              src={realResults}
              alt="Fransco 4-in-1 Facewash Real Results, Real Skin — Clinical Study"
              draggable={false}
              loading="lazy"
              width={1600}
              height={1000}
              className="protected-image block w-full h-auto object-contain pointer-events-none select-none"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
