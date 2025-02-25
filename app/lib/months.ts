import { MonthName, NumberOfDays } from "@/app/types/types";

export const numberOfDaysMap: Record<MonthName, NumberOfDays> = {
  january: 31,
  february: 29,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  septembre: 30,
  octobre: 31,
  novembre: 30,
  decembre: 31,
};

// TODO: type properly
export const months: MonthName[] = Object.keys(numberOfDaysMap) as MonthName[];
