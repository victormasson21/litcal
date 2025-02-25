import { Month } from "./month";
import { MonthName, QuoteDaysByMonth } from "@/app/types/types";
import { months } from "@/app/lib/months";
import { seasonsData, Seasons } from "@/app/seasons/seasons";
import styles from "./year.module.css";

type Props = {
  quoteDaysByMonth: QuoteDaysByMonth;
};

export const Year = ({ quoteDaysByMonth }: Props) => {
  return (
    <div>
      <Seasons seasons={seasonsData} />
      <div className={styles.container}>
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
