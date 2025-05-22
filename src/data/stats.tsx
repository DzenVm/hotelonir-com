import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";
import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "700+",
    icon: <BsBarChartFill size={34} className="text-red-500" />,
    description:
      "Zweryfikowanych obiektów z kasynami — gotowych do natychmiastowej rezerwacji.",
  },
  {
    title: "4.9",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description:
      "Ocena na podstawie opinii graczy i gości korzystających z systemu rezerwacyjnego.",
  },
  {
    title: "100+",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description:
      "Lokalizacji w całej Polsce — zarówno w dużych miastach, jak i miejscowościach wypoczynkowych.",
  },
];
