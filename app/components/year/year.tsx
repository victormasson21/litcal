import { Month } from "./month";
import { MonthName, QuoteDaysByMonth } from "@/app/types/types";
import { months } from "@/app/lib/numberOfDaysMap";
import { seasonsData, Seasons } from "@/app/components/seasons/seasons";

type Props = {
  quoteDaysByMonth: QuoteDaysByMonth;
};

export const Year = ({ quoteDaysByMonth }: Props) => {
  return (
    <div>
      <Seasons seasons={seasonsData} />
      <div
        style={{
          marginTop: "32px",
          padding: "32px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "48px",
        }}
      >
        {months.map((monthName: MonthName) => (
          <Month
            key={monthName}
            monthName={monthName}
            quotes={quoteDaysByMonth[monthName]}
          />
        ))}
      </div>
    </div>
  );
};
