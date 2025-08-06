import { MonthName, dayCount } from "@/app/types/types";

type Season = "winter" | "spring" | "summer" | "autumn";
interface Month {
  dayCount: dayCount;
  mainIcon: Season;
  icons: Season[];
}

export const monthsMap: Record<MonthName, Month> = {
  january: { dayCount: 31, mainIcon: "winter", icons: ["autumn", "winter"] },
  february: { dayCount: 29, mainIcon: "winter", icons: ["winter", "spring"] },
  march: { dayCount: 31, mainIcon: "spring", icons: ["winter", "spring"] },
  april: { dayCount: 30, mainIcon: "spring", icons: ["winter", "spring"] },
  may: { dayCount: 31, mainIcon: "spring", icons: ["spring", "summer"] },
  june: { dayCount: 30, mainIcon: "summer", icons: ["spring", "summer"] },
  july: { dayCount: 31, mainIcon: "summer", icons: ["spring", "summer"] },
  august: { dayCount: 31, mainIcon: "summer", icons: ["summer", "autumn"] },
  september: { dayCount: 30, mainIcon: "autumn", icons: ["summer", "autumn"] },
  october: { dayCount: 31, mainIcon: "autumn", icons: ["summer", "autumn"] },
  november: { dayCount: 30, mainIcon: "autumn", icons: ["autumn", "winter"] },
  december: { dayCount: 31, mainIcon: "winter", icons: ["autumn", "winter"] },
};

export const monthNames: MonthName[] = Object.keys(monthsMap) as MonthName[];
