import { Day, MonthName, MonthPath, NumberOfDays } from "@/app/types/types";
import { MonthKey, Quote, Quotes, QuoteDaysByMonth } from "@/app/types/types";

export const getDayPath = (monthPath: MonthPath, day: number): string =>
  `${monthPath}/${day}`;

export const getMonthKey = (month: MonthName | MonthPath): MonthKey =>
  month.slice(0, 3).toUpperCase();

export const getDays = (numberOfDays: NumberOfDays): number[] =>
  Array.from({ length: numberOfDays }, (_, i) => i + 1);

export const getWeeks = (numberOfDays: NumberOfDays) => {
  const days = getDays(numberOfDays);

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
};

// TODO: Turn into SQL query
export const getQuoteDaysByMonth = (quotes: Quotes): QuoteDaysByMonth =>
  quotes.reduce((grouped, quote: Quote) => {
    const key = getMonthKey(quote.month);
    if (grouped[key]) {
      grouped[key].push(quote.day);
    } else {
      grouped[key] = [quote.day];
    }
    return grouped;
  }, {} as QuoteDaysByMonth);

// TODO: Turn into SQL query
// Have an ID for each day (nth day of the year) for direct access
export const getTodaysQuote = (
  quotes: Quotes,
  month: MonthName,
  day: Day
): Quote => {
  const matchingQuotes = quotes.filter(
    ({ day: quoteDay, month: quoteMonth }) =>
      quoteMonth === month && quoteDay === day
  );
  if (matchingQuotes.length > 1)
    throw new Error(`Too many matching quotes: ${matchingQuotes.length}`);

  return matchingQuotes[0];
};
