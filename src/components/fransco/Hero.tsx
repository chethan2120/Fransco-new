import { Reveal } from "./Reveal";

const heroSlides = [
  {
    src: "/brand images/hero-1.webp",
    alt: "Fransco skincare hero visual 1",
  },
  {
    src: "/brand images/hero-2.webp",
    alt: "Fransco skincare hero visual 2",
  },
  {
    src: "/brand images/hero-3.webp",
    alt: "Fransco skincare hero visual 3",
  },
  {
    src: "/brand images/hero-4.webp",
    alt: "Fransco skincare hero visual 4",
  },
];

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-background">
      <Reveal className="relative overflow-hidden w-full">
        <div 
          className="fransco-hero-carousel flex w-full"
          onContextMenu={(event) => event.preventDefault()}
        >
          {heroSlides.map((slide) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              draggable={false}
              width={1920}
              height={1080}
              className="protected-image w-full shrink-0 h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[calc(100vh-76px)] object-cover object-center lg:object-fill pointer-events-none select-none"
            />
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2.5">
          {heroSlides.map((slide, index) => (
            <span
              key={slide.src}
              className="fransco-hero-dot h-2.5 rounded-full bg-white/50 shadow-sm"
              style={{ animationDelay: `${index * 4}s` }}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
