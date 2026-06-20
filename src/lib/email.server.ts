export async function sendConfirmationEmail(booking: any) {
  // For the MVP, we just console.log the email content.
  // In a real application, you would use nodemailer or a service like Resend.
  
  console.log("\n=============================================");
  console.log("✉️  EMAIL SENT");
  console.log(`To: ${booking.name} <${booking.email}>`);
  console.log(`Subject: Your booking at ${booking.apartmentName} is confirmed!`);
  console.log("---------------------------------------------");
  console.log(`Hello ${booking.name},`);
  console.log(`\nThank you for choosing The Zeal Apartments.`);
  console.log(`Your payment of NGN ${booking.totalAmount.toLocaleString()} was successful.`);
  console.log(`\nBooking Details:`);
  console.log(`- Apartment: ${booking.apartmentName}`);
  console.log(`- Check-in: ${new Date(booking.checkIn).toLocaleDateString()}`);
  console.log(`- Check-out: ${new Date(booking.checkOut).toLocaleDateString()}`);
  console.log(`- Guests: ${booking.guests}`);
  console.log(`\nCheck-in Instructions:`);
  console.log(`Our team will contact you shortly on ${booking.phone} to coordinate your arrival.`);
  console.log(`\nSee you soon!`);
  console.log("=============================================\n");
}

export async function sendAdminNotification(booking: any) {
  console.log("\n=============================================");
  console.log("🔔 ADMIN ALERT");
  console.log(`New booking paid for ${booking.apartmentName} by ${booking.name}.`);
  console.log(`Total: NGN ${booking.totalAmount.toLocaleString()}`);
  console.log("=============================================\n");
}
