import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logoUrl from "../assets/logo.webp";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary text-secondary-foreground">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img src={logoUrl} alt="Rylme Logo" className="h-14 w-auto object-contain" />
          </div>
          <p className="mt-4 max-w-md text-sm text-secondary-foreground/75 leading-relaxed">
            Boutique short-let and serviced apartments in Shelter Afrique Estate, Uyo, Akwa Ibom State.
            Designed for travelers who notice the details.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-secondary-foreground/20 hover:bg-secondary-foreground/10"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-secondary-foreground/20 hover:bg-secondary-foreground/10"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/80">
            <li><Link to="/apartments" className="hover:text-accent">Apartments</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/amenities" className="hover:text-accent">Amenities</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /> +234 902 830 2100</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /> hello@rylmestays.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> Shelter Afrique Estate, Uyo, Akwa Ibom State</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="container-page py-6 text-xs text-secondary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Rylme Apartments. All rights reserved.</span>
          <span>Crafted with care in Uyo.</span>
        </div>
      </div>
    </footer>
  );
}