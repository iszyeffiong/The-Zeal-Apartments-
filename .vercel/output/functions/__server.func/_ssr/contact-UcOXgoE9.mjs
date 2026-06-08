import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as Phone, a as Mail, c as MessageCircle, b as MapPin, S as Send } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function Contact() {
  const [submitting, setSubmitting] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl md:text-6xl", children: "Let's talk." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Reservations, special requests, or a question about your upcoming stay - we'd love to hear from you." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        [{
          icon: Phone,
          label: "Phone",
          value: "+234 800 000 0000",
          href: "tel:+2348000000000"
        }, {
          icon: Mail,
          label: "Email",
          value: "info@rylmeapartments.com",
          href: "mailto:info@rylmeapartments.com"
        }, {
          icon: MessageCircle,
          label: "WhatsApp",
          value: "Chat with us",
          href: "https://wa.me/2349028302100"
        }, {
          icon: MapPin,
          label: "Location",
          value: "Uyo, Akwa Ibom State"
        }].map(({
          icon: Icon,
          label,
          value,
          href
        }) => {
          const content = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-secondary text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-medium", children: value })
            ] })
          ] });
          return href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "block transition hover:-translate-y-0.5", children: content }, label) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: content }, label);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full overflow-hidden rounded-2xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Map of Uyo", src: "https://www.google.com/maps?q=Uyo,+Akwa+Ibom,+Nigeria&output=embed", className: "h-full w-full", loading: "lazy" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          toast.success("Message sent. We'll be in touch shortly.");
          e.target.reset();
        }, 700);
      }, className: "rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "name", label: "Name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "email", label: "Email", type: "email", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "phone", label: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { name: "message", label: "Message", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: submitting, className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60 hover:bg-primary/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
          " ",
          submitting ? "Sending…" : "Send message"
        ] })
      ] })
    ] })
  ] });
}
function Input({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...props, className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" })
  ] });
}
function Textarea({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, ...props, className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" })
  ] });
}
export {
  Contact as component
};
