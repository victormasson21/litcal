import { supabase } from './supabase';
import { Quote, MonthName, Day } from '@/app/types/types';

export class DatabaseService {
  private static readonly TABLE_NAME = 'quotes_dev';

  /**
   * Get a quote for a specific day and month
   */
  static async getQuoteForDay(month: MonthName, day: Day): Promise<Quote> {
    const { data, error } = await supabase
      .from(this.TABLE_NAME)
      .select()
      .eq('day', day)
      .eq('month', month)
      .eq('display', true)
      .not('quote', 'is', null);

    if (error) {
      throw new Error(`Failed to fetch quote for ${month} ${day}: ${error.message}`);
    }

    if (!data || data.length === 0) {
      throw new Error(`No quote found for ${month} ${day}`);
    }

    return data[0];
  }

  /**
   * Get all days with quotes for a specific month
   */
  static async getDaysWithQuotesForMonth(month: MonthName): Promise<Array<{day: number, month: string}>> {
    const { data, error } = await supabase
      .from(this.TABLE_NAME)
      .select('day, month')
      .eq('month', month)
      .eq('display', true)
      .not('quote', 'is', null)
      .order('day', { ascending: true });

    if (error) {
      throw new Error(`Failed to fetch days with quotes for ${month}: ${error.message}`);
    }

    return data || [];
  }

  /**
   * Get the last day with a quote in a specific month
   */
  static async getLastQuoteDayOfMonth(month: MonthName): Promise<{day: number, month: string} | null> {
    const { data, error } = await supabase
      .from(this.TABLE_NAME)
      .select('day, month')
      .eq('month', month)
      .eq('display', true)
      .not('quote', 'is', null)
      .order('day', { ascending: false })
      .limit(1);

    if (error) {
      throw new Error(`Failed to fetch last quote day of ${month}: ${error.message}`);
    }

    return data && data.length > 0 ? data[0] : null;
  }

  /**
   * Get the first day with a quote in a specific month
   */
  static async getFirstQuoteDayOfMonth(month: MonthName): Promise<{day: number, month: string} | null> {
    const { data, error } = await supabase
      .from(this.TABLE_NAME)
      .select('day, month')
      .eq('month', month)
      .eq('display', true)
      .not('quote', 'is', null)
      .order('day', { ascending: true })
      .limit(1);

    if (error) {
      throw new Error(`Failed to fetch first quote day of ${month}: ${error.message}`);
    }

    return data && data.length > 0 ? data[0] : null;
  }

  /**
   * Get all quote locations (month/day pairs) for all quotes
   */
  static async getAllQuoteLocations(): Promise<Array<{day: number, month: MonthName}>> {
    const { data, error } = await supabase
      .from(this.TABLE_NAME)
      .select('day, month')
      .eq('display', true)
      .not('quote', 'is', null);

    if (error) {
      throw new Error(`Failed to fetch quote locations: ${error.message}`);
    }

    return data || [];
  }

  /**
   * Get all available days for a specific month (returns just day numbers)
   */
  static async getQuoteDaysForMonth(month: MonthName): Promise<number[]> {
    const { data, error } = await supabase
      .from(this.TABLE_NAME)
      .select('day')
      .eq('month', month)
      .eq('display', true)
      .not('quote', 'is', null);

    if (error) {
      throw new Error(`Failed to fetch quote days for ${month}: ${error.message}`);
    }

    return data ? data.map(({ day }: { day: number }) => day) : [];
  }

  /**
   * Get all months that have quotes
   */
  static async getMonthsWithQuotes(): Promise<MonthName[]> {
    const { data, error } = await supabase
      .from(this.TABLE_NAME)
      .select('month')
      .eq('display', true)
      .not('quote', 'is', null);

    if (error) {
      throw new Error(`Failed to fetch months with quotes: ${error.message}`);
    }

    if (!data) return [];

    const monthsSet = new Set(
      data.map(({ month }: { month: string }) => month.toLowerCase() as MonthName)
    );
    return Array.from(monthsSet) as MonthName[];
  }
}
