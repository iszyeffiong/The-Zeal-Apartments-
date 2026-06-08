import { createFileRoute, Link } from "@tanstack/react-router";
import exteriorImg from "@/assets/exterior.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Rylme Apartments" },
      { name: "description", content: "The story, mission and vision behind Rylme Apartments - boutique short-let apartments in Uyo, Akwa Ibom State." },
      { property: "og:title", content: "About - Rylme Apartments" },
      { property: "og:description", content: "Our story and mission." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-page py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-primary">Our Story</p>
          <h1 className="mt-2 font-display text-5xl md:text-6xl leading-tight">A boutique stay, born in Uyo.</h1>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            Rylme Apartments began with a simple observation: short-term stays in Uyo too often felt like a compromise. We set out to build something different - a small, considered collection of apartments that feel like staying with friends who happen to have impeccable taste.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Every apartment in our collection is designed, furnished and operated in-house by our team in Akwa Ibom. That means we own the details - from the warmth of the lighting to the speed of the WiFi to how quickly we answer your call at 2am.
          </p>
        </div>
        <img src={heroImg} alt="Inside a Rylme apartment" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="container-page py-20 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-secondary-foreground/15 p-8">
            <p className="text-xs uppercase tracking-widest text-accent">Mission</p>
            <h2 className="mt-2 font-display text-3xl">Comfortable, secure and quietly luxurious.</h2>
            <p className="mt-4 text-secondary-foreground/80 leading-relaxed">
              To provide travelers in Uyo with apartments that feel calm, well-cared for, and reliably modern - at a fair price.
            </p>
          </div>
          <div className="rounded-2xl border border-secondary-foreground/15 p-8">
            <p className="text-xs uppercase tracking-widest text-accent">Vision</p>
            <h2 className="mt-2 font-display text-3xl">The most trusted short-let brand in Akwa Ibom.</h2>
            <p className="mt-4 text-secondary-foreground/80 leading-relaxed">
              To become the name travelers, families and corporates think of first when they think of staying well in Uyo.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <img src={exteriorImg} alt="Rylme building exterior" loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
        <div>
          <h2 className="font-display text-4xl">Come stay with us.</h2>
          <p className="mt-4 text-muted-foreground max-w-md">Reserve any of our apartments online, or reach out to plan a longer stay or special occasion.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/apartments" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">See apartments</Link>
            <Link to="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}