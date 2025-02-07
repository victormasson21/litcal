import { Month } from "./month";
import { MonthName, QuoteDaysByMonth } from "@/app/types/types";
import { months } from "@/app/lib/numberOfDaysMap";

type Props = {
  quoteDaysByMonth: QuoteDaysByMonth;
};

export const Year = ({ quoteDaysByMonth }: Props) => {
  return (
    <div
      style={{
        // move to calendar layout ?
        padding: "32px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "32px",
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
  );
};
