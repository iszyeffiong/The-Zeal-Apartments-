import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { W as Wifi, Z as Zap, d as Shield, T as Tv, e as Sparkles, C as ChefHat, R as Refrigerator, f as Snowflake, g as Car, h as Plane, i as Shirt, j as Coffee, k as Waves, G as Gamepad2 } from "../_libs/lucide-react.mjs";
const amenities = [{
  icon: Wifi,
  name: "Fast Free WiFi",
  desc: "Fibre-backed connection across every apartment."
}, {
  icon: Zap,
  name: "24/7 Electricity",
  desc: "Mains plus silent generator backup - you'll never notice the switch."
}, {
  icon: Shield,
  name: "24/7 Security",
  desc: "On-site security and controlled entry around the clock."
}, {
  icon: Tv,
  name: "Smart TVs + Netflix",
  desc: "Streaming-ready in every living area."
}, {
  icon: Sparkles,
  name: "Daily Housekeeping",
  desc: "Linens, towels and tidying handled every day."
}, {
  icon: ChefHat,
  name: "Kitchen Facilities",
  desc: "From kitchenettes to fully equipped chef kitchens."
}, {
  icon: Refrigerator,
  name: "Refrigerator & Microwave",
  desc: "Stock up and cook on your own schedule."
}, {
  icon: Snowflake,
  name: "Air Conditioning",
  desc: "Whisper-quiet split units in every room."
}, {
  icon: Car,
  name: "Secure Parking",
  desc: "Gated parking for guests of all apartments."
}, {
  icon: Plane,
  name: "Airport Pickup",
  desc: "Optional pickup from Akwa Ibom Airport on request."
}, {
  icon: Shirt,
  name: "Laundry Service",
  desc: "Same-day laundry and dry cleaning available."
}, {
  icon: Coffee,
  name: "Welcome Provisions",
  desc: "Coffee, tea and fresh water waiting for you on arrival."
}, {
  icon: Waves,
  name: "Swimming Pool",
  desc: "A clean, relaxing outdoor pool for guests."
}, {
  icon: Gamepad2,
  name: "Indoor Game Room",
  desc: "A space equipped with games for entertainment and relaxation."
}];
function Amenities() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Amenities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl md:text-6xl", children: "Everything you need, already here." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Each apartment is provisioned to feel like a quiet, well-run home - without the chores." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: amenities.map(({
      icon: Icon,
      name,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-secondary text-secondary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-accent" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: desc })
    ] }, name)) })
  ] });
}
export {
  Amenities as component
};
