import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { f as formatNGN, b as fetchAllBookings, u as updateStatus } from "./router-C76CnvDY.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { f as format } from "../_libs/date-fns.mjs";
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
function AdminDashboard() {
  const [bookings, setBookings] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const loadData = async () => {
    setLoading(true);
    const data = await fetchAllBookings();
    setBookings(data.sort((a, b) => +new Date(b.createdAt) < +new Date(a.createdAt) ? 1 : -1));
    setLoading(false);
  };
  reactExports.useEffect(() => {
    loadData();
  }, []);
  const handleStatusChange = async (id, newStatus) => {
    await updateStatus({
      data: {
        id,
        status: newStatus
      }
    });
    loadData();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Admin Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Manage all reservations and guest details." })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-pulse space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 bg-muted rounded-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 bg-muted rounded-xl" })
    ] }) : bookings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No bookings have been made yet." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-muted-foreground border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Guest" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Apartment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Dates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: bookings.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-muted/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: b.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground text-xs", children: [
            b.email,
            " • ",
            b.phone
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: b.apartmentName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4", children: [
          format(new Date(b.checkIn), "MMM d"),
          " - ",
          format(new Date(b.checkOut), "MMM d, yyyy")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 font-medium", children: formatNGN(b.totalAmount) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-1 text-[10px] uppercase tracking-wider rounded-md font-medium ${b.status === "PAID" ? "bg-green-100 text-green-700" : b.status === "PENDING" ? "bg-amber-100 text-amber-700" : b.status === "COMPLETED" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`, children: b.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "text-xs border border-border rounded-md px-2 py-1 bg-background", value: b.status, onChange: (e) => handleStatusChange(b.id, e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDING", children: "Pending" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PAID", children: "Paid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "COMPLETED", children: "Completed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CANCELLED", children: "Cancelled" })
        ] }) })
      ] }, b.id)) })
    ] }) })
  ] });
}
export {
  AdminDashboard as component
};
