import { c as createServerRpc, g as getBookingsForApartment, s as saveBooking, a as getBookings, u as updateBookingStatus } from "./db.server-DvEwLoUa.mjs";
import { c as createServerFn } from "./server-BzYY8oOn.mjs";
import crypto from "node:crypto";
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
async function sendConfirmationEmail(booking) {
  console.log("\n=============================================");
  console.log("✉️  EMAIL SENT");
  console.log(`To: ${booking.name} <${booking.email}>`);
  console.log(`Subject: Your booking at ${booking.apartmentName} is confirmed!`);
  console.log("---------------------------------------------");
  console.log(`Hello ${booking.name},`);
  console.log(`
Thank you for choosing Rylme Apartments.`);
  console.log(`Your payment of NGN ${booking.totalAmount.toLocaleString()} was successful.`);
  console.log(`
Booking Details:`);
  console.log(`- Apartment: ${booking.apartmentName}`);
  console.log(`- Check-in: ${new Date(booking.checkIn).toLocaleDateString()}`);
  console.log(`- Check-out: ${new Date(booking.checkOut).toLocaleDateString()}`);
  console.log(`- Guests: ${booking.guests}`);
  console.log(`
Check-in Instructions:`);
  console.log(`Our team will contact you shortly on ${booking.phone} to coordinate your arrival.`);
  console.log(`
See you soon!`);
  console.log("=============================================\n");
}
async function sendAdminNotification(booking) {
  console.log("\n=============================================");
  console.log("🔔 ADMIN ALERT");
  console.log(`New booking paid for ${booking.apartmentName} by ${booking.name}.`);
  console.log(`Total: NGN ${booking.totalAmount.toLocaleString()}`);
  console.log("=============================================\n");
}
const getUnavailableDates_createServerFn_handler = createServerRpc({
  id: "08540e4be50dd862d2aa5b36439024cb87a93942829f037f45841c14312105ce",
  name: "getUnavailableDates",
  filename: "src/lib/bookings.server.ts"
}, (opts) => getUnavailableDates.__executeServer(opts));
const getUnavailableDates = createServerFn({
  method: "GET"
}).validator((d) => d).handler(getUnavailableDates_createServerFn_handler, async ({
  data
}) => {
  const bookings = getBookingsForApartment(data.apartmentId);
  const unavailable = [];
  for (const b of bookings) {
    unavailable.push({
      from: b.checkIn,
      to: b.checkOut
    });
  }
  return unavailable;
});
const createPendingBooking_createServerFn_handler = createServerRpc({
  id: "364cd851c0fe7661fbc3c0d9f8a8246230617e44f3f27dff49b84ac251eee45b",
  name: "createPendingBooking",
  filename: "src/lib/bookings.server.ts"
}, (opts) => createPendingBooking.__executeServer(opts));
const createPendingBooking = createServerFn({
  method: "POST"
}).validator((d) => d).handler(createPendingBooking_createServerFn_handler, async ({
  data
}) => {
  const id = crypto.randomUUID();
  const newBooking = {
    id,
    ...data,
    status: "PENDING",
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  saveBooking(newBooking);
  return newBooking;
});
const getBookingById_createServerFn_handler = createServerRpc({
  id: "55ac03bdb5a0fb515dda10ad079d89c91b941e83ae5a94def2a9350ee7a0e5c3",
  name: "getBookingById",
  filename: "src/lib/bookings.server.ts"
}, (opts) => getBookingById.__executeServer(opts));
const getBookingById = createServerFn({
  method: "GET"
}).validator((d) => d).handler(getBookingById_createServerFn_handler, async ({
  data
}) => {
  const bookings = getBookings();
  return bookings.find((b) => b.id === data.id);
});
const markBookingPaid_createServerFn_handler = createServerRpc({
  id: "6726896861087de2cb4ba7d6fac0e1424e243390cc8d81d1480ea4c32bb920a7",
  name: "markBookingPaid",
  filename: "src/lib/bookings.server.ts"
}, (opts) => markBookingPaid.__executeServer(opts));
const markBookingPaid = createServerFn({
  method: "POST"
}).validator((d) => d).handler(markBookingPaid_createServerFn_handler, async ({
  data
}) => {
  const updated = updateBookingStatus(data.id, "PAID");
  await sendConfirmationEmail(updated);
  await sendAdminNotification(updated);
  return {
    success: true
  };
});
export {
  createPendingBooking_createServerFn_handler,
  getBookingById_createServerFn_handler,
  getUnavailableDates_createServerFn_handler,
  markBookingPaid_createServerFn_handler
};
