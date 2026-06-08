import { T as TSS_SERVER_FUNCTION } from "./server-BzYY8oOn.mjs";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const DB_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DB_DIR, "bookings.json");
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([]));
}
function getBookings() {
  try {
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to read bookings", error);
    return [];
  }
}
function saveBooking(booking) {
  const bookings = getBookings();
  bookings.push(booking);
  fs.writeFileSync(DB_FILE, JSON.stringify(bookings, null, 2));
  return booking;
}
function updateBookingStatus(id, status) {
  const bookings = getBookings();
  const index = bookings.findIndex((b) => b.id === id);
  if (index !== -1) {
    bookings[index].status = status;
    fs.writeFileSync(DB_FILE, JSON.stringify(bookings, null, 2));
    return bookings[index];
  }
  throw new Error("Booking not found");
}
function getBookingsByEmail(email) {
  return getBookings().filter((b) => b.email.toLowerCase() === email.toLowerCase());
}
function getBookingsForApartment(apartmentId) {
  return getBookings().filter((b) => b.apartmentId === apartmentId && b.status !== "CANCELLED");
}
export {
  getBookings as a,
  getBookingsByEmail as b,
  createServerRpc as c,
  getBookingsForApartment as g,
  saveBooking as s,
  updateBookingStatus as u
};
