export type MonthName =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december";

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

// Page component prop interfaces
export interface PageParams<T = string> {
  params: Promise<T>;
}

export interface MonthPageParams {
  month: MonthName;
}

export interface DayPageParams extends MonthPageParams {
  day: string;
}

export type MonthPageProps = PageParams<MonthPageParams>;
export type DayPageProps = PageParams<DayPageParams>;
