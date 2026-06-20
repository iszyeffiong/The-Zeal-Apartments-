import { createFileRoute } from "@tanstack/react-router";
import { Wifi, Zap, Shield, Tv, ChefHat, Sparkles, Car, Plane, Shirt, Refrigerator, Snowflake, Coffee, Waves, Gamepad2 } from "lucide-react";

const amenities = [
  { icon: Wifi, name: "Fast Free WiFi", desc: "Fibre-backed connection across every apartment." },
  { icon: Zap, name: "24/7 Electricity", desc: "Mains plus silent generator backup - you'll never notice the switch." },
  { icon: Shield, name: "24/7 Security", desc: "On-site security and controlled entry around the clock." },
  { icon: Tv, name: "Smart TVs + Netflix", desc: "Streaming-ready in every living area." },
  { icon: Sparkles, name: "Daily Housekeeping", desc: "Linens, towels and tidying handled every day." },
  { icon: ChefHat, name: "Kitchen Facilities", desc: "From kitchenettes to fully equipped chef kitchens." },
  { icon: Refrigerator, name: "Refrigerator & Microwave", desc: "Stock up and cook on your own schedule." },
  { icon: Snowflake, name: "Air Conditioning", desc: "Whisper-quiet split units in every room." },
  { icon: Car, name: "Secure Parking", desc: "Gated parking for guests of all apartments." },
  { icon: Plane, name: "Airport Pickup", desc: "Optional pickup from Akwa Ibom Airport on request." },
  { icon: Shirt, name: "Laundry Service", desc: "Same-day laundry and dry cleaning available." },
  { icon: Coffee, name: "Welcome Provisions", desc: "Coffee, tea and fresh water waiting for you on arrival." },
  { icon: Waves, name: "Swimming Pool", desc: "A clean, relaxing outdoor pool for guests." },
  { icon: Gamepad2, name: "Indoor Game Room", desc: "A space equipped with games for entertainment and relaxation." },
];

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities - The Zeal Apartments" },
      { name: "description", content: "Everything included in your The Zeal stay - from 24/7 power and security to daily housekeeping and airport pickup." },
      { property: "og:title", content: "Amenities - The Zeal Apartments" },
      { property: "og:description", content: "What's included in your stay at The Zeal Apartments Uyo." },
    ],
  }),
  component: Amenities,
});

function Amenities() {
  return (
    <div className="container-page py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-primary">Amenities</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">Everything you need, already here.</h1>
        <p className="mt-4 text-muted-foreground">Each apartment is provisioned to feel like a quiet, well-run home - without the chores.</p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {amenities.map(({ icon: Icon, name, desc }) => (
          <div key={name} className="rounded-2xl border border-border bg-card p-6">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-secondary-foreground">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mt-5 font-display text-xl">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}