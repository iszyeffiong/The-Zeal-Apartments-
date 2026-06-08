import { c as createServerRpc, a as getBookings, u as updateBookingStatus } from "./db.server-RkQ4v6pB.mjs";
import { c as createServerFn } from "./server-BRhMIV4u.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:fs";
import "node:path";
import "node:process";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const fetchAllBookings_createServerFn_handler = createServerRpc({
  id: "818b594b783c10794e345ef74c1a58f06e8d7ff5470ada38a52b9db841b31b3c",
  name: "fetchAllBookings",
  filename: "src/routes/admin.tsx"
}, (opts) => fetchAllBookings.__executeServer(opts));
const fetchAllBookings = createServerFn({
  method: "GET"
}).handler(fetchAllBookings_createServerFn_handler, async () => {
  return getBookings();
});
const updateStatus_createServerFn_handler = createServerRpc({
  id: "ffe79cd258c29434dfc498661c6ae8d8babe8142e566d8bbbdd91c759545289d",
  name: "updateStatus",
  filename: "src/routes/admin.tsx"
}, (opts) => updateStatus.__executeServer(opts));
const updateStatus = createServerFn({
  method: "POST"
}).validator((d) => d).handler(updateStatus_createServerFn_handler, async ({
  data
}) => {
  return updateBookingStatus(data.id, data.status);
});
export {
  fetchAllBookings_createServerFn_handler,
  updateStatus_createServerFn_handler
};
