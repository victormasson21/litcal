import { Month } from "./month";
import { MonthName, QuoteDaysByMonth } from "@/app/types/types";
import { monthNames } from "@/app/lib/months";
import { seasonsData, Season } from "@/app/components/seasons/seasons";
import type { SeasonKey } from "@/app/components/seasons/seasons";
import styles from "./year.module.css";
import { Template } from "../template";

type Props = {
  quoteDaysByMonth: QuoteDaysByMonth;
};

export const Year = ({ quoteDaysByMonth }: Props) => {
  const seasons = Object.keys(seasonsData) as SeasonKey[];

  return (
    <Template
      header={
        <header className={styles.header} role="banner">
          <div className={styles.icons} aria-hidden="true">
            {seasons.slice(0, 2).map((key) => (
              <Season key={key} season={key} />
            ))}
          </div>

          <div className={styles.text}>
            <h1 className={styles.title}>Seasons</h1>
            <p className={styles.subtitle}>a literary calendar</p>
          </div>

          <div className={styles.icons} aria-hidden="true">
            {seasons.slice(2).map((key) => (
              <Season key={key} season={key} />
            ))}
          </div>
        </header>
      }
      body={
        <main role="main">
          <div  className={styles.body} role="grid" aria-label="Calendar months">
            {monthNames.map((monthName: MonthName) => (
              <Month
                key={monthName}
                monthName={monthName}
                quotes={quoteDaysByMonth[monthName]}
              />
            ))}
          </div>
        </main>
      }
      containerStyle={{ maxWidth: "700px" }}
    />
  );
};
