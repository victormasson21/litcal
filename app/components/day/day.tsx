import { Day as DayType, MonthName } from "@/app/types/types";

type Props = {
  day: DayType;
  monthName: MonthName;
  quote: string;
  year: string;
  author: string;
  book: string;
};

export const Day = ({ day, monthName, quote, year, author, book }: Props) => (
  <div
    style={{
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "48px",
    }}
  >
    <h1>
      The {day} of {monthName}
    </h1>
    <div
      style={{
        maxWidth: "450px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <p style={{ fontSize: "18px" }}>{quote}</p>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "24px",
          justifyContent: "space-between",
        }}
      >
        <p style={{ minWidth: "fit-content", fontWeight: "bold" }}>{author}</p>
        <p style={{ fontStyle: "italic" }}>{book}</p>
      </div>
    </div>
    <p style={{ display: "none" }}>{year}</p>
  </div>
);
