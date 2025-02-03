import type { ReactNode } from "react";
import { numberOfDaysMap } from "@/app/lib/numberOfDaysMap";
import { getWeeks } from "@/app/lib/helpers";
import { Day } from "./day";
import Link from "next/link";
import { MonthName, Day as DayType } from "@/app/types/types";

type Props = {
  monthName: MonthName;
  quotes: DayType[];
};

export const Month = ({ monthName, quotes }: Props): ReactNode => {
  const numberOfDays = numberOfDaysMap[monthName];

  const weeks = getWeeks(numberOfDays);

  return (
    <Link
      href={monthName}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          marginBottom: "12px",
          width: "fit-content",
          alignSelf: "flex-end",
          textTransform: "capitalize",
        }}
      >
        {monthName}
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {weeks.map((week, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            {week.map((day: DayType) => (
              <Day key={day} day={day} hasQuote={quotes.includes(day)} />
            ))}
          </div>
        ))}
      </div>
    </Link>
  );
};
