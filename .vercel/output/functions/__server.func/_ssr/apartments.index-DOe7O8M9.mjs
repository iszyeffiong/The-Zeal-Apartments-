import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as apartments } from "./router-C76CnvDY.mjs";
import { S as SearchWidget, A as ApartmentCard } from "./SearchWidget-CEEszMnO.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
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
import "./server-BRhMIV4u.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/lucide-react.mjs";
function Apartments() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Stay With Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl md:text-6xl", children: "Our apartments." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Three distinct floor plans, all hand-finished with warm textures, brass accents and modern essentials. Pick the one that fits how you travel." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchWidget, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: apartments.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(ApartmentCard, { a }, a.id)) })
  ] });
}
export {
  Apartments as component
};
