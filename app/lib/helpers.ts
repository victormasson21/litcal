import { MonthName, dayCount, QuoteDaysByMonth } from "@/app/types/types";
import { Quote } from "@/app/types/types";

export const getDayPath = (monthName: MonthName, day: number): string =>
  `${monthName}/${day}`;

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

// TODO: Turn into SQL query for year level
export const getQuoteDaysByMonth = (
  quotes: Array<Pick<Quote, "month" | "day">>
): QuoteDaysByMonth =>
  quotes.reduce((grouped, quote: Pick<Quote, "month" | "day">) => {
    // TODO: lower case the month in the data
    const key = quote.month.toLowerCase() as MonthName;
    if (grouped[key]) {
      grouped[key].push(quote.day);
    } else {
      grouped[key] = [quote.day];
    }
    return grouped;
  }, {} as QuoteDaysByMonth);
