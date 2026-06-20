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

const DB_KEY = "bookings_db";

function getLocalStorageBookings(): Booking[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(DB_KEY);
  return data ? JSON.parse(data) : [];
}

function saveLocalStorageBookings(bookings: Booking[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(DB_KEY, JSON.stringify(bookings));
  }
}

export function getBookings(): Booking[] {
  return getLocalStorageBookings();
}

export function saveBooking(booking: Booking): Booking {
  const bookings = getBookings();
  bookings.push(booking);
  saveLocalStorageBookings(bookings);
  return booking;
}

export function updateBookingStatus(id: string, status: BookingStatus) {
  const bookings = getBookings();
  const index = bookings.findIndex((b) => b.id === id);
  if (index !== -1) {
    bookings[index].status = status;
    saveLocalStorageBookings(bookings);
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
