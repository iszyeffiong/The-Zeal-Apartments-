import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { f as formatNGN, a as fetchMyBookings } from "./router-C76CnvDY.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { f as format } from "../_libs/date-fns.mjs";
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
import "../_libs/lucide-react.mjs";
function Dashboard() {
  const [email, setEmail] = reactExports.useState("");
  const [submittedEmail, setSubmittedEmail] = reactExports.useState("");
  const [bookings, setBookings] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await fetchMyBookings({
      data: {
        email
      }
    });
    setBookings(data);
    setSubmittedEmail(email);
    setLoading(false);
  };
  if (!submittedEmail) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-20 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm rounded-2xl border border-border bg-card p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl mb-2 text-center", children: "My Bookings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6 text-center", children: "Enter your email to view your reservations and download receipts." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-wider text-muted-foreground block mb-1", children: "Email address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, className: "field w-full", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@example.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-50", children: loading ? "Loading..." : "View Bookings" })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "My Bookings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1", children: [
          "Logged in as ",
          submittedEmail
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSubmittedEmail(""), className: "text-sm underline text-muted-foreground", children: "Sign out" })
    ] }),
    bookings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-medium mb-2", children: "No bookings found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "You haven't made any reservations with this email address." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
        to: "/"
      }), className: "rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground", children: "Browse Apartments" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6", children: bookings.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card overflow-hidden md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:w-2/3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2.5 py-1 text-xs rounded-full font-medium ${b.status === "PAID" ? "bg-green-100 text-green-700" : b.status === "PENDING" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`, children: b.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            "ID: ",
            b.id.slice(0, 8)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-1", children: b.apartmentName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
          format(new Date(b.checkIn), "MMM d, yyyy"),
          " – ",
          format(new Date(b.checkOut), "MMM d, yyyy")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground block text-xs uppercase tracking-wider mb-0.5", children: "Guests" }),
            " ",
            b.guests
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground block text-xs uppercase tracking-wider mb-0.5", children: "Total" }),
            " ",
            formatNGN(b.totalAmount)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border md:border-t-0 md:border-l md:w-1/3 p-6 bg-muted/20 flex flex-col justify-center gap-3", children: [
        b.status === "PENDING" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
          to: "/checkout/$id",
          params: {
            id: b.id
          }
        }), className: "w-full rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground text-center", children: "Complete Payment" }),
        b.status === "PAID" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-center shadow-sm hover:bg-muted", children: "Download Receipt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-sm text-red-500 hover:underline", children: "Cancel Booking" })
      ] })
    ] }, b.id)) })
  ] });
}
export {
  Dashboard as component
};
