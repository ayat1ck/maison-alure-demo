import { ItemCard, MembershipPlan, RentalOrder } from "@/types";

export const brandAssets = {
  logo: "/images/maison-alure-logo.png",
  hero: "/images/closet-shirts.png",
  galleryA: "/images/bags-showcase.png",
  galleryB: "/images/closet-shoes.png"
};

export const mainNav = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/membership", label: "Membership" },
  { href: "/catalog", label: "Browse wardrobe" },
  { href: "/ai-styling", label: "AI styling" },
  { href: "/trust", label: "Trust" },
  { href: "/contact", label: "Join waitlist" }
];

export const trustPillars = [
  "Two-sided authentication",
  "Digital item identity",
  "Deposit-based security",
  "Community reputation layer",
  "Controlled item integrity",
  "Centralized cleaning and care standards"
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: "signature",
    name: "Signature",
    monthlyPrice: 169,
    rotations: "2 item rotations / month",
    bestFor: "Entry to members-only access",
    features: ["AI styling recommendations", "Delivery + pickup", "Member trust badge"]
  },
  {
    id: "atelier",
    name: "Atelier",
    monthlyPrice: 329,
    rotations: "5 item rotations / month",
    bestFor: "Weekly wardrobe refresh",
    features: ["Priority reservation", "Concierge scheduling", "Occasion look bundles"]
  },
  {
    id: "maison",
    name: "Maison Privé",
    monthlyPrice: 579,
    rotations: "10 item rotations / month",
    bestFor: "High-frequency luxury rotation",
    features: ["VIP concierge", "Premium insurance layer", "Personal style roadmap"]
  }
];

export const featuredItems: ItemCard[] = [
  {
    id: "fendi-baguette",
    name: "Fendi Baguette",
    brand: "Fendi",
    category: "Bags",
    color: "Chocolate",
    size: "One size",
    condition: "Excellent",
    authenticationStatus: "Verified",
    deposit: 350,
    rentalFrom: 65,
    availability: "Available",
    image: "/images/bags-showcase.png"
  },
  {
    id: "silk-occasion-set",
    name: "Silk Occasion Set",
    brand: "Maison Alure Curated",
    category: "Complete looks",
    color: "Cream",
    size: "S-M",
    condition: "Very good",
    authenticationStatus: "Verified",
    deposit: 290,
    rentalFrom: 55,
    availability: "Booked soon",
    image: "/images/closet-shirts.png"
  },
  {
    id: "minimalist-heels-edit",
    name: "Minimalist Heels Edit",
    brand: "Bottega Veneta",
    category: "Accessories",
    color: "Beige",
    size: "38",
    condition: "Excellent",
    authenticationStatus: "Verified",
    deposit: 260,
    rentalFrom: 48,
    availability: "Available",
    image: "/images/closet-shoes.png"
  }
];

export const rentalOrders: RentalOrder[] = [
  {
    id: "MA-1004",
    item: "Fendi Baguette",
    status: "Active",
    deliveryDate: "Apr 18",
    returnDate: "Apr 24"
  },
  {
    id: "MA-1001",
    item: "Silk Occasion Set",
    status: "Upcoming return",
    deliveryDate: "Apr 10",
    returnDate: "Apr 19"
  },
  {
    id: "MA-0997",
    item: "Chanel Evening Bag",
    status: "Completed",
    deliveryDate: "Apr 02",
    returnDate: "Apr 08"
  }
];

export const faqItems = [
  "How do rentals work?",
  "How are deposits handled?",
  "What does authentication include?",
  "How do returns and cleaning work?",
  "How does AI styling generate recommendations?",
  "Can I use one-time rentals without membership?"
];
