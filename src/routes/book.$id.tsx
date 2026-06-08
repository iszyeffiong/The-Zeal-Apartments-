import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getApartment, formatNGN, type Apartment } from "@/lib/apartments";
import { Check, ArrowRight, ArrowLeft, PartyPopper } from "lucide-react";
import { getUnavailableDates, createPendingBooking } from "@/lib/bookings.server";
import { Calendar } from "@/components/ui/calendar";
import { format, addDays, startOfDay } from "date-fns";
import type { DateRange } from "react-day-picker";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/book/$id")({
  loader: async ({ params }) => {
    const apt = getApartment(params.id);
    if (!apt) throw notFound();
    const unavailable = await getUnavailableDates({ data: { apartmentId: apt.id } });
    return { apt, unavailable };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `Book ${loaderData.apt.name} - Rylme Apartments` : "Book - Rylme" }],
  }),
  component: Book,
});

const steps = ["Dates", "Guest details", "Review", "Confirmation"] as const;

function Book() {
  const { apt, unavailable } = Route.useLoaderData() as { apt: Apartment, unavailable: {from: string, to: string}[] };
  const navigate = useNavigate();
  const today = startOfDay(new Date());
  
  const [date, setDate] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 1),
  });
  
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    guests: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
    payment: "pay on delivery" as "pay on delivery" | "flutterwave" | "transfer",
  });
  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));

  const nights = (date?.from && date?.to) ? Math.max(1, Math.round((+date.to - +date.from) / 86400000)) : 0;
  const total = apt.pricePerNight * nights;

  const disabledDays = unavailable.map(u => ({ from: new Date(u.from), to: new Date(u.to) }));
  disabledDays.push({ from: new Date(0), to: addDays(today, -1) }); // disable past dates

  const handleBooking = async () => {
    if (!date?.from || !date?.to) return;
    const booking = await createPendingBooking({
      data: {
        apartmentId: apt.id,
        apartmentName: apt.name,
        checkIn: date.from.toISOString(),
        checkOut: date.to.toISOString(),
        guests: form.guests,
        name: form.name,
        email: form.email,
        phone: form.phone,
        notes: form.notes,
        paymentMethod: form.payment,
        totalAmount: total,
      }
    });
    // Navigate to dummy checkout
    navigate({ to: "/checkout/$id", params: { id: booking.id } });
  };

  return (
    <div className="container-page max-w-5xl py-12 md:py-20">
      <Link to="/apartments/$id" params={{ id: apt.id }} className="inline-flex items-center gap-1 text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to apartment
      </Link>

      <div className="mt-8 grid gap-10 md:gap-12 md:grid-cols-2">
        <div>
          {/* Stepper */}
          <ol className="flex flex-wrap gap-1 text-[11px]">
            {steps.map((s, i) => (
              <li key={s} className={`flex items-center gap-1.5 rounded-full border px-2 py-0.5 ${i === step ? "border-[#A84A3B] bg-[#A84A3B] text-white" : i < step ? "border-primary/40 text-primary" : "border-border text-muted-foreground"}`}>
                <span className={`grid h-3.5 w-3.5 place-items-center rounded-full text-[9px] ${i <= step ? "bg-background/20 text-current" : "bg-muted text-muted-foreground"}`}>{i < step ? <Check className="h-2 w-2" /> : i + 1}</span>
                {s}
              </li>
            ))}
          </ol>

          <div className="mt-4">
            {step === 0 && (
              <div className="space-y-3">
                <h2 className="font-display text-[16px] md:text-[18px] text-[#1a2530]">When are you visiting?</h2>
                
                <div className="calendar-override flex justify-center rounded-2xl p-3 md:p-4 bg-[#f9f7f2] border border-border/50">
                  <style dangerouslySetInnerHTML={{__html: `
                    .calendar-override > div {
                       --cell-size: 1.75rem !important;
                    }
                    .calendar-override .rdp-caption_label,
                    .calendar-override .rdp-weekday,
                    .calendar-override .rdp-day {
                       font-size: 0.75rem !important;
                    }
                    .calendar-override button[data-range-start="true"],
                    .calendar-override button[data-range-end="true"] {
                       background-color: #A84A3B !important;
                       color: white !important;
                       border-radius: 6px !important;
                    }
                    .calendar-override button[data-range-end="true"] {
                       box-shadow: 0 0 0 4px rgba(168, 74, 59, 0.2) !important;
                    }
                    .calendar-override button[data-range-middle="true"] {
                       background-color: #D4B671 !important;
                       color: #1a2530 !important;
                       border-radius: 0 !important;
                    }
                    .calendar-override .rdp-day {
                       color: #1a2530;
                    }
                    .calendar-override .rdp-button:hover:not([data-range-start="true"]):not([data-range-end="true"]):not([data-range-middle="true"]) {
                       background-color: #eaddc4 !important;
                    }
                  `}} />
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={1}
                    disabled={disabledDays}
                    className="bg-transparent"
                  />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1.5">Guests</p>
                  <select value={form.guests} onChange={(e) => update("guests", +e.target.value)} className="w-full rounded-xl border border-border bg-[#f9f7f2]/50 p-2.5 text-[14px] outline-none focus:border-[#A84A3B] transition-colors">
                    {Array.from({ length: apt.guests }).map((_, n) => <option key={n + 1} value={n + 1}>{n + 1} {n === 0 ? "guest" : "guests"}</option>)}
                  </select>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <h2 className="font-display text-[16px] md:text-[18px] text-[#1a2530]">Who's staying?</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Field label="Full name"><input required value={form.name} onChange={(e) => update("name", e.target.value)} className="field" /></Field>
                  <Field label="Email"><input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className="field" /></Field>
                </div>
                <Field label="Phone"><input value={form.phone} onChange={(e) => update("phone", e.target.value)} className="field" /></Field>
                <Field label="Special requests (optional)"><textarea rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} className="field" /></Field>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="font-display text-[16px] md:text-[18px] text-[#1a2530]">Review &amp; pay</h2>
                <dl className="grid sm:grid-cols-2 gap-3 text-sm">
                  <Row k="Apartment" v={apt.name} />
                  <Row k="Check-in" v={date?.from ? format(date.from, "PPP") : "-"} />
                  <Row k="Check-out" v={date?.to ? format(date.to, "PPP") : "-"} />
                  <Row k="Guests" v={String(form.guests)} />
                  <Row k="Name" v={form.name || "-"} />
                  <Row k="Email" v={form.email || "-"} />
                </dl>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Payment method</p>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {(["pay on delivery", "flutterwave", "transfer"] as const).map((p) => (
                      <button key={p} type="button" onClick={() => update("payment", p)} className={`rounded-xl border px-4 py-3 text-[13px] capitalize transition ${form.payment === p ? "border-[#A84A3B] bg-[#A84A3B]/5 text-[#A84A3B] font-medium" : "border-border hover:bg-secondary/50"}`}>
                        {p === "transfer" ? "Bank transfer" : p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-8">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary"><PartyPopper className="h-8 w-8" /></div>
                <h2 className="mt-6 font-display text-3xl">Reservation received.</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">Thank you, {form.name || "friend"}. We'll email you a confirmation and payment instructions within a few minutes.</p>
                <Link to="/" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Back to home</Link>
              </div>
            )}

            {step < 3 && (
              <div className="mt-6 flex justify-between items-center">
                <button disabled={step === 0} onClick={() => setStep((s) => s - 1)} className={`rounded-full border border-border px-5 py-2 text-[13px] font-medium transition-opacity ${step === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-secondary'}`}>Back</button>
                <button
                  onClick={() => {
                    if (step === 0 && (!date?.from || !date?.to)) return;
                    if (step === 1 && (!form.name || !form.email)) return;
                    if (step === 2) {
                      handleBooking();
                      return;
                    }
                    setStep((s) => s + 1);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#A84A3B] px-5 py-2 text-[13px] font-medium text-white hover:bg-[#8F3F32] transition-colors"
                >
                  {step === 2 ? "Confirm reservation" : "Continue"} <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <aside className="md:sticky md:top-24 self-start rounded-2xl border border-border bg-card overflow-hidden">
          <img src={apt.cover} alt={apt.name} className="h-44 w-full object-cover" />
          <div className="p-6">
            <h3 className="font-display text-2xl">{apt.name}</h3>
            <p className="text-sm text-muted-foreground">{apt.tagline}</p>
            <div className="mt-5 space-y-3 text-[15px] border-t border-border pt-5">
              <div className="flex justify-between text-foreground/80">
                <span>{formatNGN(apt.pricePerNight)} × {nights} nights</span>
                <span>{formatNGN(total)}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-4 font-display text-[22px] text-[#1a2530]">
                <span>Total</span>
                <span>{formatNGN(total)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/50 px-3 py-2">
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{k}</dt>
      <dd className="mt-0.5 font-medium">{v}</dd>
    </div>
  );
}