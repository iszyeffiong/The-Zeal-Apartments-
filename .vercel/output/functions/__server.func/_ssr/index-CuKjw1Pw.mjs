import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as heroImg, c as apartments, k as kitchenImg, e as exteriorImg } from "./router-C76CnvDY.mjs";
import { S as SearchWidget, A as ApartmentCard } from "./SearchWidget-CEEszMnO.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { b as MapPin, A as ArrowRight, Z as Zap, W as Wifi, d as Shield, T as Tv, C as ChefHat, e as Sparkles, l as Star } from "../_libs/lucide-react.mjs";
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
import "./server-BRhMIV4u.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Rylme Apartments", className: "absolute inset-0 -z-10 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page pt-28 pb-40 md:pt-40 md:pb-56 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
          " Uyo · Akwa Ibom"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 max-w-3xl font-display text-5xl md:text-7xl leading-[1.05]", children: [
          "A quiet kind of luxury, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-accent not-italic", children: "in the heart of Uyo." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base md:text-lg text-white/80", children: "Boutique short-let and serviced apartments designed for travelers who notice the details - warm light, full kitchens, and round-the-clock care." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/apartments", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90", children: [
          "Book Your Stay ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page relative -mt-24 md:-mt-20 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchWidget, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-6 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "The Apartments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl", children: "Three ways to stay." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/apartments", className: "hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
          "View all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: apartments.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(ApartmentCard, { a }, a.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary text-secondary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-24 grid gap-12 md:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent", children: "Why Rylme" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl", children: "Built for the way you actually travel." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-secondary-foreground/75 max-w-md", children: "Every apartment is designed and operated by our team in Uyo - no franchises, no surprises. Just quiet rooms, fast internet, and someone to call when you need anything at all." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
        icon: Zap,
        label: "24/7 Power"
      }, {
        icon: Wifi,
        label: "Fast WiFi"
      }, {
        icon: Shield,
        label: "Security"
      }, {
        icon: Tv,
        label: "Smart TVs + Netflix"
      }, {
        icon: ChefHat,
        label: "Full Kitchen"
      }, {
        icon: Sparkles,
        label: "Daily Housekeeping"
      }].map(({
        icon: Icon,
        label
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-secondary-foreground/15 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm font-medium", children: label })
      ] }, label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary text-center", children: "Guest Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-center font-display text-4xl md:text-5xl", children: "Loved by travelers across Nigeria." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: [{
        name: "Adaeze O.",
        role: "Business traveler · Lagos",
        quote: "Spotless, quiet, and the WiFi never dropped during my conference week. The kitchen made it feel like home."
      }, {
        name: "Tunde A.",
        role: "Family stay · Abuja",
        quote: "The Two Bedroom is gorgeous. Our kids had space to play and the housekeeping was thoughtful without ever being intrusive."
      }, {
        name: "Ifeoma E.",
        role: "Wedding guest · Port Harcourt",
        quote: "Walking distance from the venue and the most welcoming hosts. I'm booking Rylme every time I'm in Uyo."
      }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-2xl border border-border bg-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-accent", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 text-foreground/90 leading-relaxed", children: [
          '"',
          r.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: r.role })
        ] })
      ] }, r.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-6 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Inside Rylme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl", children: "A few favorite corners." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
          "Full gallery ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-4 md:grid-rows-2 md:h-[520px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "", loading: "lazy", className: "md:row-span-2 md:col-span-2 h-full w-full object-cover rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: kitchenImg, alt: "", loading: "lazy", className: "h-full w-full object-cover rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: exteriorImg, alt: "", loading: "lazy", className: "h-full w-full object-cover rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: apartments[2].cover, alt: "", loading: "lazy", className: "md:col-span-2 h-full w-full object-cover rounded-2xl" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 grid gap-8 md:grid-cols-[2fr_1fr] items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Stay your way." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-primary-foreground/85 max-w-lg", children: "Whether it's a single night or a full month, our team is on hand to make your stay effortless. Reach out anytime." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-background/90", children: [
        "Get in touch ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) })
  ] });
}
export {
  Index as component
};
