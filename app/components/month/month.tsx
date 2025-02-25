import { MonthName } from "@/app/types/types";
import { ReactNode } from "react";
import { Day } from "./day";
import { Seasons, seasonsData } from "../seasons/seasons";
import { Navigation } from "@/app/components/nav/nav";
import styles from "./month.module.css";
import { getMonthNavLinks } from "@/app/lib/navLinks";
import { monthsMap } from "@/app/lib/months";

type Props = {
  monthName: MonthName;
  allDays: number[];
  quoteDays: number[];
};

export function Month({ monthName, allDays, quoteDays }: Props): ReactNode {
  const { icons } = monthsMap[monthName];
  return (
    <div className={styles.month}>
      <div className={styles.headerContainer}>
        <Seasons seasons={[seasonsData[icons[0]]]} />
        <h1 className={styles.headerText}>{monthName}</h1>
        <Seasons seasons={[seasonsData[icons[1]]]} />
      </div>

      <ol className={styles.list}>
        {allDays.map((day) => {
          const hasQuote = quoteDays.includes(day);
          return (
            <Day
              key={`${monthName}-${day}`}
              day={day}
              monthName={monthName}
              hasQuote={hasQuote}
            />
          );
        })}
      </ol>

      <Navigation links={getMonthNavLinks(monthName)} />
    </div>
  );
}
