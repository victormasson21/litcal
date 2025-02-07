import { getDayPath } from "@/app/lib/helpers";
import { Day as DayType, MonthName } from "@/app/types/types";
import { ReactNode } from "react";

type Props = {
  day: DayType;
  monthName: MonthName;
  hasQuote: boolean;
};

const textStyle = {
  width: "100%",
  height: "100%",
  textAlign: "center",
  padding: "24px 12px",
} as const;

export const Day = ({ day, hasQuote, monthName }: Props): ReactNode => {
  return (
    <li
      key={day}
      style={{
        width: "100px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {hasQuote ? (
        <a
          href={getDayPath(monthName, day)}
          style={{
            ...textStyle,
          }}
        >
          {day}
        </a>
      ) : (
        <p
          style={{
            opacity: 0.3,
            ...textStyle,
          }}
        >
          {day}
        </p>
      )}
    </li>
  );
};
