import { MonthName } from "@/app/types/types";
import { ReactNode } from "react";
import { Day } from "./day";
import { Seasons, seasonsData } from "../../seasons/seasons";
import { Navigation } from "@/app/components/common/navigation";
import styles from "./month.module.css";
import { getMonthNavLinks } from "@/app/lib/navLinks";

type Props = {
  monthName: MonthName;
  allDays: number[];
  quoteDays: number[];
};

export function Month({ monthName, allDays, quoteDays }: Props): ReactNode {
  return (
    <div className={styles.month}>
      <div className={styles.headerContainer}>
        <Seasons seasons={seasonsData.slice(0, 2)} height="50px" />
        <h1 className={styles.headerText}>{monthName}</h1>
        <Seasons seasons={seasonsData.slice(2, 4)} height="50px" />
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
