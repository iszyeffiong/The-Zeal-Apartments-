import { createServerFn } from "@tanstack/react-start";
import { getBookingsForApartment, saveBooking, getBookings, updateBookingStatus, type Booking } from "./db.server";
import crypto from "node:crypto";

export const getUnavailableDates = createServerFn({ method: "GET" })
  .validator((d: { apartmentId: string }) => d)
  .handler(async ({ data }) => {
    const bookings = getBookingsForApartment(data.apartmentId);
    const unavailable: { from: string; to: string }[] = [];
    for (const b of bookings) {
      unavailable.push({ from: b.checkIn, to: b.checkOut });
    }
    return unavailable;
  });

export const createPendingBooking = createServerFn({ method: "POST" })
  .validator(
    (d: {
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
    }) => d
  )
  .handler(async ({ data }) => {
    const id = crypto.randomUUID();
    const newBooking: Booking = {
      id,
      ...data,
      status: "PENDING",
      createdAt: new Date().toISOString(),
    };
    saveBooking(newBooking);
    return newBooking;
  });

export const getBookingById = createServerFn({ method: "GET" })
  .validator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const bookings = getBookings();
    return bookings.find(b => b.id === data.id);
  });

import { sendConfirmationEmail, sendAdminNotification } from "./email.server";

export const markBookingPaid = createServerFn({ method: "POST" })
  .validator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const updated = updateBookingStatus(data.id, "PAID");
    
    // Simulate sending emails
    await sendConfirmationEmail(updated);
    await sendAdminNotification(updated);
    
    return { success: true };
  });
