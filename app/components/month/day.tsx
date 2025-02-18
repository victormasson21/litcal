import { getDayPath } from "@/app/lib/helpers";
import { Day as DayType, MonthName } from "@/app/types/types";
import { ReactNode } from "react";
import styles from "./day.module.css";

type Props = {
  day: DayType;
  monthName: MonthName;
  hasQuote: boolean;
};

export const Day = ({ day, hasQuote, monthName }: Props): ReactNode => {
  return (
    <li key={day} className={styles.container}>
      {hasQuote ? (
        <a
          href={getDayPath(monthName, day)}
          className={`${styles.text} ${styles.link}`}
        >
          {day}
        </a>
      ) : (
        <p className={`${styles.text} ${styles.unavailable}`}>{day}</p>
      )}
    </li>
  );
};
