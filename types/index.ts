export type CtaVariant = "primary" | "secondary" | "ghost" | "text" | "icon";

export interface ItemCard {
  id: string;
  name: string;
  brand: string;
  category: string;
  color: string;
  size: string;
  condition: "Excellent" | "Very good" | "Good";
  authenticationStatus: "Verified" | "In review";
  deposit: number;
  rentalFrom: number;
  availability: "Available" | "Booked soon" | "Waitlist";
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  rotations: string;
  bestFor: string;
  features: string[];
}

export interface RentalOrder {
  id: string;
  item: string;
  status: "Active" | "Upcoming return" | "Completed";
  deliveryDate: string;
  returnDate: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
