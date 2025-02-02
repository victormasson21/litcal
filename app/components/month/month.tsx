import { getDayPath } from "@/app/lib/helpers";
import { MonthName, MonthPath } from "@/app/types/types";
import { ReactNode } from "react";

type Props = {
  monthName: MonthName;
  monthPath: MonthPath;
  allDays: number[];
  quoteDays: number[];
};

export function Month({
  monthName,
  monthPath,
  allDays,
  quoteDays,
}: Props): ReactNode {
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
            <li
              key={day}
              style={{
                width: "60px",
                fontWeight: "bold",
                opacity: hasQuote ? 1 : 0.3,
              }}
            >
              {hasQuote ? (
                <a href={getDayPath(monthPath, day)}>{day}</a>
              ) : (
                <p>{day}</p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
