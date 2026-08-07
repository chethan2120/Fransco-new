import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-28" style={{ background: "#FCFBF9" }}>
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12"
            style={{ background: "linear-gradient(135deg, #7D4047 0%, #5C2D33 60%, #3D1A1E 100%)" }}
          >
            {/* Decorative circles using palette */}
            <div
              className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #F2E0DB 0%, transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 size-80 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #FAF2EF 0%, transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute right-1/4 top-1/4 size-32 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #FCFBF9 0%, transparent 70%)" }}
            />

            {/* Soft top border line */}
            <div
              className="absolute left-1/2 top-0 h-0.5 w-32 -translate-x-1/2"
              style={{ background: "linear-gradient(90deg, transparent, #F2E0DB, transparent)" }}
            />

            <div className="relative">
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
                style={{ background: "rgba(255,255,255,0.12)", color: "#FAF4F2", border: "1px solid rgba(255,255,255,0.20)" }}
              >
                Stay in the Loop
              </span>

              <h2
                className="mt-5 font-display text-4xl font-semibold sm:text-5xl"
                style={{ color: "#FFFFFF" }}
              >
                Join The Fransco Community
              </h2>
              <p
                className="mx-auto mt-4 max-w-xl text-base"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Subscribe to receive skincare tips, exclusive offers, and early access to
                new product launches.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="h-12 rounded-full border-transparent px-5"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    color: "#1D1615",
                  }}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 rounded-full px-8 font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 0%, #FAF0EC 100%)",
                    color: "#7D4047",
                    boxShadow: "0 4px 16px rgba(255,255,255,0.15)",
                  }}
                >
                  {done ? "Subscribed!" : "Subscribe"}
                </Button>
              </form>

              {/* Trust line */}
              <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.60)" }}>
                No spam, ever. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}