"use client";

import { useState } from "react";

import { Month } from "./month";
import { MonthKey, monthKeys, View } from "../logic";

export const Calendar = () => {
  const [view, setView] = useState<View>("YEAR");
  const [selectedMonth, setSelectedMonth] = useState<MonthKey | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const goToMonth = (month: MonthKey) => {
    setView("MONTH");
    setSelectedMonth(month);
  };
  const goToDay = (day: string) => {
    setView("DAY");
    setSelectedDay(day);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "32px",
      }}
    >
      {monthKeys.map((key: MonthKey) => {
        return (
          <Month
            key={key}
            month={key}
            selectedDay={selectedDay}
            selectedMonth={selectedMonth}
            goToDay={goToDay}
            goToMonth={goToMonth}
            view={view}
          />
        );
      })}
    </div>
  );
};
