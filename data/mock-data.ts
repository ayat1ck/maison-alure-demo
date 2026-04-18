import { FaqItem, ItemCard, MembershipPlan, RentalOrder } from "@/types";

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

export const faqItems: FaqItem[] = [
  {
    question: "How do rentals work?",
    answer:
      "Members choose pieces from the curated wardrobe, select rental dates, and receive insured delivery. Each rotation follows your plan limits; you can swap when your window ends or extend if the item is available. One-time rentals follow the same flow with a single checkout."
  },
  {
    question: "How are deposits handled?",
    answer:
      "A refundable deposit is authorized (not charged as a purchase) for the value tier of the item. It is released after return and inspection, minus any damage or late fees per the rental agreement. Concierge can walk you through limits before you confirm."
  },
  {
    question: "What does authentication include?",
    answer:
      "Pieces go through provenance checks, condition documentation, and internal verification before they are listed. High-value items may include additional documentation. Status is shown on each listing as Verified or In review so you know where it stands."
  },
  {
    question: "How do returns and cleaning work?",
    answer:
      "Use the prepaid return packaging and scheduled pickup or drop-off. Items are inspected, professionally cleaned, and re-listed. Minor wear within normal use is expected; anything beyond that is assessed transparently with photos and member communication."
  },
  {
    question: "How does AI styling generate recommendations?",
    answer:
      "The assistant uses your saved sizes, preferences, and past rotations to suggest outfits and complementary pieces from the catalog. It is advisory only—you always choose what to rent—and recommendations improve as you add favorites and feedback."
  },
  {
    question: "Can I use one-time rentals without membership?",
    answer:
      "Yes. One-time rentals let you book individual pieces for a defined period without a monthly membership, subject to availability and the same trust and deposit rules. Membership remains the best fit if you rotate often or want priority access."
  }
];
