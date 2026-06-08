import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { g as galleryImages } from "./router-D33M5I3w.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./server-BzYY8oOn.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const categories = ["All", "Rooms", "Living Areas", "Kitchens", "Exterior", "Game Room", "Swimming Pool", "Bar", "Restaurant"];
function Gallery() {
  const [filter, setFilter] = reactExports.useState("All");
  const [lightbox, setLightbox] = reactExports.useState(null);
  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl md:text-6xl", children: "Inside Rylme." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Real photographs from our apartments and common areas." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(c), className: `rounded-full px-4 py-2 text-sm transition ${filter === c ? "bg-primary text-primary-foreground" : "border border-border hover:bg-muted"}`, children: c }, c)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3", children: filtered.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLightbox(g.src), className: "group block overflow-hidden rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.src, alt: g.caption, loading: "lazy", className: "aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-left text-xs text-muted-foreground", children: g.caption })
    ] }, i)) }),
    lightbox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 grid place-items-center bg-black/90 p-4", onClick: () => setLightbox(null), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-6 right-6 text-white", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lightbox, alt: "", className: "max-h-[90vh] max-w-[90vw] rounded-xl object-contain" })
    ] })
  ] });
}
export {
  Gallery as component
};
