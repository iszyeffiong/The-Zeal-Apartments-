import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { galleryImages } from "@/lib/apartments";
import { X } from "lucide-react";

const categories = ["All", "Rooms", "Living Areas", "Kitchens", "Exterior", "Game Room", "Swimming Pool", "Bar", "Restaurant"] as const;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - The Zeal Apartments" },
      { name: "description", content: "A look inside The Zeal Apartments: rooms, living areas, kitchens and the building itself." },
      { property: "og:title", content: "Gallery - The Zeal Apartments" },
      { property: "og:description", content: "A look inside The Zeal Apartments in Uyo." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <div className="container-page py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-primary">Gallery</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">Inside The Zeal.</h1>
        <p className="mt-4 text-muted-foreground">Real photographs from our apartments and common areas.</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-4 py-2 text-sm transition ${filter === c ? "bg-primary text-primary-foreground" : "border border-border hover:bg-muted"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((g, i) => (
          <button key={i} onClick={() => setLightbox(g.src)} className="group block overflow-hidden rounded-2xl">
            <img src={g.src} alt={g.caption} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
            <p className="mt-2 text-left text-xs text-muted-foreground">{g.caption}</p>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white" aria-label="Close"><X className="h-6 w-6" /></button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain" />
        </div>
      )}
    </div>
  );
}