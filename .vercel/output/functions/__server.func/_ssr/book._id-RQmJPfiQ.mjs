import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as Route$1, f as formatNGN, i as createPendingBooking } from "./router-D33M5I3w.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { C as startOfDay, a as addDays, f as format } from "../_libs/date-fns.mjs";
import { p as ArrowLeft, q as Check, r as PartyPopper, A as ArrowRight, s as ChevronLeft, t as ChevronRight, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { g as getDefaultClassNames, D as DayPicker } from "../_libs/react-day-picker.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-BzYY8oOn.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/date-fns__tz.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-slot": "calendar", ref: rootRef, className: cn(className2), ...props2 });
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
const steps = ["Dates", "Guest details", "Review", "Confirmation"];
function Book() {
  const {
    apt,
    unavailable
  } = Route$1.useLoaderData();
  const navigate = useNavigate();
  const today = startOfDay(/* @__PURE__ */ new Date());
  const [date, setDate] = reactExports.useState({
    from: today,
    to: addDays(today, 1)
  });
  const [step, setStep] = reactExports.useState(0);
  const [form, setForm] = reactExports.useState({
    guests: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
    payment: "pay on delivery"
  });
  const update = (k, v) => setForm((f) => ({
    ...f,
    [k]: v
  }));
  const nights = date?.from && date?.to ? Math.max(1, Math.round((+date.to - +date.from) / 864e5)) : 0;
  const total = apt.pricePerNight * nights;
  const disabledDays = unavailable.map((u) => ({
    from: new Date(u.from),
    to: new Date(u.to)
  }));
  disabledDays.push({
    from: /* @__PURE__ */ new Date(0),
    to: addDays(today, -1)
  });
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
        totalAmount: total
      }
    });
    navigate({
      to: "/checkout/$id",
      params: {
        id: booking.id
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page max-w-5xl py-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/apartments/$id", params: {
      id: apt.id
    }, className: "inline-flex items-center gap-1 text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to apartment"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-10 md:gap-12 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex flex-wrap gap-1 text-[11px]", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `flex items-center gap-1.5 rounded-full border px-2 py-0.5 ${i === step ? "border-[#A84A3B] bg-[#A84A3B] text-white" : i < step ? "border-primary/40 text-primary" : "border-border text-muted-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid h-3.5 w-3.5 place-items-center rounded-full text-[9px] ${i <= step ? "bg-background/20 text-current" : "bg-muted text-muted-foreground"}`, children: i < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2 w-2" }) : i + 1 }),
          s
        ] }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[16px] md:text-[18px] text-[#1a2530]", children: "When are you visiting?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "calendar-override flex justify-center rounded-2xl p-3 md:p-4 bg-[#f9f7f2] border border-border/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: {
                __html: `
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
                  `
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { initialFocus: true, mode: "range", defaultMonth: date?.from, selected: date, onSelect: setDate, numberOfMonths: 1, disabled: disabledDays, className: "bg-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1.5", children: "Guests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.guests, onChange: (e) => update("guests", +e.target.value), className: "w-full rounded-xl border border-border bg-[#f9f7f2]/50 p-2.5 text-[14px] outline-none focus:border-[#A84A3B] transition-colors", children: Array.from({
                length: apt.guests
              }).map((_, n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n + 1, children: [
                n + 1,
                " ",
                n === 0 ? "guest" : "guests"
              ] }, n + 1)) })
            ] })
          ] }),
          step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[16px] md:text-[18px] text-[#1a2530]", children: "Who's staying?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.name, onChange: (e) => update("name", e.target.value), className: "field" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: form.email, onChange: (e) => update("email", e.target.value), className: "field" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.phone, onChange: (e) => update("phone", e.target.value), className: "field" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Special requests (optional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: form.notes, onChange: (e) => update("notes", e.target.value), className: "field" }) })
          ] }),
          step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[16px] md:text-[18px] text-[#1a2530]", children: "Review & pay" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid sm:grid-cols-2 gap-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Apartment", v: apt.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Check-in", v: date?.from ? format(date.from, "PPP") : "-" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Check-out", v: date?.to ? format(date.to, "PPP") : "-" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Guests", v: String(form.guests) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Name", v: form.name || "-" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Email", v: form.email || "-" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Payment method" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-2", children: ["pay on delivery", "flutterwave", "transfer"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => update("payment", p), className: `rounded-xl border px-4 py-3 text-[13px] capitalize transition ${form.payment === p ? "border-[#A84A3B] bg-[#A84A3B]/5 text-[#A84A3B] font-medium" : "border-border hover:bg-secondary/50"}`, children: p === "transfer" ? "Bank transfer" : p }, p)) })
            ] })
          ] }),
          step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PartyPopper, { className: "h-8 w-8" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl", children: "Reservation received." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground max-w-md mx-auto", children: [
              "Thank you, ",
              form.name || "friend",
              ". We'll email you a confirmation and payment instructions within a few minutes."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground", children: "Back to home" })
          ] }),
          step < 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: step === 0, onClick: () => setStep((s) => s - 1), className: `rounded-full border border-border px-5 py-2 text-[13px] font-medium transition-opacity ${step === 0 ? "opacity-0 pointer-events-none" : "hover:bg-secondary"}`, children: "Back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              if (step === 0 && (!date?.from || !date?.to)) return;
              if (step === 1 && (!form.name || !form.email)) return;
              if (step === 2) {
                handleBooking();
                return;
              }
              setStep((s) => s + 1);
            }, className: "inline-flex items-center gap-1.5 rounded-full bg-[#A84A3B] px-5 py-2 text-[13px] font-medium text-white hover:bg-[#8F3F32] transition-colors", children: [
              step === 2 ? "Confirm reservation" : "Continue",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "md:sticky md:top-24 self-start rounded-2xl border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: apt.cover, alt: apt.name, className: "h-44 w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: apt.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: apt.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-3 text-[15px] border-t border-border pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                formatNGN(apt.pricePerNight),
                " × ",
                nights,
                " nights"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatNGN(total) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border pt-4 font-display text-[22px] text-[#1a2530]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatNGN(total) })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children })
  ] });
}
function Row({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-background/50 px-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-0.5 font-medium", children: v })
  ] });
}
export {
  Book as component
};
