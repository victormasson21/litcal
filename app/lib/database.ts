import quotesData from '@/data/quotes.json';
import { Quote, MonthName, Day } from '@/app/types/types';
import { monthsMap } from './months';

type QuoteLocation = { day: number; month: MonthName };

const quotes = (quotesData as Quote[])
  .filter(({ display }) => display)
  .sort((a, b) => a.day - b.day);

const hasValidDate = ({ month, day }: Quote): boolean =>
  month in monthsMap && day >= 1 && day <= monthsMap[month].dayCount;

const invalidQuoteIds = quotes.filter((quote) => !hasValidDate(quote)).map(({ id }) => id);

if (invalidQuoteIds.length > 0) {
  throw new Error(`Invalid date for quotes ${invalidQuoteIds.join(', ')} in data/quotes.json`);
}

const toLocation = ({ day, month }: Quote): QuoteLocation => ({ day, month });

const getQuotesForMonth = (month: MonthName): Quote[] =>
  quotes.filter((quote) => quote.month === month);

export class DatabaseService {
  // =============================================================================
  // METHODS USED FOR BUILD (generateStaticParams)
  // =============================================================================

  /**
   * Get all quote locations (month/day pairs) for all quotes
   * Used in: generateStaticParams for both home page and day pages
   */
  static async getAllQuoteLocations(): Promise<Array<{day: number, month: MonthName}>> {
    const locations = quotes.map(toLocation);

    // Check for duplicates
    const duplicates = locations.filter((item, index, arr) =>
      arr.findIndex(other => other.day === item.day && other.month === item.month) !== index
    );

    if (duplicates.length > 0) {
      console.warn('Duplicate quote locations found:', duplicates);
    }

    return locations;
  }

  /**
   * Get all months that have quotes
   * Used in: generateStaticParams for month pages
   */
  static async getMonthsWithQuotes(): Promise<MonthName[]> {
    return Array.from(new Set(quotes.map(({ month }) => month)));
  }

  // =============================================================================
  // METHODS USED ON /MONTH PAGE
  // =============================================================================

  /**
   * Get all available days for a specific month (returns just day numbers)
   * Used in: /month page to display which days have quotes
   */
  static async getQuoteDaysForMonth(month: MonthName): Promise<number[]> {
    return getQuotesForMonth(month).map(({ day }) => day);
  }

  // =============================================================================
  // METHODS USED ON /MONTH/DAY PAGE
  // =============================================================================

  /**
   * Get a quote for a specific day and month
   * Used in: /month/day page to display the actual quote
   */
  static async getQuoteForDay(month: MonthName, day: Day): Promise<Quote> {
    const quote = getQuotesForMonth(month).find((quote) => quote.day === day);

    if (!quote) {
      throw new Error(`No quote found for ${month} ${day}`);
    }

    return quote;
  }

  /**
   * Get all days with quotes for a specific month
   * Used in: /month/day page for navigation and day page context
   */
  static async getDaysWithQuotesForMonth(month: MonthName): Promise<Array<{day: number, month: string}>> {
    return getQuotesForMonth(month).map(toLocation);
  }

  /**
   * Get the first day with a quote in a specific month
   * Used in: NavigationService for day page navigation (next/previous links)
   */
  static async getFirstQuoteDayOfMonth(month: MonthName): Promise<{day: number, month: string} | null> {
    return getQuotesForMonth(month).map(toLocation).at(0) ?? null;
  }

  /**
   * Get the last day with a quote in a specific month
   * Used in: NavigationService for day page navigation (next/previous links)
   */
  static async getLastQuoteDayOfMonth(month: MonthName): Promise<{day: number, month: string} | null> {
    return getQuotesForMonth(month).map(toLocation).at(-1) ?? null;
  }
}
