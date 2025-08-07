import { MonthName } from "@/app/types/types";
import { ReactNode } from "react";
import { Day } from "./day";
import { Seasons } from "../seasons/seasons";
import { Navigation } from "@/app/components/nav/nav";
import styles from "./month.module.css";
import { getMonthNavLinks } from "@/app/lib/navLinks";
import { monthsMap } from "@/app/lib/months";
import { Template } from "../template";

type Props = {
  monthName: MonthName;
  allDays: number[];
  quoteDays: number[];
};

export function Month({ monthName, allDays, quoteDays }: Props): ReactNode {
  const { icons } = monthsMap[monthName];
  const [leftIcon, rightIcon] = icons;

  return (
    <Template
      header={
        <header className={styles.headerContainer}>
          <Seasons seasons={[leftIcon]} />
          <h1 className={styles.headerText}>{monthName}</h1>
          <Seasons seasons={[rightIcon]} />
        </header>
      }
      body={
        <main>
          <ol 
            className={styles.list}
            aria-label={`Days in ${monthName} with available quotes`}
          >
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
        </main>
      }
      footer={<Navigation links={getMonthNavLinks(monthName)} />}
      containerStyle={{ maxWidth: "660px" }}
    />
  );
}
