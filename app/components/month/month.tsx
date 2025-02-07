import { MonthName } from "@/app/types/types";
import { ReactNode } from "react";
import { Day } from "./day";

type Props = {
  monthName: MonthName;
  allDays: number[];
  quoteDays: number[];
};

export function Month({ monthName, allDays, quoteDays }: Props): ReactNode {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "64px",
      }}
    >
      <h1 style={{ textTransform: "capitalize", fontSize: "48px" }}>
        {monthName}
      </h1>

      <ol
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          fontSize: "36px",
          justifyContent: "center",
        }}
      >
        {allDays.map((day) => {
          const hasQuote = quoteDays.includes(day);
          return (
            <Day
              key={`${monthName}-${day}`}
              day={day}
              monthName={monthName}
              hasQuote={hasQuote}
            />
          );
        })}
      </ol>
    </div>
  );
}
