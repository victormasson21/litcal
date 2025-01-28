export const months: Record<
  string,
  {
    path: string;
    monthName: string;
    numberOfDays: number;
  }
> = {
  JAN: { path: "january", monthName: "January", numberOfDays: 31 },
  FEB: { path: "february", monthName: "February", numberOfDays: 29 },
  MAR: { path: "march", monthName: "March", numberOfDays: 31 },
  APR: { path: "april", monthName: "April", numberOfDays: 30 },
  MAY: { path: "may", monthName: "May", numberOfDays: 31 },
  JUN: { path: "june", monthName: "June", numberOfDays: 30 },
  JUL: { path: "july", monthName: "July", numberOfDays: 31 },
  AUG: { path: "august", monthName: "August", numberOfDays: 31 },
  SEP: { path: "september", monthName: "September", numberOfDays: 30 },
  OCT: { path: "october", monthName: "October", numberOfDays: 31 },
  NOV: { path: "november", monthName: "November", numberOfDays: 30 },
  DEC: { path: "december", monthName: "December", numberOfDays: 31 },
};

export const monthKeys = Object.keys(months);

export type MonthKey = keyof typeof months;

export type View = "YEAR" | "MONTH" | "DAY";
