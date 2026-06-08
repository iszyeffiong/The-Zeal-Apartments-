import { createFileRoute } from '@tanstack/react-router'
import { Link, useNavigate } from "@tanstack/react-router";
import { getBookingById, markBookingPaid } from "@/lib/bookings.server";
import { formatNGN } from "@/lib/apartments";

export const Route = createFileRoute("/checkout/$id")({
  loader: async ({ params }) => {
    const booking = await getBookingById({ data: { id: params.id } });
    if (!booking) throw new Error("Booking not found");
    return { booking };
  },
  component: Checkout,
});

function Checkout() {
  const { booking } = Route.useLoaderData();
  const navigate = useNavigate();

  const handleSimulatePayment = async () => {
    await markBookingPaid({ data: { id: booking.id } });
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="container-page py-20 flex justify-center">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
        <h1 className="font-display text-2xl mb-2">Complete Payment</h1>
        <p className="text-muted-foreground text-sm mb-6">
          You chose to pay with <span className="capitalize font-medium text-foreground">{booking.paymentMethod}</span>.
        </p>

        <div className="text-4xl font-display mb-8">
          {formatNGN(booking.totalAmount)}
        </div>

        <button
          onClick={handleSimulatePayment}
          className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
        >
          Simulate Payment Success
        </button>

        <p className="mt-4 text-xs text-muted-foreground">
          For this MVP demo, click the button above to simulate a successful payment transaction via the chosen provider.
        </p>
        
        <div className="mt-8">
          <Link to={`/book/${booking.apartmentId}`} className="text-sm underline text-muted-foreground">
            Cancel and return
          </Link>
        </div>
      </div>
    </div>
  );
}
