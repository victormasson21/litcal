import { Day as DayType, MonthName } from "@/app/types/types";
import { seasonsData, Seasons } from "@/app/components/seasons/seasons";

type Props = {
  day: DayType;
  monthName: MonthName;
  quote: string;
  year: string;
  author: string;
  book: string;
};

export const Day = ({ day, monthName, quote, year, author, book }: Props) => (
  <div>
    <h1
      style={{
        fontSize: "32px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        textTransform: "capitalize",
        marginBottom: "16px",
        paddingBottom: "16px",
        borderBottom: "2px solid rgba(0, 0, 0, 0.8)",
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
      }}
    >
      <div
        style={{
          paddingBottom: "16px",
          borderBottom: "2px solid rgba(0, 0, 0, 0.8)",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            lineHeight: "28px",
          }}
        >
          {quote}
        </p>
        <div style={{ padding: "48px 0px" }}>
          <Seasons seasons={seasonsData} height="40px" />
        </div>
      </div>
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
