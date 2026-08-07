import { type FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
  User,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import facewashProduct from "@/assets/fransco-4in1-facewash.png";
import brighteningMist from "@/assets/shop-brightening.png";
import recoveryMist from "@/assets/shop-recovery.png";
import sheerscreenMist from "@/assets/shop-sheerscreen.png";
import franscoLogo from "@/assets/fransco-logo.png";

const links = [
  { label: "Home", id: "home" },
  { label: "Shop", id: "shop" },
  { label: "Ingredients", id: "ingredients" },
  { label: "Our Story", id: "about" },
  { label: "Contact", id: "contact" },
];

const searchTargets = [
  { terms: ["home", "fransco"], id: "home" },
  {
    terms: [
      "shop",
      "product",
      "products",
      "facewash",
      "4-in-1",
      "cleanser",
      "spf",
      "sunscreen",
      "brightening",
      "recovery",
    ],
    id: "shop",
  },
  { terms: ["ingredient", "ingredients", "why", "science"], id: "ingredients" },
  {
    terms: ["about", "our story", "story", "philosophy", "texture", "protection", "free from", "ideal"],
    id: "about",
  },
  { terms: ["contact", "email", "care"], id: "contact" },
];

const cartItems = [
  {
    img: facewashProduct,
    name: "Fransco 4-in-1 Facewash",
    price: "₹999",
    quantity: 1,
  },
  {
    img: brighteningMist,
    name: "Fransco Brightening Mist",
    price: "₹1199",
    quantity: 1,
  },
  {
    img: recoveryMist,
    name: "Fransco Recovery Mist",
    price: "₹1499",
    quantity: 1,
  },
  {
    img: sheerscreenMist,
    name: "Fransco Sheerscreen Mist",
    price: "₹899",
    quantity: 1,
  },
];

const cartOrderHref = `mailto:care@fransco.com?subject=${encodeURIComponent(
  "Fransco cart order inquiry",
)}&body=${encodeURIComponent(
  `Hi Fransco,\n\nI want to order:\n${cartItems
    .map((item) => `- ${item.quantity} x ${item.name} (${item.price})`)
    .join("\n")}\n\nPlease share payment and delivery details.`,
)}`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState("");

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSectionLink = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      setSearchOpen(true);
      return;
    }

    const match = searchTargets.find((target) =>
      target.terms.some(
        (term) => normalized.includes(term) || term.includes(normalized),
      ),
    );

    scrollToSection(match?.id ?? "shop");
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:py-3 lg:px-8">
        <a href="#home" className="flex items-center">
          <img
            src={franscoLogo}
            alt="Fransco Skincare - Backed by French Science"
            width={170}
            height={74}
            className="w-[125px] sm:w-[150px] lg:w-[170px] h-auto object-contain mix-blend-multiply"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={`#${link.id}`}
                className="relative text-sm font-medium text-foreground/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <form
            onSubmit={handleSearch}
            className={`items-center gap-2 ${searchOpen ? "flex" : "hidden sm:flex"}`}
          >
            {searchOpen && (
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoFocus
                aria-label="Search products"
                placeholder="Search"
                className="h-9 w-32 rounded-full border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-primary sm:w-40"
              />
            )}
            <button
              aria-label="Search"
              type={searchOpen ? "submit" : "button"}
              className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              onClick={() => {
                if (!searchOpen) {
                  setSearchOpen(true);
                }
              }}
            >
              <Search className="size-5" />
            </button>
          </form>
          {!searchOpen && (
            <button
              aria-label="Search"
              type="button"
              className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-secondary hover:text-primary sm:hidden"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-5" />
            </button>
          )}
          <button
            aria-label="Cart"
            type="button"
            className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="size-5" />
          </button>
          <Button
            type="button"
            className="hidden rounded-full px-6 sm:inline-flex"
            onClick={() => handleSectionLink("shop")}
          >
            Shop Now
          </Button>
          <button
            aria-label="Menu"
            type="button"
            className="rounded-full p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border/60 bg-background px-5 pb-6 pt-2 lg:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={`#${link.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleSectionLink(link.id);
                }}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <Button
            type="button"
            className="mt-2 rounded-full"
            onClick={() => handleSectionLink("shop")}
          >
            Shop Now
          </Button>
        </ul>
      )}

      <Sheet open={profileOpen} onOpenChange={setProfileOpen}>
        <SheetContent
          className="w-full overflow-y-auto sm:max-w-xl"
          side="right"
        >
          <SheetHeader>
            <SheetTitle className="font-display text-3xl">Profile</SheetTitle>
            <SheetDescription>
              Update your delivery and account details.
            </SheetDescription>
          </SheetHeader>

          <div className="mx-auto mt-6 flex size-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-semibold text-primary">
            F
          </div>

          <form className="mt-6 grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" defaultValue="Fransco" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" defaultValue="Customer" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  defaultValue="customer@example.com"
                  className="pr-10"
                />
                <Check className="absolute right-3 top-1/2 size-5 -translate-y-1/2 rounded-sm bg-emerald-500 p-0.5 text-white" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue="Enter delivery address" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="contact-number">Contact Number</Label>
              <Input id="contact-number" inputMode="tel" defaultValue="+91 " />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <select
                  id="city"
                  defaultValue="Mumbai"
                  className="h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-1 focus:ring-ring"
                >
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bengaluru</option>
                  <option>Pune</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">State</Label>
                <select
                  id="state"
                  defaultValue="Maharashtra"
                  className="h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-1 focus:ring-ring"
                >
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Karnataka</option>
                  <option>Gujarat</option>
                </select>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  defaultValue="franscoskincare"
                  className="pr-10"
                />
                <Check className="absolute right-3 top-1/2 size-5 -translate-y-1/2 rounded-sm bg-emerald-500 p-0.5 text-white" />
              </div>
            </div>

            <div className="mt-2 flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1 rounded-full border-primary/30 text-primary"
                onClick={() => setProfileOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="flex-1 rounded-full"
                onClick={() => setProfileOpen(false)}
              >
                Save
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>

      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent
          className="w-full overflow-y-auto sm:max-w-2xl"
          side="right"
        >
          <SheetHeader>
            <SheetTitle className="font-display text-3xl">
              Shopping Cart
            </SheetTitle>
            <SheetDescription>
              Review selected Fransco products.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 flex items-center gap-3">
            <div className="relative flex-1">
              <Input
                placeholder="Search Product..."
                className="rounded-full pr-10"
              />
              <Search className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-[72px_1fr] gap-4 rounded-2xl border border-border/70 bg-background p-3 shadow-sm sm:grid-cols-[76px_1fr_auto_auto_auto]"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  width={120}
                  height={90}
                  className="h-16 w-[72px] rounded-xl object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Premium skincare essential for daily ritual.
                  </p>
                </div>
                <div className="col-span-2 flex items-center gap-2 sm:col-span-1">
                  <button
                    type="button"
                    className="flex size-6 items-center justify-center rounded bg-primary/10 text-primary"
                  >
                    <Minus className="size-3" />
                  </button>
                  <span className="w-5 text-center text-sm font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    className="flex size-6 items-center justify-center rounded bg-primary/10 text-primary"
                  >
                    <Plus className="size-3" />
                  </button>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {item.price}
                </p>
                <button
                  aria-label={`Remove ${item.name}`}
                  type="button"
                  className="flex size-8 items-center justify-center rounded-full bg-red-50 text-red-500 transition-colors hover:bg-red-500 hover:text-white"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="size-5 rounded bg-emerald-100 p-1 text-emerald-700" />
            Agree with{" "}
            <span className="font-semibold text-primary">
              Our Shipping Policy
            </span>
          </div>

          <Button asChild size="lg" className="mt-6 w-full rounded-full">
            <a href={cartOrderHref}>
              Order Now
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </SheetContent>
      </Sheet>
    </header>
  );
}
