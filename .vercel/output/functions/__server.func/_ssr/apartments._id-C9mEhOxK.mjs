import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as Route, c as apartments, f as formatNGN } from "./router-D33M5I3w.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { q as Check, f as Snowflake, v as Wine, W as Wifi, w as BellRing, e as Sparkles, D as DoorClosed, i as Shirt, N as Newspaper, L as Laptop, x as Wind, y as Bath, z as CupSoda, j as Coffee, E as DoorOpen, K as Key, T as Tv, h as Plane, J as Lock, P as Phone, s as ChevronLeft, t as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-BzYY8oOn.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const mockFacilities = [{
  name: "Air Conditioner",
  icon: Snowflake
}, {
  name: "Mini Bar",
  icon: Wine
}, {
  name: "Free WiFi",
  icon: Wifi
}, {
  name: "24 HR Room Service",
  icon: BellRing
}, {
  name: "Daily Housekeeping",
  icon: Sparkles
}, {
  name: "Fire Doors",
  icon: DoorClosed
}, {
  name: "Iron & Iron Board on Request",
  icon: Shirt
}, {
  name: "Newspaper on Request",
  icon: Newspaper
}, {
  name: "Working Station",
  icon: Laptop
}, {
  name: "Hair Dryer",
  icon: Wind
}, {
  name: "Bathtub & Shower",
  icon: Bath
}, {
  name: "Drinking Water Bottles",
  icon: CupSoda
}, {
  name: "Coffee & Tea Maker",
  icon: Coffee
}, {
  name: "Wardrobe",
  icon: DoorOpen
}, {
  name: "Key Access Control",
  icon: Key
}, {
  name: "Flat Screen TV",
  icon: Tv
}, {
  name: "Airport Transfers",
  icon: Plane
}, {
  name: "Safe",
  icon: Lock
}, {
  name: "Body Robe",
  icon: Shirt
}, {
  name: "Intercom System",
  icon: Phone
}];
function ApartmentDetail() {
  const {
    apt
  } = Route.useLoaderData();
  const scrollRef = reactExports.useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };
  const otherRooms = apartments.filter((a) => a.id !== apt.id).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/50 shadow-xl shadow-black/5 rounded-[2rem] p-6 md:p-12 lg:p-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl text-foreground mb-8 text-center md:text-left", children: apt.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto md:mx-0 mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-widest text-foreground/90 mb-6", children: "Apartment Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 leading-relaxed text-[17px] mb-8", children: "Our Deluxe Studio pairs warm terracotta walls with brass fixtures and crisp white linens. A queen bed, kitchenette and smart TV make it ideal for short business trips and weekend getaways." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8 md:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-[15px] flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center justify-center w-6 h-6 rounded-full bg-[#D9A05B]/20 text-[#D9A05B]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) }),
              "Sleeps ",
              apt.guests,
              " Guests"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center justify-center w-6 h-6 rounded-full bg-[#D9A05B]/20 text-[#D9A05B]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) }),
              apt.beds,
              " Configuration"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center justify-center w-6 h-6 rounded-full bg-[#D9A05B]/20 text-[#D9A05B]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) }),
              apt.size,
              " of Open Plan Interior Spaces"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-secondary/30 rounded-xl border border-border/50 text-center min-w-[300px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2", children: "Rates from" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-4xl mb-6", children: [
              formatNGN(apt.pricePerNight),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-sans", children: " /night" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book/$id", params: {
              id: apt.id
            }, className: "inline-block w-full py-4 px-8 bg-[#D9A05B] hover:bg-[#C88E4B] text-white text-sm font-bold tracking-widest uppercase transition-colors", children: "Book Now" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-12 py-16 bg-[#f5ecd7] rounded-3xl mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl uppercase tracking-widest mb-10 text-[#1a2530]", children: "Facilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6", children: mockFacilities.map((fac, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-[#1a2530]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(fac.icon, { strokeWidth: 1.5, className: "w-8 h-8 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: fac.name })
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl uppercase tracking-widest mb-10 text-[#1a2530]", children: "Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: apt.gallery.slice(0, 6).map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-xl overflow-hidden aspect-[4/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: "", className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl mb-12 text-center md:text-left text-foreground/90", children: "Other Rooms & Suites" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => scroll("left"), className: "absolute -left-4 md:-left-12 top-[35%] -translate-y-1/2 p-2 text-[#1a2530] hover:scale-110 transition-transform z-10 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { strokeWidth: 1, className: "w-12 h-12" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth", children: otherRooms.map((room) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[85vw] md:w-[calc(33.333%_-_16px)] shrink-0 snap-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/apartments/$id", params: {
            id: room.id
          }, className: "block group/card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] overflow-hidden mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: room.cover, alt: room.name, className: "w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[26px] text-[#1a2530] mb-3 leading-snug", children: room.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-foreground/70 leading-relaxed mb-5 line-clamp-2", children: room.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] text-muted-foreground font-medium underline underline-offset-[6px] decoration-border group-hover/card:decoration-[#1a2530] group-hover/card:text-[#1a2530] transition-colors", children: "Read more →" })
          ] }) }, room.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => scroll("right"), className: "absolute -right-4 md:-right-6 top-[35%] -translate-y-1/2 p-2 text-[#1a2530] hover:scale-110 transition-transform z-10 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { strokeWidth: 1, className: "w-12 h-12" }) })
        ] })
      ] })
    ] }),
    " "
  ] });
}
export {
  ApartmentDetail as component
};
