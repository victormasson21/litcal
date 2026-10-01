import { MonthName } from "@/app/types/types";
import { getNextMonth, getPreviousMonth } from "./helpers";
import { NavLinks } from "@/app/components/nav/nav";

export const getMonthNavLinks = (monthName: MonthName): NavLinks => {
  const prevMonth = getPreviousMonth(monthName);
  const nextMonth = getNextMonth(monthName);
  return {
    left: { url: `/${prevMonth}` },
    center: { url: `/` },
    right: { url: `/${nextMonth}` },
  };
};
