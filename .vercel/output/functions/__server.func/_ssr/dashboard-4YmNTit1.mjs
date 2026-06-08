import { c as createServerRpc, b as getBookingsByEmail } from "./db.server-DvEwLoUa.mjs";
import { c as createServerFn } from "./server-BzYY8oOn.mjs";
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
const fetchMyBookings_createServerFn_handler = createServerRpc({
  id: "330bebedfd2cc5c5a461c4dd4a2f60d1b3b11fca469d14362c726731fcf89f4c",
  name: "fetchMyBookings",
  filename: "src/routes/dashboard.tsx"
}, (opts) => fetchMyBookings.__executeServer(opts));
const fetchMyBookings = createServerFn({
  method: "GET"
}).validator((d) => d).handler(fetchMyBookings_createServerFn_handler, async ({
  data
}) => {
  return getBookingsByEmail(data.email);
});
export {
  fetchMyBookings_createServerFn_handler
};
