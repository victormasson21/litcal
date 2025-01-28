import type { ReactNode } from "react";

type Props = {
  day: number;
  hasQuote: boolean;
};

export const Day = ({ day, hasQuote }: Props): ReactNode => {
  return (
    <div
      key={day}
      style={{
        textAlign: "center",
        minWidth: "20px",
        minHeight: "20px",
        border: "1px black solid",
        borderRadius: "50%",
        background: hasQuote ? "black" : "white",
      }}
    />
  );
};
