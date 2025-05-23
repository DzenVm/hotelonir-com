// src/data/benefits.ts
import { IBenefit } from "@/types";
import { 
  FaBed, 
  FaDice, 
  FaConciergeBell 
} from "react-icons/fa";

export const benefits: IBenefit[] = [
  {
    title: "Seamless Booking Experience",
    description: 
      "Enjoy a hassle-free reservation process with instant confirmation and 24/7 support—no hidden fees, ever.",
    imageSrc: "/images/benefit-booking.jpg",
    bullets: [
      {
        icon: <FaBed size={24} />,
        title: "Real-Time Availability",
        description: 
          "Get up-to-the-second room status across all our partnered venues.",
      },
      {
        icon: <FaConciergeBell size={24} />,
        title: "Dedicated Concierge",
        description: 
          "Our team assists with every detail—from check-in to special requests.",
      },
    ],
  },
  {
    title: "Vibrant Entertainment Lounges",
    description:
      "Discover uniquely themed lounges in-house—perfect for unwinding after a day of exploring.",
    imageSrc: "/images/benefit-lounge.jpg",
    bullets: [
      {
        icon: <FaDice size={24} />,
        title: "Game Venue Access",
        description:
          "Play your favorite table games in a safe, licensed environment.",
      },
      {
        icon: <FaConciergeBell size={24} />,
        title: "Live Music & Events",
        description:
          "Enjoy curated live performances and special events nightly.",
      },
    ],
  },
  {
    title: "Tailored Wellness Retreats",
    description:
      "Revitalize with our spa and wellness packages—customized to your preferences.",
    imageSrc: "/images/benefit-spa.jpg",
    bullets: [
      {
        icon: <FaConciergeBell size={24} />,
        title: "Personalized Spa Services",
        description:
          "Choose from massages, facials, and holistic therapies designed for you.",
      },
      {
        icon: <FaBed size={24} />,
        title: "Comfort-First Suites",
        description:
          "Relax in suites equipped with ergonomic bedding and calming interiors.",
      },
    ],
  },
];
