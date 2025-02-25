import { Day, MonthName } from "@/app/types/types";
import { months as monthNames } from "./months";
import { Links } from "@/app/components/common/navigation";

export const getMonthNavLinks = (monthName: MonthName): Links => {
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

export const getDayNavLinks = (day: Day, monthName: MonthName): Links => {
  // TODO: find next available quote

  const monthIndex = monthNames.indexOf(monthName);
  const prevMonth =
    monthNames[monthIndex - 1] || monthNames[monthNames.length - 1];
  const nextMonth = monthNames[monthIndex + 1] || monthNames[0];

  return {
    left: { url: `/${prevMonth}`, text: prevMonth.slice(0, 3) },
    center: { url: `/${monthName}`, text: monthName },
    right: { url: `/${nextMonth}`, text: nextMonth.slice(0, 3) },
  };
};
