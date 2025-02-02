import { MonthPath, MonthName, NumberOfDays } from "@/app/types/types";

export const monthsDetails: Record<
  string,
  {
    path: MonthPath;
    monthName: MonthName;
    numberOfDays: NumberOfDays;
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
  SEP: { path: "septembre", monthName: "Septembre", numberOfDays: 30 },
  OCT: { path: "octobre", monthName: "Octobre", numberOfDays: 31 },
  NOV: { path: "novembre", monthName: "Novembre", numberOfDays: 30 },
  DEC: { path: "decembre", monthName: "Decembre", numberOfDays: 31 },
};
