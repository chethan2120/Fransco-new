import { Instagram, Facebook, Youtube } from "lucide-react";
import franscoLogo from "@/assets/fransco-logo.png";

const quickLinks = [
  { label: "Shop", id: "shop" },
  { label: "Our Story", id: "about" },
  { label: "Contact", id: "contact" },
];
const customerCare = [
  "Shipping Policy",
  "Returns",
  "Privacy Policy",
  "Terms & Conditions",
];
const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block rounded-xl bg-white/95 p-3 sm:p-4 shadow-sm">
              <img
                src={franscoLogo}
                alt="Fransco Skincare - Backed by French Science"
                width={160}
                height={70}
                className="w-[120px] sm:w-[145px] lg:w-[160px] h-auto object-contain"
              />
            </div>
            <h3 className="mt-6 font-display text-lg font-medium text-primary-foreground">
              About Company
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-footer-foreground/70">
              Fransco Skincare blends French science with luxurious ingredients
              to create gentle, effective essentials made to nourish, protect,
              and reveal naturally radiant skin.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-footer-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
              <a
                href="#"
                aria-label="Pinterest"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-footer-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                P
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium text-primary-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={`#${l.id}`}
                    className="text-footer-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium text-primary-foreground">
              Customer Care
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {customerCare.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-footer-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium text-primary-foreground">
              Get In Touch
            </h3>
            <p className="mt-4 text-sm text-footer-foreground/70">
              care@fransco.com
            </p>
            <p className="mt-2 text-sm text-footer-foreground/70">
              Paris, France
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-footer-foreground/60">
          <p>&copy; 2026 Fransco Skincare. All Rights Reserved.</p>
          <p className="mt-2">
            Designed and maintained by{" "}
            <a
              href="https://webnxt.co/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary-foreground transition-colors hover:text-primary"
            >
              WebNxt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
