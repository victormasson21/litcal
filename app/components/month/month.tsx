import { MonthName } from "@/app/types/types";
import { ReactNode } from "react";
import { Day } from "./day";
import { Seasons, seasonsData } from "../seasons/seasons";

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
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",

          alignItems: "center",
        }}
      >
        <Seasons seasons={seasonsData.slice(0, 2)} height="50px" />
        <h1 style={{ textTransform: "capitalize", fontSize: "48px" }}>
          {monthName}
        </h1>
        <Seasons seasons={seasonsData.slice(2, 4)} height="50px" />
      </div>

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
