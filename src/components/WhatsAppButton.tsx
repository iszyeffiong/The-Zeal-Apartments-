import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348000000000?text=Hello%20Rylme%20Apartments%2C%20I%27d%20like%20to%20make%20a%20booking."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}