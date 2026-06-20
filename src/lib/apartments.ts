import studio from "@/assets/studio.jpg";
import executive from "@/assets/executive.jpg";
import luxury from "@/assets/luxury.jpg";
import kitchen from "@/assets/kitchen.jpg";
import exterior from "@/assets/exterior.jpg";
import hero from "@/assets/hero.jpg";

export type Apartment = {
  id: string;
  name: string;
  tagline: string;
  pricePerNight: number;
  weeklyRate: number;
  monthlyRate: number;
  guests: number;
  beds: string;
  size: string;
  cover: string;
  gallery: string[];
  description: string;
  amenities: string[];
};

export const apartments: Apartment[] = [
  {
    id: "standard-studio",
    name: "Standard Studio",
    tagline: "A cozy and minimal space for quick visits.",
    pricePerNight: 25000,
    weeklyRate: 150000,
    monthlyRate: 500000,
    guests: 2,
    beds: "1 Double",
    size: "25 m²",
    cover: studio,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "Compact and efficient, featuring everything you need for a comfortable short stay in Uyo.",
    amenities: ["Double Bed", "Smart TV", "Air Conditioning", "Free WiFi", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "deluxe-studio",
    name: "Deluxe Studio",
    tagline: "A refined retreat for solo travelers and couples.",
    pricePerNight: 35000,
    weeklyRate: 210000,
    monthlyRate: 750000,
    guests: 2,
    beds: "1 Queen",
    size: "32 m²",
    cover: studio,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "Our Deluxe Studio pairs warm terracotta walls with brass fixtures and crisp white linens. A queen bed, kitchenette and smart TV make it ideal for short business trips and weekend getaways.",
    amenities: ["Queen Bed", "Smart TV with Netflix", "Air Conditioning", "Kitchenette", "Free High-Speed WiFi", "24/7 Power", "Daily Housekeeping", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "premium-studio",
    name: "Premium Studio",
    tagline: "Elevated comfort with extra space.",
    pricePerNight: 45000,
    weeklyRate: 280000,
    monthlyRate: 950000,
    guests: 2,
    beds: "1 King",
    size: "40 m²",
    cover: studio,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "Enjoy a larger floor plan, premium bedding, and a dedicated workspace in our top-tier studio apartment.",
    amenities: ["King Bed", "Smart TV with Netflix", "Workspace", "Kitchenette", "Free WiFi", "24/7 Power", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "classic-one-bedroom",
    name: "Classic One Bedroom",
    tagline: "A home away from home.",
    pricePerNight: 40000,
    weeklyRate: 250000,
    monthlyRate: 850000,
    guests: 2,
    beds: "1 Queen",
    size: "48 m²",
    cover: executive,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "A comfortable one-bedroom apartment with a separate living area and kitchen, perfect for longer stays.",
    amenities: ["Queen Bed", "Living Room", "Full Kitchen", "Air Conditioning", "Free WiFi", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "executive-one-bedroom",
    name: "Executive One Bedroom",
    tagline: "Generous living for visiting executives and creatives.",
    pricePerNight: 50000,
    weeklyRate: 315000,
    monthlyRate: 1150000,
    guests: 3,
    beds: "1 King + Sofa",
    size: "58 m²",
    cover: executive,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "An open-plan living room with a forest-green accent wall flows into a private bedroom with king bed. Cook in the full kitchen or unwind on the balcony after a long day in Uyo.",
    amenities: ["King Bed", "Private Living Room", "Smart TV with Netflix", "Full Kitchen", "Air Conditioning", "Workspace", "Free WiFi", "Daily Housekeeping", "Secure Parking", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "signature-one-bedroom",
    name: "Signature One Bedroom",
    tagline: "Our most popular one-bedroom suite.",
    pricePerNight: 60000,
    weeklyRate: 380000,
    monthlyRate: 1300000,
    guests: 3,
    beds: "1 King + Sofa",
    size: "65 m²",
    cover: executive,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "Expansive layout featuring bespoke furniture, a premium kitchen, and a private balcony with city views.",
    amenities: ["King Bed", "Premium Kitchen", "Balcony", "2 Smart TVs", "Free WiFi", "24/7 Security", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "family-two-bedroom",
    name: "Family Two Bedroom",
    tagline: "Comfort and space for the whole family.",
    pricePerNight: 65000,
    weeklyRate: 400000,
    monthlyRate: 1500000,
    guests: 4,
    beds: "2 Queen",
    size: "80 m²",
    cover: luxury,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "Two comfortable bedrooms and a spacious living area make this ideal for family vacations.",
    amenities: ["Two Queen Beds", "Spacious Living Room", "Kitchen", "Free WiFi", "24/7 Power", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "luxury-two-bedroom",
    name: "Luxury Two Bedroom",
    tagline: "A boutique apartment for families and small groups.",
    pricePerNight: 75000,
    weeklyRate: 475000,
    monthlyRate: 1750000,
    guests: 5,
    beds: "1 King + 2 Twin",
    size: "92 m²",
    cover: luxury,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "Two bedrooms, a dining area for six and a sun-drenched balcony. The Luxury Two Bedroom is our flagship apartment - designed for families, event guests and longer stays.",
    amenities: ["Two Bedrooms", "Dining for Six", "Two Smart TVs", "Fully Equipped Kitchen", "Private Balcony", "Washer & Dryer", "Air Conditioning", "Free WiFi", "24/7 Security", "Generator Backup", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "garden-suite",
    name: "Garden Suite",
    tagline: "Peaceful ground-floor living.",
    pricePerNight: 85000,
    weeklyRate: 520000,
    monthlyRate: 1900000,
    guests: 4,
    beds: "1 King + 1 Queen",
    size: "100 m²",
    cover: luxury,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "A beautiful two-bedroom suite with direct access to a private landscaped garden.",
    amenities: ["Private Garden", "Two Bedrooms", "Full Kitchen", "Premium Setup", "Free WiFi", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "business-suite",
    name: "Business Suite",
    tagline: "Designed for productivity and rest.",
    pricePerNight: 55000,
    weeklyRate: 350000,
    monthlyRate: 1250000,
    guests: 2,
    beds: "1 King",
    size: "60 m²",
    cover: executive,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "Features a dedicated office space alongside a luxurious bedroom and living area.",
    amenities: ["Home Office", "King Bed", "Fast WiFi", "Printer/Scanner", "Kitchen", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "penthouse-suite",
    name: "Penthouse Suite",
    tagline: "Top floor luxury with panoramic views.",
    pricePerNight: 120000,
    weeklyRate: 750000,
    monthlyRate: 2800000,
    guests: 6,
    beds: "2 King + 1 Queen",
    size: "150 m²",
    cover: hero,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "Our exclusive three-bedroom penthouse offers the ultimate Zeal experience with wrap-around balconies and premium finishes.",
    amenities: ["Three Bedrooms", "Panoramic Views", "Chef's Kitchen", "Private Terrace", "Premium WiFi", "Dedicated Support", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    tagline: "The pinnacle of short-let living in Uyo.",
    pricePerNight: 200000,
    weeklyRate: 1200000,
    monthlyRate: 4500000,
    guests: 8,
    beds: "4 King",
    size: "250 m²",
    cover: hero,
    gallery: [studio, executive, luxury, kitchen, exterior, hero],
    description: "Four opulent bedrooms, a massive entertaining space, and unparalleled service.",
    amenities: ["Four Bedrooms", "Luxury Finishes", "Butler Service", "Secure Access", "Private Dining Room", "2 Bedrooms", "2 Bathrooms", "Spacious Living Room & Kitchen", "Snooker Table", "Poolside / Lounge"],
  }
];

export const getApartment = (id: string) => apartments.find((a) => a.id === id);

export const formatNGN = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);

export const galleryImages = [
  { src: hero, category: "Rooms", caption: "Master bedroom at golden hour" },
  { src: executive, category: "Living Areas", caption: "Executive lounge" },
  { src: luxury, category: "Living Areas", caption: "Two-bedroom living room" },
  { src: kitchen, category: "Kitchens", caption: "Marble & brass kitchen" },
  { src: exterior, category: "Exterior", caption: "The Zeal building at dusk" },
  { src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800", category: "Game Room", caption: "Indoor Game Room & Lounge" },
  { src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800", category: "Swimming Pool", caption: "Outdoor Swimming Pool" },
  { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800", category: "Bar", caption: "The Zeal Cocktail Bar" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800", category: "Restaurant", caption: "The Zeal Dining & Restaurant" },
  ...apartments.map(apt => ({ src: apt.cover, category: "Rooms" as const, caption: apt.name })),
];