import { MonthName } from "@/app/types/types";
import { getNextMonth, getPreviousMonth } from "./helpers";
import { NavLinks } from "@/app/components/nav/nav";

export const getMonthNavLinks = (monthName: MonthName): NavLinks => {
  const prevMonth = getPreviousMonth(monthName);
  const nextMonth = getNextMonth(monthName);
  // TODO: remove text if un-used
  return {
    left: { url: `/${prevMonth}`, text: prevMonth.slice(0, 3) },
    center: { url: `/`, text: "year" },
    right: { url: `/${nextMonth}`, text: nextMonth.slice(0, 3) },
  };
};
