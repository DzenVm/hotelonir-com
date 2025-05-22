import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";
import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "700+",
    icon: <BsBarChartFill size={34} className="text-red-500" />,
    description:
      "Dostępnych hoteli z legalnymi kasynami w największych miastach Polski.",
  },
  {
    title: "4.9",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description:
      "Średnia ocena użytkowników na podstawie ponad 12 000 opinii gości.",
  },
  {
    title: "100+",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description:
      "Miast i regionów – od Warszawy i Gdańska po góry i uzdrowiska.",
  },
];
