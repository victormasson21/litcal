export const months: Record<
  string,
  {
    monthName: string;
    numberOfDays: number;
  }
> = {
  JAN: { monthName: "January", numberOfDays: 31 },
  FEB: { monthName: "February", numberOfDays: 29 },
  MAR: { monthName: "March", numberOfDays: 31 },
  APR: { monthName: "April", numberOfDays: 30 },
  MAY: { monthName: "May", numberOfDays: 31 },
  JUN: { monthName: "June", numberOfDays: 30 },
  JUL: { monthName: "July", numberOfDays: 31 },
  AUG: { monthName: "August", numberOfDays: 31 },
  SEP: { monthName: "September", numberOfDays: 30 },
  OCT: { monthName: "October", numberOfDays: 31 },
  NOV: { monthName: "November", numberOfDays: 30 },
  DEC: { monthName: "December", numberOfDays: 31 },
};

export const monthKeys = Object.keys(months);

export type MonthKey = keyof typeof months;

export type View = "YEAR" | "MONTH" | "DAY";
