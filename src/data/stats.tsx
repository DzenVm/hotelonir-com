// src/data/stats.ts
import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";
import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "700+",
    icon: <BsBarChartFill size={34} className="uniq-text-red-500" />,
    description:
      "Verified properties with in-house entertainment lounges—ready for instant booking.",
  },
  {
    title: "4.9",
    icon: <BsFillStarFill size={34} className="uniq-text-yellow-500" />,
    description:
      "Average rating based on real guest feedback from bookings made through our platform.",
  },
  {
    title: "100+",
    icon: <PiGlobeFill size={34} className="uniq-text-green-600" />,
    description:
      "Locations across Poland—from major cities to peaceful resort towns.",
  },
];
