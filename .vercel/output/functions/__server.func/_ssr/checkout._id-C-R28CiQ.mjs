import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$2, f as formatNGN, m as markBookingPaid } from "./router-D33M5I3w.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
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
import "../_libs/lucide-react.mjs";
function Checkout() {
  const {
    booking
  } = Route$2.useLoaderData();
  const navigate = useNavigate();
  const handleSimulatePayment = async () => {
    await markBookingPaid({
      data: {
        id: booking.id
      }
    });
    navigate({
      to: "/dashboard"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-20 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl mb-2", children: "Complete Payment" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-6", children: [
      "You chose to pay with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize font-medium text-foreground", children: booking.paymentMethod }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-display mb-8", children: formatNGN(booking.totalAmount) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSimulatePayment, className: "w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition", children: "Simulate Payment Success" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "For this MVP demo, click the button above to simulate a successful payment transaction via the chosen provider." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/book/${booking.apartmentId}`, className: "text-sm underline text-muted-foreground", children: "Cancel and return" }) })
  ] }) });
}
export {
  Checkout as component
};
