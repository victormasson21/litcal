import type { ReactNode } from "react";
import { numberOfDaysMap } from "@/app/lib/numberOfDaysMap";
import { getWeeks } from "@/app/lib/helpers";
import { Day } from "./day";
import Link from "next/link";
import { MonthName, Day as DayType } from "@/app/types/types";
import styles from "./month.module.css";

type Props = {
  monthName: MonthName;
  quotes: DayType[];
};

export const Month = ({ monthName, quotes }: Props): ReactNode => {
  const numberOfDays = numberOfDaysMap[monthName];

  const weeks = getWeeks(numberOfDays);

  return (
    <Link href={monthName} className={styles.container}>
      <h2 className={styles.title}>{monthName}</h2>

      <div className={styles.weeksContainer}>
        {weeks.map((week, index) => (
          <div key={index} className={styles.week}>
            {week.map((day: DayType) => (
              <Day key={day} day={day} hasQuote={quotes.includes(day)} />
            ))}
          </div>
        ))}
      </div>
    </Link>
  );
};
