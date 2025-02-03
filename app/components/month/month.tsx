import { MonthName } from "@/app/types/types";
import { ReactNode } from "react";
import { Day } from "./day";

type Props = {
  monthName: MonthName;
  allDays: number[];
  quoteDays: number[];
};

export function Month({ monthName, allDays, quoteDays }: Props): ReactNode {
  console.log("in month", quoteDays);

  return (
    <div
      style={{
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "64px",
      }}
    >
      <div style={{ display: "flex" }}>
        <h1 style={{ textTransform: "capitalize" }}>{monthName}</h1>
      </div>
      <ol
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "48px",
          fontSize: "48px",
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
