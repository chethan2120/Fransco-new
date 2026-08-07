import { Reveal } from "./Reveal";

const stats = [
  {
    value: "50,000+",
    label: "Happy Customers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "4.8 / 5",
    label: "Average Rating",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Dermatologist Tested",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    value: "0%",
    label: "Harmful Chemicals",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.9 4.9 14.2 14.2" />
      </svg>
    ),
  },
  {
    value: "French",
    label: "Science Backed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export function StatsStrip() {
  return (
    <section
      className="relative overflow-hidden border-y py-14"
      style={{
        background: "linear-gradient(135deg, #FAF2EF 0%, #FCFBF9 50%, #FAF2EF 100%)",
        borderColor: "rgba(125,64,71,0.15)",
      }}
    >
      {/* Decorative peach/red circles */}
      <div
        className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #F2E0DB 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 size-64 rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #7D4047 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="group flex flex-col items-center gap-3 text-center">
                {/* Icon ring */}
                <div
                  className="flex size-14 items-center justify-center rounded-2xl border shadow-sm transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(145deg, #FFFFFF, #FAF2EF)",
                    borderColor: "rgba(125,64,71,0.15)",
                    color: "#7D4047",
                  }}
                >
                  {s.icon}
                </div>
                <p className="font-display text-2xl font-bold" style={{ color: "#1D1615" }}>
                  {s.value}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em]" style={{ color: "#8A736D" }}>
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
