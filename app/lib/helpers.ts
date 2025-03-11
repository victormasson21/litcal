import { MonthName, dayCount, QuoteDaysByMonth } from "@/app/types/types";
import { Quote } from "@/app/types/types";
import { monthNames } from "./months";

export const getDayPath = (monthName: MonthName, day: number): string =>
  `/${monthName}/${day}`;

export const getDays = (dayCount: dayCount): number[] =>
  Array.from({ length: dayCount }, (_, i) => i + 1);

export const getWeeks = (dayCount: dayCount) => {
  const days = getDays(dayCount);

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
};

export const getPreviousMonth = (month: MonthName): MonthName => {
  const index = monthNames.indexOf(month);
  return index === 0 ? monthNames[11] : monthNames[index - 1];
};

export const getNextMonth = (month: MonthName): MonthName => {
  const index = monthNames.indexOf(month);
  return index === 11 ? monthNames[0] : monthNames[index + 1];
};

// TODO: Turn into SQL query for year level
export const getQuoteDaysByMonth = (
  quotes: Array<Pick<Quote, "month" | "day">>
): QuoteDaysByMonth =>
  quotes.reduce((grouped, quote: Pick<Quote, "month" | "day">) => {
    const key = quote.month;
    if (grouped[key]) {
      grouped[key].push(quote.day);
    } else {
      grouped[key] = [quote.day];
    }
    return grouped;
  }, {} as QuoteDaysByMonth);
