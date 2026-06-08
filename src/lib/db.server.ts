import fs from "node:fs";
import path from "node:path";
import process from "node:process";

// We store the db file outside of src/ so it doesn't trigger Vite hot reloads
const DB_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DB_DIR, "bookings.json");

export type BookingStatus = "PENDING" | "PAID" | "CANCELLED" | "COMPLETED";

export type Booking = {
  id: string;
  apartmentId: string;
  apartmentName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  notes: string;
  paymentMethod: string;
  status: BookingStatus;
  totalAmount: number;
  createdAt: string;
};

// Initialize DB file
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

export function getBookings(): Booking[] {
  try {
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data) as Booking[];
  } catch (error) {
    console.error("Failed to read bookings", error);
    return [];
  }
}

export function saveBooking(booking: Booking): Booking {
  const bookings = getBookings();
  bookings.push(booking);
  fs.writeFileSync(DB_FILE, JSON.stringify(bookings, null, 2));
  return booking;
}

export function updateBookingStatus(id: string, status: BookingStatus) {
  const bookings = getBookings();
  const index = bookings.findIndex((b) => b.id === id);
  if (index !== -1) {
    bookings[index].status = status;
    fs.writeFileSync(DB_FILE, JSON.stringify(bookings, null, 2));
    return bookings[index];
  }
  throw new Error("Booking not found");
}

export function getBookingsByEmail(email: string): Booking[] {
  return getBookings().filter((b) => b.email.toLowerCase() === email.toLowerCase());
}

export function getBookingsForApartment(apartmentId: string): Booking[] {
  return getBookings().filter((b) => b.apartmentId === apartmentId && b.status !== "CANCELLED");
}
