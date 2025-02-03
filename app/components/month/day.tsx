import { getDayPath } from "@/app/lib/helpers";
import { Day as DayType, MonthName } from "@/app/types/types";
import { ReactNode } from "react";

type Props = {
  day: DayType;
  monthName: MonthName;
  hasQuote: boolean;
};

export const Day = ({ day, hasQuote, monthName }: Props): ReactNode => {
  return (
    <li
      key={day}
      style={{
        width: "60px",
        fontWeight: "bold",
        opacity: hasQuote ? 1 : 0.3,
      }}
    >
      {hasQuote ? <a href={getDayPath(monthName, day)}>{day}</a> : <p>{day}</p>}
    </li>
  );
};
