import { createFileRoute } from '@tanstack/react-router'
import { useNavigate } from "@tanstack/react-router";
import { getBookingsByEmail } from "@/lib/db";
import { formatNGN } from "@/lib/apartments";
import { format } from "date-fns";
import { useState } from "react";

export const fetchMyBookings = async ({ data }: { data: { email: string } }) => {
  return getBookingsByEmail(data.email);
};

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = await fetchMyBookings({ data: { email } });
    setBookings(data);
    setSubmittedEmail(email);
    setLoading(false);
  };

  if (!submittedEmail) {
    return (
      <div className="container-page py-20 flex justify-center">
        <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8">
          <h1 className="font-display text-2xl mb-2 text-center">My Bookings</h1>
          <p className="text-muted-foreground text-sm mb-6 text-center">
            Enter your email to view your reservations and download receipts.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Email address</label>
              <input 
                type="email" 
                required 
                className="field w-full" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="you@example.com"
              />
            </div>
            <button type="submit" disabled={loading} className="w-full rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-50">
              {loading ? "Loading..." : "View Bookings"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-12 md:py-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl">My Bookings</h1>
          <p className="text-muted-foreground mt-1">Logged in as {submittedEmail}</p>
        </div>
        <button onClick={() => setSubmittedEmail("")} className="text-sm underline text-muted-foreground">Sign out</button>
      </div>

      {bookings.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-12 text-center">
          <h2 className="text-xl font-medium mb-2">No bookings found</h2>
          <p className="text-muted-foreground mb-6">You haven't made any reservations with this email address.</p>
          <button onClick={() => navigate({ to: "/" })} className="rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground">Browse Apartments</button>
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map(b => (
            <div key={b.id} className="rounded-2xl border border-border bg-card overflow-hidden md:flex">
              <div className="p-6 md:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${b.status === 'PAID' ? 'bg-green-100 text-green-700' : b.status === 'PENDING' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    {b.status}
                  </span>
                  <span className="text-sm text-muted-foreground">ID: {b.id.slice(0,8)}</span>
                </div>
                <h3 className="font-display text-2xl mb-1">{b.apartmentName}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {format(new Date(b.checkIn), "MMM d, yyyy")} – {format(new Date(b.checkOut), "MMM d, yyyy")}
                </p>
                <div className="flex gap-4 text-sm">
                  <div><span className="text-muted-foreground block text-xs uppercase tracking-wider mb-0.5">Guests</span> {b.guests}</div>
                  <div><span className="text-muted-foreground block text-xs uppercase tracking-wider mb-0.5">Total</span> {formatNGN(b.totalAmount)}</div>
                </div>
              </div>
              <div className="border-t border-border md:border-t-0 md:border-l md:w-1/3 p-6 bg-muted/20 flex flex-col justify-center gap-3">
                {b.status === "PENDING" && (
                  <button onClick={() => navigate({ to: "/checkout/$id", params: { id: b.id } })} className="w-full rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground text-center">
                    Complete Payment
                  </button>
                )}
                {b.status === "PAID" && (
                  <button className="w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-center shadow-sm hover:bg-muted">
                    Download Receipt
                  </button>
                )}
                <button className="text-sm text-red-500 hover:underline">Cancel Booking</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
