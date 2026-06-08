import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Users, Search, Home } from "lucide-react";
import { apartments } from "@/lib/apartments";

export function SearchWidget({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(2);
  const [apartmentId, setApartmentId] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (apartmentId) {
          navigate({ to: "/book/$id", params: { id: apartmentId } });
        } else {
          navigate({ to: "/apartments", search: { guests } as never });
        }
      }}
      className={`grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl shadow-black/5 ${apartmentId ? 'md:grid-cols-[1.5fr_1fr_1fr_1fr_auto]' : 'md:grid-cols-[2fr_1fr_auto]'} ${compact ? "" : "md:p-5"}`}
    >
      <Field label="Apartment" icon={<Home className="h-4 w-4 text-primary" />}>
        <select value={apartmentId} onChange={(e) => setApartmentId(e.target.value)} className="w-full bg-transparent text-sm outline-none">
          <option value="">Any apartment</option>
          {apartments.map((a) => (
            <option key={a.id} value={a.id}>{a.name}</option>
          ))}
        </select>
      </Field>
      
      {apartmentId && (
        <>
          <Field label="Check-in" icon={<Calendar className="h-4 w-4 text-primary" />}>
            <input type="date" value={checkIn} min={today} onChange={(e) => setCheckIn(e.target.value)} className="w-full bg-transparent text-sm outline-none" />
          </Field>
          <Field label="Check-out" icon={<Calendar className="h-4 w-4 text-primary" />}>
            <input type="date" value={checkOut} min={checkIn} onChange={(e) => setCheckOut(e.target.value)} className="w-full bg-transparent text-sm outline-none" />
          </Field>
        </>
      )}
      <Field label="Guests" icon={<Users className="h-4 w-4 text-primary" />}>
        <select value={guests} onChange={(e) => setGuests(+e.target.value)} className="w-full bg-transparent text-sm outline-none">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
          ))}
        </select>
      </Field>
      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
        <Search className="h-4 w-4" /> Search
      </button>
    </form>
  );
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1 rounded-xl border border-border/60 bg-background/60 px-3 py-2">
      <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">{icon} {label}</span>
      {children}
    </label>
  );
}