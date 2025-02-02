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
      gap: "64px",
    }}
  >
    <h1>
      The {day} of {monthName}
    </h1>
    <div
      style={{
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <p>{quote}</p>
      <div
        style={{
          display: "flex",

          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <p>{author}</p>
        <p>{book}</p>
      </div>
    </div>
    <p style={{ display: "none" }}>{year}</p>
  </div>
);
