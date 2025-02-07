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
      // Box design
      border: "1px rgba(0, 0, 0, 0.8) solid",
      borderRadius: "5px",
    }}
  >
    <h1
      style={{
        fontSize: "32px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        textTransform: "capitalize",
        marginBottom: "16px",
        // Box design
        padding: "16px",
        color: "rgba(255, 255, 255, 0.9)",
        background: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <span>{monthName}</span>
      <span>{day}</span>
    </h1>
    <div
      style={{
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        // Box design
        padding: "16px",
      }}
    >
      <p style={{ fontSize: "18px", lineHeight: "28px" }}>{quote}</p>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "24px",
          justifyContent: "space-between",
        }}
      >
        <p style={{ minWidth: "fit-content", fontWeight: "bold" }}>{author}</p>
        <p style={{ fontStyle: "italic", textAlign: "right" }}>{book}</p>
      </div>
    </div>
    <p style={{ display: "none" }}>{year}</p>
  </div>
);
