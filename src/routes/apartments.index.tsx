import { createFileRoute } from "@tanstack/react-router";
import { apartments } from "@/lib/apartments";
import { ApartmentCard } from "@/components/ApartmentCard";
import { SearchWidget } from "@/components/SearchWidget";

export const Route = createFileRoute("/apartments/")({
  head: () => ({
    meta: [
      { title: "Apartments - Rylme Apartments Uyo" },
      { name: "description", content: "Browse Rylme's collection of studio, one-bedroom and two-bedroom serviced apartments in Uyo." },
      { property: "og:title", content: "Apartments - Rylme Apartments Uyo" },
      { property: "og:description", content: "Browse Rylme's collection of serviced apartments in Uyo." },
    ],
  }),
  component: Apartments,
});

function Apartments() {
  return (
    <div className="container-page py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-primary">Stay With Us</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">Our apartments.</h1>
        <p className="mt-4 text-muted-foreground">
          Three distinct floor plans, all hand-finished with warm textures, brass accents and modern essentials. Pick the one that fits how you travel.
        </p>
      </div>
      <div className="mt-10">
        <SearchWidget />
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {apartments.map((a) => <ApartmentCard key={a.id} a={a} />)}
      </div>
    </div>
  );
}