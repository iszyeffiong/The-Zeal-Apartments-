import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "../assets/logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/apartments", label: "Apartments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/amenities", label: "Amenities" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/dashboard", label: "My Bookings" },
  { to: "/admin", label: "Admin" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex min-h-20 py-2 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoUrl} alt="Rylme Logo" className="h-16 md:h-20 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/apartments"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Book Now
        </Link>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container-page flex flex-col py-4 gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-foreground">
                {n.label}
              </Link>
            ))}
            <Link to="/apartments" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-primary-foreground">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}