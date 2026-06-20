import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getApartment, apartments, formatNGN, type Apartment } from "@/lib/apartments";
import { Wifi, Zap, Tv, ChefHat, BedDouble, Wind, Sparkles, Car, Briefcase, Shield, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { ApartmentCard } from "@/components/ApartmentCard";
import { useRef } from "react";

// Map amenity strings to icons
function getAmenityIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes("wifi")) return Wifi;
  if (n.includes("power") || n.includes("generator")) return Zap;
  if (n.includes("tv")) return Tv;
  if (n.includes("kitchen") || n.includes("dining")) return ChefHat;
  if (n.includes("bed")) return BedDouble;
  if (n.includes("air condition") || n.includes("ac")) return Wind;
  if (n.includes("housekeeping") || n.includes("cleaning")) return Sparkles;
  if (n.includes("parking")) return Car;
  if (n.includes("work") || n.includes("office")) return Briefcase;
  if (n.includes("security") || n.includes("access")) return Shield;
  return Check;
}

export const Route = createFileRoute("/apartments/$id")({
  loader: ({ params }) => {
    const apt = getApartment(params.id);
    if (!apt) throw notFound();
    return { apt };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.apt.name} - The Zeal Apartments Uyo` },
          { name: "description", content: loaderData.apt.tagline },
          { property: "og:title", content: `${loaderData.apt.name} - The Zeal Apartments` },
          { property: "og:description", content: loaderData.apt.tagline },
          { property: "og:image", content: loaderData.apt.cover },
        ]
      : [],
  }),
  component: ApartmentDetail,
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-4xl">Apartment not found</h1>
      <Link to="/apartments" className="mt-4 inline-block text-primary underline">Back to apartments</Link>
    </div>
  ),
});

import { Wine, BellRing, DoorClosed, Type, Newspaper, Laptop, Bath, CupSoda, Coffee, DoorOpen, Key, Plane, Lock, Shirt, Phone, Snowflake } from "lucide-react";

const mockFacilities = [
  { name: "Air Conditioner", icon: Snowflake },
  { name: "Mini Bar", icon: Wine },
  { name: "Free WiFi", icon: Wifi },
  { name: "24 HR Room Service", icon: BellRing },
  { name: "Daily Housekeeping", icon: Sparkles },
  { name: "Fire Doors", icon: DoorClosed },
  { name: "Iron & Iron Board on Request", icon: Shirt },
  { name: "Newspaper on Request", icon: Newspaper },
  { name: "Working Station", icon: Laptop },
  { name: "Hair Dryer", icon: Wind },
  { name: "Bathtub & Shower", icon: Bath },
  { name: "Drinking Water Bottles", icon: CupSoda },
  { name: "Coffee & Tea Maker", icon: Coffee },
  { name: "Wardrobe", icon: DoorOpen },
  { name: "Key Access Control", icon: Key },
  { name: "Flat Screen TV", icon: Tv },
  { name: "Airport Transfers", icon: Plane },
  { name: "Safe", icon: Lock },
  { name: "Body Robe", icon: Shirt },
  { name: "Intercom System", icon: Phone },
];

function ApartmentDetail() {
  const { apt } = Route.useLoaderData() as { apt: Apartment };
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  // Suggested Apartments Slider: excluding current, taking 3
  const otherRooms = apartments.filter(a => a.id !== apt.id).slice(0, 3);

  return (
    <div className="container-page py-12 md:py-20">
      <div className="bg-card border border-border/50 shadow-xl shadow-black/5 rounded-[2rem] p-6 md:p-12 lg:p-16 overflow-hidden">
      {/* 1. Image Gallery (Top) */}
      <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8 text-center md:text-left">{apt.name}</h1>
      
      {/* 2. Apartment Description (Middle) */}
      <div className="max-w-5xl mx-auto md:mx-0 mb-20">
        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/90 mb-6">Apartment Description</h3>
        <p className="text-foreground/80 leading-relaxed text-[17px] mb-8">
          Our Deluxe Studio pairs warm terracotta walls with brass fixtures and crisp white linens. A queen bed, kitchenette and smart TV make it ideal for short business trips and weekend getaways.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="space-y-4 text-[15px] flex-1">
            <div className="flex items-center gap-3 text-foreground/80">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D9A05B]/20 text-[#D9A05B]">
                <Check className="w-4 h-4" />
              </span>
              Sleeps {apt.guests} Guests
            </div>
            <div className="flex items-center gap-3 text-foreground/80">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D9A05B]/20 text-[#D9A05B]">
                <Check className="w-4 h-4" />
              </span>
              {apt.beds} Configuration
            </div>
            <div className="flex items-center gap-3 text-foreground/80">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D9A05B]/20 text-[#D9A05B]">
                <Check className="w-4 h-4" />
              </span>
              {apt.size} of Open Plan Interior Spaces
            </div>
          </div>
          
          <div className="p-8 bg-secondary/30 rounded-xl border border-border/50 text-center min-w-[300px]">
             <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Rates from</p>
             <p className="font-display text-4xl mb-6">{formatNGN(apt.pricePerNight)}<span className="text-sm text-muted-foreground font-sans"> /night</span></p>
             <Link to="/book/$id" params={{ id: apt.id }} className="inline-block w-full py-4 px-8 bg-[#D9A05B] hover:bg-[#C88E4B] text-white text-sm font-bold tracking-widest uppercase transition-colors">
               Book Now
             </Link>
          </div>
        </div>
      </div>

      {/* 3. Amenities (Middle-Bottom) */}
      <div className="px-6 md:px-12 py-16 bg-[#f5ecd7] rounded-3xl mb-20">
        <h2 className="font-display text-2xl uppercase tracking-widest mb-10 text-[#1a2530]">Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {mockFacilities.map((fac, idx) => (
            <div key={idx} className="flex items-center gap-4 text-[#1a2530]">
              <fac.icon strokeWidth={1.5} className="w-8 h-8 flex-shrink-0" />
              <span className="text-sm font-medium">{fac.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Image Gallery (Below Facilities) */}
      <div className="mb-20">
        <h2 className="font-display text-2xl uppercase tracking-widest mb-10 text-[#1a2530]">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {apt.gallery.slice(0, 6).map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Suggested Apartments Slider (Bottom) */}
      <div className="mt-10 pt-10">
        <h2 className="font-display text-3xl md:text-4xl mb-12 text-center md:text-left text-foreground/90">Other Rooms & Suites</h2>
        
        <div className="relative group">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute -left-4 md:-left-12 top-[35%] -translate-y-1/2 p-2 text-[#1a2530] hover:scale-110 transition-transform z-10 hidden md:block"
          >
            <ChevronLeft strokeWidth={1} className="w-12 h-12" />
          </button>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth">
          {otherRooms.map(room => (
            <div key={room.id} className="w-[85vw] md:w-[calc(33.333%_-_16px)] shrink-0 snap-start">
              <Link to="/apartments/$id" params={{ id: room.id }} className="block group/card">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img 
                    src={room.cover} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" 
                  />
                </div>
                <h3 className="font-display text-[26px] text-[#1a2530] mb-3 leading-snug">{room.name}</h3>
                <p className="text-[15px] text-foreground/70 leading-relaxed mb-5 line-clamp-2">{room.description}</p>
                <span className="text-[15px] text-muted-foreground font-medium underline underline-offset-[6px] decoration-border group-hover/card:decoration-[#1a2530] group-hover/card:text-[#1a2530] transition-colors">
                  Read more &rarr;
                </span>
              </Link>
            </div>
          ))}
        </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')} 
            className="absolute -right-4 md:-right-6 top-[35%] -translate-y-1/2 p-2 text-[#1a2530] hover:scale-110 transition-transform z-10 hidden md:block"
          >
            <ChevronRight strokeWidth={1} className="w-12 h-12" />
          </button>
        </div>
      </div>
      
      </div> {/* End of Box */}
    </div>
  );
}