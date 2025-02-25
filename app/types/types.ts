export type MonthName =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "septembre"
  | "octobre"
  | "novembre"
  | "decembre";

export type dayCount = 29 | 30 | 31;

export type Day = number;

export interface Quote {
  id: number;
  created_at: string;
  day: Day;
  month: MonthName;
  quote: string;
  year: string;
  author: string;
  book: string;
}

export type Quotes = Quote[];

export type QuoteDaysByMonth = Record<MonthName, Day[]>;
