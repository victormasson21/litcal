import { Month } from "./month";
import { MonthKey, monthKeys, QuoteDaysByMonth } from "@/app/types/types";

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
      {monthKeys.map((key: MonthKey) => {
        return <Month key={key} month={key} quotes={quoteDaysByMonth[key]} />;
      })}
    </div>
  );
};
