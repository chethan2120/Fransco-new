import { useState } from "react";
import {
  Check,
  Eye,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Reveal } from "./Reveal";
import facewashProduct from "@/assets/fransco-4in1-facewash.png";

const product = {
  img: facewashProduct,
  name: "Fransco 4-in-1 Facewash",
  category: "4-in-1 Facewash",
  tag: "Best Seller",
  desc: "A carefully balanced formula featuring Rice Water Brightening Complex, Niacinamide, Azelaic Acid, and Salicylic Acid designed to gently cleanse while supporting a clearer, brighter complexion.",
  price: "₹999",
  mrp: "₹1,199",
  finish: "Gentle Cleanser",
  size: "60 ml",
  detail:
    "A gentle 4-in-1 facewash formula with Rice Water, Niacinamide, Azelaic Acid, and Salicylic Acid for a clearer, brighter, and balanced-looking complexion.",
  benefits: ["Rice Water", "Niacinamide", "Azelaic Acid", "Salicylic Acid"],
};

type Product = typeof product;

const orderHref = (p: Product, quantity: number) =>
  `mailto:care@fransco.com?subject=${encodeURIComponent(`Order inquiry: ${p.name}`)}&body=${encodeURIComponent(
    `Hi Fransco,\n\nI want to buy ${quantity} x ${p.name} (${p.price}). Please share availability and payment details.`,
  )}`;

export function BestSellers() {
  const [detailOpen, setDetailOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <section
      id="shop"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#FCFBF9" }}
    >
      {/* Palette background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, #F5EAE6 0%, transparent 50%),
                            radial-gradient(circle at 70% 20%, rgba(245,230,224,0.6) 0%, transparent 50%)`,
        }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label-pill">Our Signature Product</span>
          <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl" style={{ color: "#1D1615" }}>
            Best Seller
          </h2>
          <p className="mt-4" style={{ color: "#8A736D" }}>
            One formula. Thousands of glowing results.
          </p>
        </Reveal>

        {/* Single large product card */}
        <Reveal delay={100} className="mt-14">
          <article
            className="relative mx-auto overflow-hidden rounded-[2.5rem]"
            style={{
              background: "linear-gradient(145deg, #FFFFFF 0%, #FCF9F7 100%)",
              border: "1px solid rgba(125,64,71,0.12)",
              boxShadow: "0 30px 80px -20px rgba(125,64,71,0.12), 0 4px 16px -4px rgba(46,46,46,0.05)",
            }}>

            <div className="grid lg:grid-cols-2">
              {/* Image side */}
              <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
                {/* Best Seller badge */}
                <div className="absolute left-6 top-6 z-10">
                  <span
                    className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm"
                    style={{ background: "linear-gradient(135deg, #7D4047 0%, #5C2D33 100%)", color: "#FFFFFF" }}>
                    {product.tag}
                  </span>
                </div>

                {/* Wishlist button */}
                <button
                  aria-label="Add to wishlist"
                  type="button"
                  onClick={() => setWishlisted((v) => !v)}
                  className="absolute right-6 top-6 z-10 flex size-10 items-center justify-center rounded-full border backdrop-blur-md shadow-sm transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(125,64,71,0.15)", color: "#7D4047" }}
                >
                  <Heart className={`size-4 transition-all ${wishlisted ? "fill-current" : ""}`} />
                </button>

                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  width={1536}
                  height={1024}
                  className="h-full w-full object-cover object-[73%_50%] transition-transform duration-700 hover:scale-[1.03]"
                  style={{ minHeight: "520px" }}
                />
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center p-8 lg:p-12" style={{ background: "linear-gradient(145deg, #FFFFFF 0%, #FCF9F7 100%)" }}>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#B08B81" }}>
                  {product.category}
                </span>
                <h3 className="mt-3 font-display text-3xl font-semibold lg:text-4xl" style={{ color: "#1D1615" }}>
                  {product.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed lg:text-lg" style={{ color: "#8A736D" }}>
                  {product.desc}
                </p>

                {/* Stars */}
                <div className="mt-5 flex items-center gap-2">
                  <div className="flex text-amber-400" style={{ color: "#D4AF37" }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">4.8</span>
                  <span className="text-sm text-muted-foreground">(1,284 reviews)</span>
                </div>

                {/* Benefits pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.benefits.map((b) => (
                    <span
                      key={b}
                      className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                      style={{ background: "rgba(125,64,71,0.07)", border: "1px solid rgba(125,64,71,0.15)", color: "#7D4047" }}>
                      <Check className="size-3" />
                      {b}
                    </span>
                  ))}
                </div>

                {/* Size & Finish */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl p-4" style={{ background: "rgba(245,230,224,0.25)", border: "1px solid rgba(125,64,71,0.08)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#B08B81" }}>Size</p>
                    <p className="mt-1 font-semibold" style={{ color: "#1D1615" }}>{product.size}</p>
                  </div>
                  <div className="rounded-2xl p-4" style={{ background: "rgba(245,230,224,0.25)", border: "1px solid rgba(125,64,71,0.08)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#B08B81" }}>Finish</p>
                    <p className="mt-1 font-semibold" style={{ color: "#1D1615" }}>{product.finish}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mt-7 flex items-end gap-3">
                  <p className="font-display text-4xl font-bold" style={{ color: "#7D4047" }}>{product.price}</p>
                  <div className="mb-1">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                      -17%
                    </span>
                    <p className="mt-0.5 text-xs text-muted-foreground line-through">MRP {product.mrp}</p>
                  </div>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-emerald-700">
                  <Check className="size-3.5" />
                  In stock · Inclusive of all taxes
                </p>

                {/* CTA */}
                <div className="mt-8 flex gap-3">
                  <Button
                    type="button"
                    size="lg"
                    className="flex-1 rounded-full font-semibold transition-all duration-300 hover:opacity-90 animate-pulse"
                    style={{ background: "linear-gradient(135deg, #7D4047 0%, #5C2D33 100%)", color: "#FFFFFF", boxShadow: "0 6px 20px -4px rgba(125,64,71,0.45)" }}
                    onClick={() => setBuyOpen(true)}
                  >
                    <ShoppingBag className="size-4" />
                    Buy Now
                  </Button>
                  <button
                    aria-label="View product details"
                    type="button"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.9)", borderColor: "rgba(125,64,71,0.15)", color: "#7D4047" }}
                    onClick={() => setDetailOpen(true)}
                  >
                    <Eye className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      {/* Detail Dialog */}
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto rounded-[1.75rem] border-border/60 p-0">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
            <div className="relative overflow-hidden min-h-[380px]">
              <img
                src={product.img}
                alt={product.name}
                width={1536}
                height={1024}
                className="h-full w-full object-cover object-[73%_50%]"
              />
            </div>
            <div className="p-6 lg:p-8">
              <DialogHeader>
                <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  New Arrival
                </span>
                <DialogTitle className="font-display text-4xl font-semibold leading-tight text-foreground">
                  {product.name}
                </DialogTitle>
                <DialogDescription className="text-base font-medium text-primary">
                  {product.category}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 flex items-center gap-2 text-sm">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.8</span>
                <span className="text-muted-foreground">(1,284 verified reviews)</span>
              </div>

              <div className="my-6 border-t border-border" />

              <div className="flex flex-wrap items-end gap-3">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  -17%
                </span>
                <p className="text-4xl font-bold text-primary">{product.price}</p>
                <p className="text-sm text-muted-foreground">
                  M.R.P.{" "}
                  <span className="line-through">{product.mrp}</span>
                </p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Inclusive of all taxes</p>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <Check className="size-4" />
                In stock
              </p>

              <div className="my-6 border-t border-border" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Size</p>
                  <p className="mt-2 font-semibold text-foreground">{product.size}</p>
                </div>
                <div className="rounded-2xl border border-border/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Finish</p>
                  <p className="mt-2 font-semibold text-foreground">{product.finish}</p>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-foreground">{product.detail}</p>

              <div className="mt-8 grid grid-cols-[auto_1fr_auto] gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full px-5"
                  onClick={() => { setDetailOpen(false); setBuyOpen(true); }}
                >
                  <ShoppingBag className="size-4" />
                  Buy Now
                </Button>
                <Button
                  type="button"
                  className="rounded-full"
                  onClick={() => { setDetailOpen(false); setBuyOpen(true); }}
                >
                  Order Now
                </Button>
                <button
                  aria-label="Add to wishlist"
                  type="button"
                  onClick={() => setWishlisted((v) => !v)}
                  className="flex size-10 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Heart className={`size-4 ${wishlisted ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Buy Sheet */}
      <Sheet open={buyOpen} onOpenChange={setBuyOpen}>
        <SheetContent className="flex w-full flex-col overflow-y-auto sm:max-w-md" side="right">
          <SheetHeader>
            <SheetTitle className="font-display text-3xl">Buy Now</SheetTitle>
            <SheetDescription>Confirm your product and quantity.</SheetDescription>
          </SheetHeader>

          <div className="mt-6 flex gap-4 rounded-2xl border border-border/70 p-4">
            <img
              src={product.img}
              alt={product.name}
              width={180}
              height={140}
              className="h-24 w-28 rounded-xl object-cover"
            />
            <div>
              <p className="font-display text-xl font-medium text-foreground">{product.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
              <p className="mt-3 text-lg font-semibold text-primary">{product.price}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border/70 p-5">
            <p className="text-sm font-semibold text-foreground">Quantity</p>
            <div className="mt-4 flex w-fit items-center rounded-full border border-border">
              <button
                aria-label="Decrease quantity"
                type="button"
                className="flex size-10 items-center justify-center text-foreground disabled:opacity-40"
                disabled={quantity === 1}
                onClick={() => setQuantity((v) => Math.max(1, v - 1))}
              >
                <Minus className="size-4" />
              </button>
              <span className="w-10 text-center font-semibold">{quantity}</span>
              <button
                aria-label="Increase quantity"
                type="button"
                className="flex size-10 items-center justify-center text-foreground"
                onClick={() => setQuantity((v) => v + 1)}
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 rounded-2xl border border-border/70 p-5 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Product</span>
              <span className="font-medium text-foreground">{product.price}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Availability</span>
              <span className="font-medium text-emerald-700">In stock</span>
            </div>
            <div className="border-t border-border pt-3">
              <p className="font-medium text-foreground">Order through email inquiry</p>
              <p className="mt-1 text-muted-foreground">
                Confirm payment and delivery details directly.
              </p>
            </div>
          </div>

          <Button asChild size="lg" className="mt-auto rounded-full">
            <a href={orderHref(product, quantity)}>
              <ShoppingBag className="size-4" />
              Send Order Inquiry
            </a>
          </Button>
        </SheetContent>
      </Sheet>
    </section>
  );
}
