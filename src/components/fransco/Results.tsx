import { Reveal } from "./Reveal";

const results = [
  {
    week: "Week 1",
    image: "/clinical-result/instant-refresh.webp",
  },
  {
    week: "Week 2",
    image: "/clinical-result/visible glow.webp",
  },
  {
    week: "Week 4",
    image: "/clinical-result/lasting-result.webp",
  },
];

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
          <p className="mt-4" style={{ color: "#8A736D" }}>
            Based on a 4-week consumer study with verified Fransco users.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={r.week} delay={i * 120}>
              <div
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                onContextMenu={(event) => event.preventDefault()}
                style={{
                  boxShadow: "0 10px 30px -10px rgba(125,64,71,0.06), 0 4px 12px -4px rgba(46,46,46,0.03)",
                }}
              >
                <img
                  src={r.image}
                  alt={r.week}
                  draggable={false}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="protected-image block w-full h-auto object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-10 text-center text-xs" style={{ color: "rgba(122,110,102,0.7)" }}>
            *Based on self-assessment by 120 participants over a 4-week period. Individual results may vary.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
