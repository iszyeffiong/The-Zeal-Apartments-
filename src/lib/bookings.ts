import { getBookingsForApartment, saveBooking, getBookings, updateBookingStatus, type Booking } from "./db";
import { sendConfirmationEmail, sendAdminNotification } from "./email";

export const getUnavailableDates = async (data: { apartmentId: string }) => {
  const bookings = getBookingsForApartment(data.apartmentId);
  const unavailable: { from: string; to: string }[] = [];
  for (const b of bookings) {
    unavailable.push({ from: b.checkIn, to: b.checkOut });
  }
  return unavailable;
};

export const createPendingBooking = async (data: {
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
  totalAmount: number;
}) => {
  const id = crypto.randomUUID();
  const newBooking: Booking = {
    id,
    ...data,
    status: "PENDING",
    createdAt: new Date().toISOString(),
  };
  saveBooking(newBooking);
  return newBooking;
};

export const getBookingById = async (data: { id: string }) => {
  const bookings = getBookings();
  return bookings.find((b) => b.id === data.id);
};

export const markBookingPaid = async (data: { id: string }) => {
  const updated = updateBookingStatus(data.id, "PAID");
  
  // Simulate sending emails
  await sendConfirmationEmail(updated);
  await sendAdminNotification(updated);
  
  return { success: true };
};
