import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { S as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-BRhMIV4u.mjs";
import { X, M as Menu, I as Instagram, F as Facebook, P as Phone, a as Mail, b as MapPin, c as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const appCss = "/assets/styles-C26GddoT.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/apartments", label: "Apartments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/amenities", label: "Amenities" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/dashboard", label: "My Bookings" },
  { to: "/admin", label: "Admin" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex min-h-[4.5rem] md:min-h-20 py-2 items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.webp", alt: "Rylme Logo", className: "h-12 md:h-16 w-auto object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-7 text-sm", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          className: "text-muted-foreground transition-colors hover:text-foreground",
          activeProps: { className: "text-foreground font-medium" },
          activeOptions: { exact: n.to === "/" },
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/apartments",
          className: "hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90",
          children: "Book Now"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden p-2", onClick: () => setOpen(!open), "aria-label": "Toggle menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border/60 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex flex-col py-4 gap-3", children: [
      nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, onClick: () => setOpen(false), className: "py-2 text-foreground", children: n.label }, n.to)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apartments", onClick: () => setOpen(false), className: "mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-primary-foreground", children: "Book Now" })
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t border-border/60 bg-secondary text-secondary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.webp", alt: "Rylme Logo", className: "h-14 w-auto object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm text-secondary-foreground/75 leading-relaxed", children: "Boutique short-let and serviced apartments in the heart of Uyo, Akwa Ibom State. Designed for travelers who notice the details." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "grid h-9 w-9 place-items-center rounded-full border border-secondary-foreground/20 hover:bg-secondary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "grid h-9 w-9 place-items-center rounded-full border border-secondary-foreground/20 hover:bg-secondary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-accent", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-secondary-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apartments", className: "hover:text-accent", children: "Apartments" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "hover:text-accent", children: "Gallery" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/amenities", className: "hover:text-accent", children: "Amenities" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-accent", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-accent", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-accent", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-secondary-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mt-0.5 text-accent" }),
            " +234 800 000 0000"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mt-0.5 text-accent" }),
            " info@rylmeapartments.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-accent" }),
            " Uyo, Akwa Ibom State, Nigeria"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-secondary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-6 text-xs text-secondary-foreground/60 flex flex-col md:flex-row justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Rylme Apartments. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Crafted with care in Uyo." })
    ] }) })
  ] });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "https://wa.me/2349028302100?text=Hello%20Rylme%20Apartments%2C%20I%27d%20like%20to%20make%20a%20booking.",
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" })
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rylme Apartments - Luxury Short-Let Apartments in Uyo" },
      { name: "description", content: "Boutique serviced and short-let apartments in Uyo, Akwa Ibom. Book online with 24/7 power, fast WiFi and daily housekeeping." },
      { name: "author", content: "Rylme Apartments" },
      { property: "og:title", content: "Rylme Apartments - Luxury Short-Let Apartments in Uyo" },
      { property: "og:description", content: "Boutique serviced and short-let apartments in Uyo, Akwa Ibom." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center", richColors: true })
  ] }) });
}
const studio = "/assets/studio-yWGqEeSR.jpg";
const executive = "/assets/executive-C6ykC0-n.jpg";
const luxury = "/assets/luxury-DdIs4IpJ.jpg";
const kitchenImg = "/assets/kitchen-BoiqYgFN.jpg";
const exteriorImg = "/assets/exterior-CV0-waMk.jpg";
const heroImg = "/assets/hero-CA0gn0vc.jpg";
const apartments = [
  {
    id: "standard-studio",
    name: "Standard Studio",
    tagline: "A cozy and minimal space for quick visits.",
    pricePerNight: 25e3,
    weeklyRate: 15e4,
    monthlyRate: 5e5,
    guests: 2,
    beds: "1 Double",
    size: "25 m²",
    cover: studio,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "Compact and efficient, featuring everything you need for a comfortable short stay in Uyo.",
    amenities: ["Double Bed", "Smart TV", "Air Conditioning", "Free WiFi"]
  },
  {
    id: "deluxe-studio",
    name: "Deluxe Studio",
    tagline: "A refined retreat for solo travelers and couples.",
    pricePerNight: 35e3,
    weeklyRate: 21e4,
    monthlyRate: 75e4,
    guests: 2,
    beds: "1 Queen",
    size: "32 m²",
    cover: studio,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "Our Deluxe Studio pairs warm terracotta walls with brass fixtures and crisp white linens. A queen bed, kitchenette and smart TV make it ideal for short business trips and weekend getaways.",
    amenities: ["Queen Bed", "Smart TV with Netflix", "Air Conditioning", "Kitchenette", "Free High-Speed WiFi", "24/7 Power", "Daily Housekeeping"]
  },
  {
    id: "premium-studio",
    name: "Premium Studio",
    tagline: "Elevated comfort with extra space.",
    pricePerNight: 45e3,
    weeklyRate: 28e4,
    monthlyRate: 95e4,
    guests: 2,
    beds: "1 King",
    size: "40 m²",
    cover: studio,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "Enjoy a larger floor plan, premium bedding, and a dedicated workspace in our top-tier studio apartment.",
    amenities: ["King Bed", "Smart TV with Netflix", "Workspace", "Kitchenette", "Free WiFi", "24/7 Power"]
  },
  {
    id: "classic-one-bedroom",
    name: "Classic One Bedroom",
    tagline: "A home away from home.",
    pricePerNight: 4e4,
    weeklyRate: 25e4,
    monthlyRate: 85e4,
    guests: 2,
    beds: "1 Queen",
    size: "48 m²",
    cover: executive,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "A comfortable one-bedroom apartment with a separate living area and kitchen, perfect for longer stays.",
    amenities: ["Queen Bed", "Living Room", "Full Kitchen", "Air Conditioning", "Free WiFi"]
  },
  {
    id: "executive-one-bedroom",
    name: "Executive One Bedroom",
    tagline: "Generous living for visiting executives and creatives.",
    pricePerNight: 5e4,
    weeklyRate: 315e3,
    monthlyRate: 115e4,
    guests: 3,
    beds: "1 King + Sofa",
    size: "58 m²",
    cover: executive,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "An open-plan living room with a forest-green accent wall flows into a private bedroom with king bed. Cook in the full kitchen or unwind on the balcony after a long day in Uyo.",
    amenities: ["King Bed", "Private Living Room", "Smart TV with Netflix", "Full Kitchen", "Air Conditioning", "Workspace", "Free WiFi", "Daily Housekeeping", "Secure Parking"]
  },
  {
    id: "signature-one-bedroom",
    name: "Signature One Bedroom",
    tagline: "Our most popular one-bedroom suite.",
    pricePerNight: 6e4,
    weeklyRate: 38e4,
    monthlyRate: 13e5,
    guests: 3,
    beds: "1 King + Sofa",
    size: "65 m²",
    cover: executive,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "Expansive layout featuring bespoke furniture, a premium kitchen, and a private balcony with city views.",
    amenities: ["King Bed", "Premium Kitchen", "Balcony", "2 Smart TVs", "Free WiFi", "24/7 Security"]
  },
  {
    id: "family-two-bedroom",
    name: "Family Two Bedroom",
    tagline: "Comfort and space for the whole family.",
    pricePerNight: 65e3,
    weeklyRate: 4e5,
    monthlyRate: 15e5,
    guests: 4,
    beds: "2 Queen",
    size: "80 m²",
    cover: luxury,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "Two comfortable bedrooms and a spacious living area make this ideal for family vacations.",
    amenities: ["Two Queen Beds", "Spacious Living Room", "Kitchen", "Free WiFi", "24/7 Power"]
  },
  {
    id: "luxury-two-bedroom",
    name: "Luxury Two Bedroom",
    tagline: "A boutique apartment for families and small groups.",
    pricePerNight: 75e3,
    weeklyRate: 475e3,
    monthlyRate: 175e4,
    guests: 5,
    beds: "1 King + 2 Twin",
    size: "92 m²",
    cover: luxury,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "Two bedrooms, a dining area for six and a sun-drenched balcony. The Luxury Two Bedroom is our flagship apartment - designed for families, event guests and longer stays.",
    amenities: ["Two Bedrooms", "Dining for Six", "Two Smart TVs", "Fully Equipped Kitchen", "Private Balcony", "Washer & Dryer", "Air Conditioning", "Free WiFi", "24/7 Security", "Generator Backup"]
  },
  {
    id: "garden-suite",
    name: "Garden Suite",
    tagline: "Peaceful ground-floor living.",
    pricePerNight: 85e3,
    weeklyRate: 52e4,
    monthlyRate: 19e5,
    guests: 4,
    beds: "1 King + 1 Queen",
    size: "100 m²",
    cover: luxury,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "A beautiful two-bedroom suite with direct access to a private landscaped garden.",
    amenities: ["Private Garden", "Two Bedrooms", "Full Kitchen", "Premium Setup", "Free WiFi"]
  },
  {
    id: "business-suite",
    name: "Business Suite",
    tagline: "Designed for productivity and rest.",
    pricePerNight: 55e3,
    weeklyRate: 35e4,
    monthlyRate: 125e4,
    guests: 2,
    beds: "1 King",
    size: "60 m²",
    cover: executive,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "Features a dedicated office space alongside a luxurious bedroom and living area.",
    amenities: ["Home Office", "King Bed", "Fast WiFi", "Printer/Scanner", "Kitchen"]
  },
  {
    id: "penthouse-suite",
    name: "Penthouse Suite",
    tagline: "Top floor luxury with panoramic views.",
    pricePerNight: 12e4,
    weeklyRate: 75e4,
    monthlyRate: 28e5,
    guests: 6,
    beds: "2 King + 1 Queen",
    size: "150 m²",
    cover: heroImg,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "Our exclusive three-bedroom penthouse offers the ultimate Rylme experience with wrap-around balconies and premium finishes.",
    amenities: ["Three Bedrooms", "Panoramic Views", "Chef's Kitchen", "Private Terrace", "Premium WiFi", "Dedicated Support"]
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    tagline: "The pinnacle of short-let living in Uyo.",
    pricePerNight: 2e5,
    weeklyRate: 12e5,
    monthlyRate: 45e5,
    guests: 8,
    beds: "4 King",
    size: "250 m²",
    cover: heroImg,
    gallery: [studio, executive, luxury, kitchenImg, exteriorImg, heroImg],
    description: "Four opulent bedrooms, a massive entertaining space, and unparalleled service.",
    amenities: ["Four Bedrooms", "Luxury Finishes", "Butler Service", "Secure Access", "Private Dining Room"]
  }
];
const getApartment = (id) => apartments.find((a) => a.id === id);
const formatNGN = (amount) => new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0
}).format(amount);
const galleryImages = [
  { src: heroImg, category: "Rooms", caption: "Master bedroom at golden hour" },
  { src: executive, category: "Living Areas", caption: "Executive lounge" },
  { src: luxury, category: "Living Areas", caption: "Two-bedroom living room" },
  { src: kitchenImg, category: "Kitchens", caption: "Marble & brass kitchen" },
  { src: exteriorImg, category: "Exterior", caption: "The Rylme building at dusk" },
  { src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800", category: "Game Room", caption: "Indoor Game Room & Lounge" },
  { src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800", category: "Swimming Pool", caption: "Outdoor Swimming Pool" },
  { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800", category: "Bar", caption: "Rylme Cocktail Bar" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800", category: "Restaurant", caption: "Rylme Dining & Restaurant" },
  ...apartments.map((apt) => ({ src: apt.cover, category: "Rooms", caption: apt.name }))
];
const BASE_URL = "";
const Route$b = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/apartments", priority: "0.9" },
          { path: "/gallery", priority: "0.7" },
          { path: "/amenities", priority: "0.7" },
          { path: "/about", priority: "0.6" },
          { path: "/contact", priority: "0.6" },
          ...apartments.map((a) => ({ path: `/apartments/${a.id}`, priority: "0.8" }))
        ];
        const urls = entries.map(
          (e) => `  <url><loc>${BASE_URL}${e.path}</loc><priority>${e.priority}</priority></url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$a = () => import("./gallery-nDsD_fa4.mjs");
const Route$a = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery - Rylme Apartments"
    }, {
      name: "description",
      content: "A look inside Rylme Apartments: rooms, living areas, kitchens and the building itself."
    }, {
      property: "og:title",
      content: "Gallery - Rylme Apartments"
    }, {
      property: "og:description",
      content: "A look inside Rylme Apartments in Uyo."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const $$splitComponentImporter$9 = () => import("./dashboard-CjwEpHlQ.mjs");
const fetchMyBookings = createServerFn({
  method: "GET"
}).validator((d) => d).handler(createSsrRpc("330bebedfd2cc5c5a461c4dd4a2f60d1b3b11fca469d14362c726731fcf89f4c"));
const Route$9 = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./contact-UcOXgoE9.mjs");
const Route$8 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact - Rylme Apartments"
    }, {
      name: "description",
      content: "Get in touch with Rylme Apartments in Uyo. Call, email, WhatsApp or send us a message."
    }, {
      property: "og:title",
      content: "Contact - Rylme Apartments"
    }, {
      property: "og:description",
      content: "Get in touch with Rylme Apartments."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./amenities-Dq8E5uyL.mjs");
const Route$7 = createFileRoute("/amenities")({
  head: () => ({
    meta: [{
      title: "Amenities - Rylme Apartments"
    }, {
      name: "description",
      content: "Everything included in your Rylme stay - from 24/7 power and security to daily housekeeping and airport pickup."
    }, {
      property: "og:title",
      content: "Amenities - Rylme Apartments"
    }, {
      property: "og:description",
      content: "What's included in your stay at Rylme Apartments Uyo."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./admin-BvZ68iTp.mjs");
const fetchAllBookings = createServerFn({
  method: "GET"
}).handler(createSsrRpc("818b594b783c10794e345ef74c1a58f06e8d7ff5470ada38a52b9db841b31b3c"));
const updateStatus = createServerFn({
  method: "POST"
}).validator((d) => d).handler(createSsrRpc("ffe79cd258c29434dfc498661c6ae8d8babe8142e566d8bbbdd91c759545289d"));
const Route$6 = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./about-BMZ8NYSj.mjs");
const Route$5 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About - Rylme Apartments"
    }, {
      name: "description",
      content: "The story, mission and vision behind Rylme Apartments - boutique short-let apartments in Uyo, Akwa Ibom State."
    }, {
      property: "og:title",
      content: "About - Rylme Apartments"
    }, {
      property: "og:description",
      content: "Our story and mission."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-CuKjw1Pw.mjs");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Rylme Apartments - Luxury Short-Let Apartments in Uyo"
    }, {
      name: "description",
      content: "Boutique serviced and short-let apartments in Uyo, Akwa Ibom. Book a studio, one-bedroom or two-bedroom suite online."
    }, {
      property: "og:title",
      content: "Rylme Apartments - Luxury Short-Let Apartments in Uyo"
    }, {
      property: "og:description",
      content: "Boutique short-let apartments in Uyo, Akwa Ibom State."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./apartments.index-DOe7O8M9.mjs");
const Route$3 = createFileRoute("/apartments/")({
  head: () => ({
    meta: [{
      title: "Apartments - Rylme Apartments Uyo"
    }, {
      name: "description",
      content: "Browse Rylme's collection of studio, one-bedroom and two-bedroom serviced apartments in Uyo."
    }, {
      property: "og:title",
      content: "Apartments - Rylme Apartments Uyo"
    }, {
      property: "og:description",
      content: "Browse Rylme's collection of serviced apartments in Uyo."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const getUnavailableDates = createServerFn({
  method: "GET"
}).validator((d) => d).handler(createSsrRpc("08540e4be50dd862d2aa5b36439024cb87a93942829f037f45841c14312105ce"));
const createPendingBooking = createServerFn({
  method: "POST"
}).validator((d) => d).handler(createSsrRpc("364cd851c0fe7661fbc3c0d9f8a8246230617e44f3f27dff49b84ac251eee45b"));
const getBookingById = createServerFn({
  method: "GET"
}).validator((d) => d).handler(createSsrRpc("55ac03bdb5a0fb515dda10ad079d89c91b941e83ae5a94def2a9350ee7a0e5c3"));
const markBookingPaid = createServerFn({
  method: "POST"
}).validator((d) => d).handler(createSsrRpc("6726896861087de2cb4ba7d6fac0e1424e243390cc8d81d1480ea4c32bb920a7"));
const $$splitComponentImporter$2 = () => import("./checkout._id-BCySbF_y.mjs");
const Route$2 = createFileRoute("/checkout/$id")({
  loader: async ({
    params
  }) => {
    const booking = await getBookingById({
      data: {
        id: params.id
      }
    });
    if (!booking) throw new Error("Booking not found");
    return {
      booking
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./book._id-BoOk1MzV.mjs");
const Route$1 = createFileRoute("/book/$id")({
  loader: async ({
    params
  }) => {
    const apt = getApartment(params.id);
    if (!apt) throw notFound();
    const unavailable = await getUnavailableDates({
      data: {
        apartmentId: apt.id
      }
    });
    return {
      apt,
      unavailable
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: loaderData ? `Book ${loaderData.apt.name} - Rylme Apartments` : "Book - Rylme"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./apartments._id-DDTNUbtb.mjs");
const $$splitComponentImporter = () => import("./apartments._id-elIG0Q0n.mjs");
const Route = createFileRoute("/apartments/$id")({
  loader: ({
    params
  }) => {
    const apt = getApartment(params.id);
    if (!apt) throw notFound();
    return {
      apt
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.apt.name} - Rylme Apartments Uyo`
    }, {
      name: "description",
      content: loaderData.apt.tagline
    }, {
      property: "og:title",
      content: `${loaderData.apt.name} - Rylme Apartments`
    }, {
      property: "og:description",
      content: loaderData.apt.tagline
    }, {
      property: "og:image",
      content: loaderData.apt.cover
    }] : []
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const SitemapDotxmlRoute = Route$b.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$c
});
const GalleryRoute = Route$a.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$c
});
const DashboardRoute = Route$9.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$c
});
const ContactRoute = Route$8.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$c
});
const AmenitiesRoute = Route$7.update({
  id: "/amenities",
  path: "/amenities",
  getParentRoute: () => Route$c
});
const AdminRoute = Route$6.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$c
});
const AboutRoute = Route$5.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const ApartmentsIndexRoute = Route$3.update({
  id: "/apartments/",
  path: "/apartments/",
  getParentRoute: () => Route$c
});
const CheckoutIdRoute = Route$2.update({
  id: "/checkout/$id",
  path: "/checkout/$id",
  getParentRoute: () => Route$c
});
const BookIdRoute = Route$1.update({
  id: "/book/$id",
  path: "/book/$id",
  getParentRoute: () => Route$c
});
const ApartmentsIdRoute = Route.update({
  id: "/apartments/$id",
  path: "/apartments/$id",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  AmenitiesRoute,
  ContactRoute,
  DashboardRoute,
  GalleryRoute,
  SitemapDotxmlRoute,
  ApartmentsIdRoute,
  BookIdRoute,
  CheckoutIdRoute,
  ApartmentsIndexRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$2 as R,
  fetchMyBookings as a,
  fetchAllBookings as b,
  apartments as c,
  Route$1 as d,
  exteriorImg as e,
  formatNGN as f,
  galleryImages as g,
  heroImg as h,
  createPendingBooking as i,
  Route as j,
  kitchenImg as k,
  markBookingPaid as m,
  router as r,
  updateStatus as u
};
