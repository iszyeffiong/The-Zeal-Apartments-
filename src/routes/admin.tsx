import { createFileRoute } from '@tanstack/react-router'

import { getBookings, updateBookingStatus, type BookingStatus } from "@/lib/db";
import { formatNGN } from "@/lib/apartments";
import { format } from "date-fns";
import { useState, useEffect } from "react";

export const fetchAllBookings = async () => {
  return getBookings();
};

export const updateStatus = async ({ data }: { data: { id: string, status: any } }) => {
  return updateBookingStatus(data.id, data.status as BookingStatus);
};

export const Route = createFileRoute("/admin")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchAllBookings();
    // Sort newest first
    setBookings(data.sort((a,b) => +new Date(b.createdAt) < +new Date(a.createdAt) ? 1 : -1));
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    await updateStatus({ data: { id, status: newStatus } });
    loadData();
  };

  return (
    <div className="container-page py-12 md:py-20">
      <div className="mb-8">
        <h1 className="font-display text-3xl">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">Manage all reservations and guest details.</p>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-16 bg-muted rounded-xl"></div>
          <div className="h-16 bg-muted rounded-xl"></div>
        </div>
      ) : bookings.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">No bookings have been made yet.</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-card overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 text-muted-foreground border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium">Guest</th>
                <th className="px-4 py-3 font-medium">Apartment</th>
                <th className="px-4 py-3 font-medium">Dates</th>
                <th className="px-4 py-3 font-medium">Total</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {bookings.map(b => (
                <tr key={b.id} className="hover:bg-muted/20">
                  <td className="px-4 py-4">
                    <div className="font-medium">{b.name}</div>
                    <div className="text-muted-foreground text-xs">{b.email} • {b.phone}</div>
                  </td>
                  <td className="px-4 py-4">{b.apartmentName}</td>
                  <td className="px-4 py-4">
                    {format(new Date(b.checkIn), "MMM d")} - {format(new Date(b.checkOut), "MMM d, yyyy")}
                  </td>
                  <td className="px-4 py-4 font-medium">{formatNGN(b.totalAmount)}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 text-[10px] uppercase tracking-wider rounded-md font-medium ${b.status === 'PAID' ? 'bg-green-100 text-green-700' : b.status === 'PENDING' ? 'bg-amber-100 text-amber-700' : b.status === 'COMPLETED' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <select 
                      className="text-xs border border-border rounded-md px-2 py-1 bg-background"
                      value={b.status}
                      onChange={(e) => handleStatusChange(b.id, e.target.value)}
                    >
                      <option value="PENDING">Pending</option>
                      <option value="PAID">Paid</option>
                      <option value="COMPLETED">Completed</option>
                      <option value="CANCELLED">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
