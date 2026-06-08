import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Rylme Apartments" },
      { name: "description", content: "Get in touch with Rylme Apartments in Uyo. Call, email, WhatsApp or send us a message." },
      { property: "og:title", content: "Contact - Rylme Apartments" },
      { property: "og:description", content: "Get in touch with Rylme Apartments." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <div className="container-page py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">Let's talk.</h1>
        <p className="mt-4 text-muted-foreground">Reservations, special requests, or a question about your upcoming stay - we'd love to hear from you.</p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: Phone, label: "WhatsApp / Phone", value: "+234 902 830 2100", href: "https://wa.me/2349028302100" },
            { icon: Mail, label: "Email", value: "hello@rylmestays.com", href: "mailto:hello@rylmestays.com" },
            { icon: MessageCircle, label: "Live Chat", value: "Chat with us", href: "#" },
            { icon: MapPin, label: "Location", value: "Shelter Afrique Estate, Akwa Ibom State" },
          ].map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-accent"><Icon className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="mt-0.5 font-medium">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block transition hover:-translate-y-0.5">{content}</a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Map of Uyo"
              src="https://www.google.com/maps?q=Uyo,+Akwa+Ibom,+Nigeria&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
              toast.success("Message sent. We'll be in touch shortly.");
              (e.target as HTMLFormElement).reset();
            }, 700);
          }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="name" label="Name" required />
            <Input name="email" label="Email" type="email" required />
          </div>
          <Input name="phone" label="Phone" />
          <Textarea name="message" label="Message" required />
          <button disabled={submitting} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60 hover:bg-primary/90">
            <Send className="h-4 w-4" /> {submitting ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <input {...props} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
    </label>
  );
}
function Textarea({ label, ...props }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <textarea rows={5} {...props} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
    </label>
  );
}