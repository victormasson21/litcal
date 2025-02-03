import { Day, MonthName, NumberOfDays } from "@/app/types/types";
import { Quote, Quotes, QuoteDaysByMonth } from "@/app/types/types";

export const getDayPath = (monthName: MonthName, day: number): string =>
  `${monthName}/${day}`;

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
    // TODO: lower case the month in the data
    const key = quote.month.toLowerCase() as MonthName;
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
      // TODO: lower case the month in the data
      quoteMonth.toLowerCase() === month && quoteDay === day
  );
  if (matchingQuotes.length > 1)
    throw new Error(`Too many matching quotes: ${matchingQuotes.length}`);

  return matchingQuotes[0];
};
