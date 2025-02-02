import { monthsDetails } from "@/app/lib/monthDetails";

export type MonthName =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "Septembre"
  | "Octobre"
  | "Novembre"
  | "Decembre";

export type MonthPath = Uncapitalize<MonthName>;

export type NumberOfDays = 29 | 30 | 31;

export const monthKeys = Object.keys(monthsDetails);

export type MonthKey = keyof typeof monthsDetails;

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

export type QuoteDaysByMonth = Record<MonthKey, Day[]>;
