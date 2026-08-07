import { Reveal } from "./Reveal";
import aboutTexture from "@/assets/about-texture-protection.png";
import { Sparkles, Droplets, ShieldCheck, Feather, Leaf, Layers, CheckCircle2, ArrowRight } from "lucide-react";

export function About() {
  const ingredients = [
    {
      name: "Rice Water Brightening Complex",
      tagline: "Illuminates & Smooths",
      desc: "Rich in vitamins and antioxidants to restore natural radiance and gentle clarity to skin.",
      icon: Droplets,
    },
    {
      name: "Niacinamide",
      tagline: "Refines Tone & Texture",
      desc: "Vitamin B3 powerhouse that strengthens skin barrier and evens out skin tone.",
      icon: Sparkles,
    },
    {
      name: "Azelaic Acid",
      tagline: "Calms & Clarifies",
      desc: "Targeted botanical acid that calms redness and clarifies uneven skin tone.",
      icon: ShieldCheck,
    },
    {
      name: "Salicylic Acid",
      tagline: "Deep Pore Balance",
      desc: "Gentle BHA that purifies pores, removes impurities, and restores skin balance.",
      icon: Feather,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 lg:py-36 bg-[#FCFBF9]"
      style={{
        background: "linear-gradient(180deg, #FCFBF9 0%, #FAF2EF 40%, #FCFBF9 100%)",
      }}
    >
      {/* Decorative ambient gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FAF0EC]/60 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4.5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <Sparkles className="size-3.5" />
              The Fransco Philosophy
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.15]">
              Our Story &amp; Philosophy
            </h2>
            <div className="mt-4 mx-auto h-0.5 w-16 bg-primary/40 rounded-full" />
          </Reveal>
        </div>

        {/* SECTION 1: THE FRANSCO PHILOSOPHY (Visual Introduction & Opening Luxury Statement) */}
        <div className="mt-16 lg:mt-24 grid gap-12 lg:grid-cols-12 items-center">
          <Reveal className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-xl" />
              <img
                src={aboutTexture}
                alt="Fransco luxury skincare texture and formulation"
                loading="lazy"
                width={1080}
                height={1350}
                className="relative w-full rounded-[2rem] object-cover shadow-soft border border-primary/10 transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6 flex flex-col justify-center lg:pl-6">
            <div className="relative pl-6 border-l-2 border-primary/40 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80 block mb-3">
                01 &mdash; Opening Luxury Statement
              </span>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium italic text-primary leading-snug">
                &ldquo;True luxury isn&apos;t about excess.
                <br />
                It&apos;s about choosing fewer things—made with greater care.&rdquo;
              </p>
            </div>

            <p className="mt-8 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Welcome to the essence of Fransco. We believe that true skincare luxury lies in restraint, intentional formulation, and the quiet elevation of your daily skincare ritual.
            </p>
          </Reveal>
        </div>

        {/* SECTION 2: WHY FRANSCO */}
        <div className="mt-24 lg:mt-36">
          <Reveal>
            <div className="rounded-3xl border border-primary/15 bg-white/80 backdrop-blur-sm p-8 sm:p-12 lg:p-16 shadow-soft">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                  02 &mdash; Why Fransco
                </span>
                <h3 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  Thoughtfully Formulated, Effortlessly Refined
                </h3>

                <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Fransco was created with a simple philosophy: skincare should feel effortless, refined, and thoughtfully formulated. We believe every ingredient should have a purpose, every texture should feel exceptional, and every product should earn a place in your daily ritual.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="mt-10 grid gap-6 sm:grid-cols-3 pt-8 border-t border-primary/10">
                <div className="flex gap-3.5 items-start">
                  <div className="rounded-full bg-primary/10 p-2.5 text-primary shrink-0">
                    <Leaf className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-foreground text-sm">Purposeful Ingredients</h4>
                    <p className="text-xs text-muted-foreground mt-1">Every active ingredient selected with clinical intent and clarity.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="rounded-full bg-primary/10 p-2.5 text-primary shrink-0">
                    <Layers className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-foreground text-sm">Exceptional Textures</h4>
                    <p className="text-xs text-muted-foreground mt-1">Sensory elegance designed to integrate seamlessly into skin.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="rounded-full bg-primary/10 p-2.5 text-primary shrink-0">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-foreground text-sm">Earned Daily Ritual</h4>
                    <p className="text-xs text-muted-foreground mt-1">Essentials crafted to earn their spot in your everyday routine.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* SECTION 3: OUR FIRST ESSENTIAL */}
        <div className="mt-24 lg:mt-36">
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                03 &mdash; Our First Essential
              </span>
              <h3 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
                The Fransco 4-in-1 Facewash
              </h3>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Our journey begins with the Fransco 4-in-1 Facewash—a carefully balanced formula featuring Rice Water Brightening Complex, Niacinamide, Azelaic Acid, and Salicylic Acid. Designed to gently cleanse while helping support a clearer, brighter, and more balanced-looking complexion, it reflects our commitment to combining effective skincare science with a simple routine.
              </p>
            </Reveal>
          </div>

          {/* Key 4 Ingredients Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ingredients.map((ing, idx) => {
              const Icon = ing.icon;
              return (
                <Reveal key={ing.name} delay={150 + idx * 50}>
                  <div className="group h-full rounded-2xl border border-primary/15 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl bg-[#FAF0EC] text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <h4 className="mt-4 font-display text-lg font-semibold text-foreground">
                      {ing.name}
                    </h4>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary/80 mt-1">
                      {ing.tagline}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {ing.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: LESS, BUT BETTER */}
        <div className="mt-24 lg:mt-36">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7D4047] via-[#5C2B31] to-[#3B191E] p-8 sm:p-12 lg:p-16 text-white shadow-card">
              {/* Subtle background glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-white/5 blur-3xl" />

              <div className="relative z-10 max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  04 &mdash; Less, But Better
                </span>

                <h3 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl text-white leading-tight">
                  Essentials Created With Intention
                </h3>

                <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/90 font-light">
                  At Fransco, we don&apos;t believe in chasing trends or creating products for the sake of adding more. We believe in creating essentials—products you&apos;ll reach for every day because they work beautifully and feel timeless.
                </p>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/90 font-light">
                  Every formula is developed with intention. Every detail, from the ingredients to the packaging, is chosen to create an experience that feels quietly luxurious.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-white/15">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/90 backdrop-blur-sm">
                    <Sparkles className="size-3.5 text-amber-200" />
                    Intentional Essentials
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/90 backdrop-blur-sm">
                    <Feather className="size-3.5 text-amber-200" />
                    Quiet Luxury Packaging
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/90 backdrop-blur-sm">
                    <ShieldCheck className="size-3.5 text-amber-200" />
                    Timeless Skincare Science
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* SECTION 5: THE DAILY RITUAL */}
        <div className="mt-24 lg:mt-36">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center rounded-3xl border border-primary/20 bg-gradient-to-b from-[#FAF2EF] to-[#FCFBF9] p-8 sm:p-14 shadow-soft">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                05 &mdash; The Daily Ritual
              </span>

              <div className="mt-6 relative">
                <p className="relative font-display text-2xl sm:text-3xl lg:text-4xl font-medium italic text-primary leading-relaxed">
                  &ldquo;Because confidence isn&apos;t built in a single moment.
                  <br />
                  It&apos;s built in the rituals we return to every day.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* SECTION 6: FINAL BRAND STATEMENT */}
        <div className="mt-24 lg:mt-32 text-center">
          <Reveal>
            <span className="font-display text-xl sm:text-2xl font-medium text-primary tracking-wide uppercase">
              Welcome to Fransco.
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">
              &ldquo;Refined Skincare. Thoughtfully Crafted. Made for Everyday Confidence.&rdquo;
            </h3>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex justify-center">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white shadow-card transition-all duration-300 hover:bg-[#5C2B31] hover:shadow-lg"
              >
                Discover The Essentials
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
