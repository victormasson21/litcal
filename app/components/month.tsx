import type { ReactNode } from "react";
import { months, View } from "../logic";
import { Day } from "./day";

type Props = {
  month: string;
  selectedDay: string | null;
  selectedMonth: string | null;
  goToDay: (day: string) => void;
  goToMonth: (month: string) => void;
  view: View;
};

export const Month = ({
  month,
  selectedDay,
  selectedMonth,
  goToDay,
  goToMonth,
  view,
}: Props): ReactNode => {
  const { monthName, numberOfDays } = months[month];
  const isSelected = month === selectedMonth;

  const days = Array.from(
    { length: numberOfDays },
    (_, i) => `${i + 1}_${month}`
  );
  const weeks = getWeeks(days);
  console.log({ days, weeks });

  return (
    <div
      onClick={() => goToMonth(month)}
      style={{
        // border: "1px black solid",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.5s ease-in-out",
        display: "flex",
        flexDirection: "column",
        minWidth: isSelected ? "100%" : "0",
        minHeight: isSelected ? "100%" : "0",
      }}
    >
      <h2
        style={{
          color: "black",
          marginBottom: "12px",
          transition: "font-size 0.5s ease-in-out",
          fontSize: isSelected ? "36px" : "18px",

          width: "fit-content",
          alignSelf: "flex-end",
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
            {week.map((day) => (
              <Day
                key={day}
                day={day}
                selectedDay={selectedDay}
                goToDay={goToDay}
                view={view}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const getWeeks = (days: string[]) => {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
};
