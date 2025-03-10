import { Month } from "./month";
import { MonthName, QuoteDaysByMonth } from "@/app/types/types";
import { monthNames } from "@/app/lib/months";
import { seasonsData, Seasons } from "@/app/components/seasons/seasons";
import styles from "./year.module.css";

type Props = {
  quoteDaysByMonth: QuoteDaysByMonth;
};

export const Year = ({ quoteDaysByMonth }: Props) => {
  return (
    <div>
      <div style={{ height: "80px" }}>
        <Seasons seasons={Object.values(seasonsData)} />
      </div>
      <div className={styles.container}>
        {monthNames.map((monthName: MonthName) => (
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
