import { MonthName } from "@/app/types/types";
import { monthNames } from "./months";
import { NavLinks } from "@/app/components/nav/nav";

export const getMonthNavLinks = (monthName: MonthName): NavLinks => {
  const monthIndex = monthNames.indexOf(monthName);
  const prevMonth =
    monthNames[monthIndex - 1] || monthNames[monthNames.length - 1];
  const nextMonth = monthNames[monthIndex + 1] || monthNames[0];
  return {
    left: { url: `/${prevMonth}`, text: prevMonth.slice(0, 3) },
    center: { url: `/`, text: "year" },
    right: { url: `/${nextMonth}`, text: nextMonth.slice(0, 3) },
  };
};
