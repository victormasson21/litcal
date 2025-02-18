import { Back } from "@/app/components/common/back";
import { seasonsData, Seasons } from "@/app/seasons/seasons";
import { Day as DayType, MonthName } from "@/app/types/types";
import styles from "./day.module.css";

type Props = {
  day: DayType;
  monthName: MonthName;
  quote: string;
  year: string;
  author: string;
  book: string;
};

export const Day = ({ day, monthName, quote, author, book }: Props) => (
  <div>
    <h1 className={styles.title}>
      <span>{monthName}</span>
      <span>{day}</span>
    </h1>
    <div className={styles.outerPage}>
      <div className={styles.innerPage}>
        <p className={styles.paragraph}>{quote}</p>
        <Seasons seasons={seasonsData} height="40px" />
        <Back url={`/${monthName}`} copy={monthName} />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>{author}</p>
        <p className={styles.book}>{book}</p>
      </div>
    </div>
  </div>
);
