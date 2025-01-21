import type { ReactNode } from "react";
import { View } from "../logic";

type Props = {
  day: string;
  selectedDay: string | null;
  goToDay: (day: string) => void;
  view: View;
};

export const Day = ({ day, selectedDay, goToDay, view }: Props): ReactNode => {
  const isSelected = day === selectedDay;
  return (
    <div
      key={day}
      onClick={() => (view === "MONTH" ? goToDay(day) : null)}
      style={{
        textAlign: "center",
        minWidth: "20px",
        minHeight: "20px",
        border: "1px black solid",
        borderRadius: "50%",
      }}
    >
      <h5 style={{ display: "none" }}>{day}</h5>
      <p style={{ display: isSelected ? "block" : "none" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};
