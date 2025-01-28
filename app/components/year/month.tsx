import type { ReactNode } from "react";
import { months } from "../../types/logic";
import { Day } from "./day";
import Link from "next/link";

type Props = {
  month: string;
  quotes: number[]; // { August:  [4, 6, 26, 31], July: [27, 26, 11], ...}
};

export const Month = ({ month, quotes }: Props): ReactNode => {
  const { path, monthName, numberOfDays } = months[month];

  const weeks = getWeeks(numberOfDays);

  return (
    <Link
      href={path}
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
              <Day key={day} day={day} hasQuote={quotes.includes(day)} />
            ))}
          </div>
        ))}
      </div>
    </Link>
  );
};

const getWeeks = (numberOfDays: number) => {
  const days = Array.from({ length: numberOfDays }, (_, i) => i + 1);

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
};
