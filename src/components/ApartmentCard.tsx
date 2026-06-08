import { Link } from "@tanstack/react-router";
import { Users, BedDouble, Maximize2 } from "lucide-react";
import { formatNGN, type Apartment } from "@/lib/apartments";

export function ApartmentCard({ a }: { a: Apartment }) {
  return (
    <Link
      to="/apartments/$id"
      params={{ id: a.id }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={a.cover} alt={a.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          From {formatNGN(a.pricePerNight)}<span className="text-muted-foreground"> / night</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl">{a.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{a.tagline}</p>
        <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> Up to {a.guests}</span>
          <span className="inline-flex items-center gap-1.5"><BedDouble className="h-3.5 w-3.5" /> {a.beds}</span>
          <span className="inline-flex items-center gap-1.5"><Maximize2 className="h-3.5 w-3.5" /> {a.size}</span>
        </div>
      </div>
    </Link>
  );
}