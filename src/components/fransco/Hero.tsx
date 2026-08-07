import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const heroSlides = [
  {
    src: "/brand images/hero-1.webp",
    alt: "Fransco 4-in-1 Facewash — Our Best Selling Facewash",
    mobilePosition: "object-[28%_center] md:object-[32%_center] lg:object-center",
  },
  {
    src: "/brand images/hero-2.webp",
    alt: "Fransco 4-in-1 Facewash — Rice Water Brightening Complex",
    mobilePosition: "object-[25%_center] md:object-[30%_center] lg:object-center",
  },
  {
    src: "/brand images/hero-3.webp",
    alt: "Fransco 4-in-1 Facewash — Niacinamide for Even Skin Tone",
    mobilePosition: "object-[25%_center] md:object-[30%_center] lg:object-center",
  },
  {
    src: "/brand images/hero-4.webp",
    alt: "Fransco 4-in-1 Facewash — Azelaic Acid for Spot Reduction",
    mobilePosition: "object-[24%_center] md:object-[28%_center] lg:object-center",
  },
  {
    src: "/brand images/hero-5.webp",
    alt: "Fransco 4-in-1 Facewash — Salicylic Acid for Acne Control",
    mobilePosition: "object-[25%_center] md:object-[30%_center] lg:object-center",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Infinite loop auto-play (5.5 seconds per slide)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-background">
      <Reveal className="relative overflow-hidden w-full">
        <div
          className="group relative w-full min-h-[clamp(420px,70vh,760px)] h-[clamp(420px,70vh,800px)] md:h-[62vh] lg:h-[clamp(480px,75vh,820px)] select-none overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onContextMenu={(event) => event.preventDefault()}
        >
          {/* Stacked 5 Hero Banners: responsive object-cover with per-slide focal positioning across mobile, tablet, laptop & desktop */}
          {heroSlides.map((slide, index) => {
            const isActive = index === current;
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  loading={index === 0 ? "eager" : "lazy"}
                  // @ts-expect-error - fetchpriority is standard HTML5 attribute
                  fetchpriority={index === 0 ? "high" : "auto"}
                  width={1920}
                  height={1080}
                  className={`protected-image block w-full h-full object-cover ${slide.mobilePosition} lg:object-fill pointer-events-none select-none transition-transform duration-[6000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
            );
          })}

          {/* Previous Slide Button */}
          <button
            aria-label="Previous Slide"
            type="button"
            onClick={prevSlide}
            className="absolute left-2.5 sm:left-6 top-1/2 z-20 flex size-9 sm:size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/75 text-primary backdrop-blur-md shadow-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-95"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>

          {/* Next Slide Button */}
          <button
            aria-label="Next Slide"
            type="button"
            onClick={nextSlide}
            className="absolute right-2.5 sm:right-6 top-1/2 z-20 flex size-9 sm:size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/75 text-primary backdrop-blur-md shadow-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-95"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>

          {/* 5 Navigation Dots inside the hero near bottom */}
          <div className="absolute bottom-4 sm:bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:gap-3 rounded-full border border-white/30 bg-black/20 px-3.5 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md shadow-lg">
            {heroSlides.map((_, index) => {
              const isActive = index === current;
              return (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`relative h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
                    isActive
                      ? "w-7 sm:w-10 bg-white shadow-md"
                      : "w-2 sm:w-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
