import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Wifi, Zap, Shield, Tv, ChefHat, Sparkles, Star, ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import exteriorImg from "@/assets/exterior.jpg";
import { apartments } from "@/lib/apartments";
import { ApartmentCard } from "@/components/ApartmentCard";
import { SearchWidget } from "@/components/SearchWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rylme Apartments - Luxury Short-Let Apartments in Uyo" },
      { name: "description", content: "Boutique serviced and short-let apartments in Uyo, Akwa Ibom. Book a studio, one-bedroom or two-bedroom suite online." },
      { property: "og:title", content: "Rylme Apartments - Luxury Short-Let Apartments in Uyo" },
      { property: "og:description", content: "Boutique short-let apartments in Shelter Afrique Estate, Uyo, Akwa Ibom State." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Rylme Apartments" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="container-page pt-28 pb-40 md:pt-40 md:pb-56 text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur-sm">
            <MapPin className="h-3 w-3" /> Shelter Afrique Estate, Akwa Ibom
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl leading-[1.05]">
            A quiet kind of luxury, <em className="text-accent not-italic">in the heart of Uyo.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/80">
            Boutique short-let and serviced apartments designed for travelers who notice the details - warm light, full kitchens, and round-the-clock care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/apartments" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Book Your Stay <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="container-page relative -mt-24 md:-mt-20 pb-4">
          <SearchWidget />
        </div>
      </section>

      {/* Featured */}
      <section className="container-page py-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">The Apartments</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Three ways to stay.</h2>
          </div>
          <Link to="/apartments" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {apartments.map((a) => <ApartmentCard key={a.id} a={a} />)}
        </div>
      </section>

      {/* Why */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-page py-24 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">Why Rylme</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Built for the way you actually travel.</h2>
            <p className="mt-4 text-secondary-foreground/75 max-w-md">
              Every apartment is designed and operated by our team in Uyo - no franchises, no surprises. Just quiet rooms, fast internet, and someone to call when you need anything at all.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Zap, label: "24/7 Power" },
              { icon: Wifi, label: "Fast WiFi" },
              { icon: Shield, label: "Security" },
              { icon: Tv, label: "Smart TVs + Netflix" },
              { icon: ChefHat, label: "Full Kitchen" },
              { icon: Sparkles, label: "Daily Housekeeping" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-secondary-foreground/15 p-5">
                <Icon className="h-6 w-6 text-accent" />
                <p className="mt-4 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-page py-24">
        <p className="text-xs uppercase tracking-widest text-primary text-center">Guest Stories</p>
        <h2 className="mt-2 text-center font-display text-4xl md:text-5xl">Loved by travelers across Nigeria.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { name: "Adaeze O.", role: "Business traveler · Lagos", quote: "Spotless, quiet, and the WiFi never dropped during my conference week. The kitchen made it feel like home." },
            { name: "Tunde A.", role: "Family stay · Abuja", quote: "The Two Bedroom is gorgeous. Our kids had space to play and the housekeeping was thoughtful without ever being intrusive." },
            { name: "Ifeoma E.", role: "Wedding guest · Port Harcourt", quote: "Walking distance from the venue and the most welcoming hosts. I'm booking Rylme every time I'm in Uyo." },
          ].map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{r.quote}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <p className="font-medium">{r.name}</p>
                <p className="text-muted-foreground">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="container-page py-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Inside Rylme</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">A few favorite corners.</h2>
          </div>
          <Link to="/gallery" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            Full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2 md:h-[520px]">
          <img src={heroImg} alt="" loading="lazy" className="md:row-span-2 md:col-span-2 h-full w-full object-cover rounded-2xl" />
          <img src={kitchenImg} alt="" loading="lazy" className="h-full w-full object-cover rounded-2xl" />
          <img src={exteriorImg} alt="" loading="lazy" className="h-full w-full object-cover rounded-2xl" />
          <img src={apartments[2].cover} alt="" loading="lazy" className="md:col-span-2 h-full w-full object-cover rounded-2xl" />
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 grid gap-8 md:grid-cols-[2fr_1fr] items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Stay your way.</h2>
            <p className="mt-3 text-primary-foreground/85 max-w-lg">
              Whether it's a single night or a full month, our team is on hand to make your stay effortless. Reach out anytime.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-background/90">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
