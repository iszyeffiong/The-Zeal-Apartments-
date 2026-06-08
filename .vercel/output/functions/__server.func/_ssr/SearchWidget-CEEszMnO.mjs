import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as apartments, f as formatNGN } from "./router-C76CnvDY.mjs";
import { H as House, m as Calendar, U as Users, n as Search, B as BedDouble, o as Maximize2 } from "../_libs/lucide-react.mjs";
function ApartmentCard({ a }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/apartments/$id",
      params: { id: a.id },
      className: "group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.cover, alt: a.name, loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm", children: [
            "From ",
            formatNGN(a.pricePerNight),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: " / night" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: a.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: a.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
              " Up to ",
              a.guests
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-3.5 w-3.5" }),
              " ",
              a.beds
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-3.5 w-3.5" }),
              " ",
              a.size
            ] })
          ] })
        ] })
      ]
    }
  );
}
function SearchWidget({ compact = false }) {
  const navigate = useNavigate();
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 864e5).toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = reactExports.useState(today);
  const [checkOut, setCheckOut] = reactExports.useState(tomorrow);
  const [guests, setGuests] = reactExports.useState(2);
  const [apartmentId, setApartmentId] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        if (apartmentId) {
          navigate({ to: "/book/$id", params: { id: apartmentId } });
        } else {
          navigate({ to: "/apartments", search: { guests } });
        }
      },
      className: `grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl shadow-black/5 ${apartmentId ? "md:grid-cols-[1.5fr_1fr_1fr_1fr_auto]" : "md:grid-cols-[2fr_1fr_auto]"} ${compact ? "" : "md:p-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Apartment", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-4 w-4 text-primary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: apartmentId, onChange: (e) => setApartmentId(e.target.value), className: "w-full bg-transparent text-sm outline-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Any apartment" }),
          apartments.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a.id, children: a.name }, a.id))
        ] }) }),
        apartmentId && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Check-in", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-primary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: checkIn, min: today, onChange: (e) => setCheckIn(e.target.value), className: "w-full bg-transparent text-sm outline-none" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Check-out", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-primary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: checkOut, min: checkIn, onChange: (e) => setCheckOut(e.target.value), className: "w-full bg-transparent text-sm outline-none" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Guests", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-primary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: guests, onChange: (e) => setGuests(+e.target.value), className: "w-full bg-transparent text-sm outline-none", children: [1, 2, 3, 4, 5, 6].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n, children: [
          n,
          " ",
          n === 1 ? "guest" : "guests"
        ] }, n)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
          " Search"
        ] })
      ]
    }
  );
}
function Field({ label, icon, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex flex-col gap-1 rounded-xl border border-border/60 bg-background/60 px-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground", children: [
      icon,
      " ",
      label
    ] }),
    children
  ] });
}
export {
  ApartmentCard as A,
  SearchWidget as S
};
