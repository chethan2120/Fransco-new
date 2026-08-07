import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/fransco/Navbar";
import { Hero } from "@/components/fransco/Hero";
import { StatsStrip } from "@/components/fransco/StatsStrip";
import { BestSellers } from "@/components/fransco/BestSellers";
import { Ingredients } from "@/components/fransco/Ingredients";
import { HowItWorks } from "@/components/fransco/HowItWorks";
import { About } from "@/components/fransco/About";
import { Results } from "@/components/fransco/Results";
import { WhyChoose } from "@/components/fransco/WhyChoose";
import { Testimonials } from "@/components/fransco/Testimonials";
import { Newsletter } from "@/components/fransco/Newsletter";
import { Footer } from "@/components/fransco/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <BestSellers />
        <Ingredients />
        <HowItWorks />
        <About />
        <Results />
        <WhyChoose />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
