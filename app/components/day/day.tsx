import { Navigation } from "@/app/components/nav/nav";
import { seasonsData, Seasons } from "@/app/components/seasons/seasons";
import { Day as DayType, MonthName } from "@/app/types/types";
import styles from "./day.module.css";
import { getDayNavLinks } from "@/app/lib/navLinks";
import { monthsMap } from "@/app/lib/months";

type Props = {
  day: DayType;
  monthName: MonthName;
  quote: string;
  year: string;
  author: string;
  book: string;
};

export const Day = ({ day, monthName, quote, author, book }: Props) => {
  const { mainIcon } = monthsMap[monthName];
  return (
    <div className={styles.container}>
      <h1 className={styles.dateHeader}>
        <span>{monthName}</span>
        <span>{day}</span>
      </h1>

      <div className={styles.innerPage}>
        <p className={styles.paragraph}>{quote}</p>
        <Seasons seasons={[seasonsData[mainIcon]]} />
      </div>
      <QuoteDetails author={author} book={book} />
      <Navigation links={getDayNavLinks(day, monthName)} />
    </div>
  );
};
type QuoteDetailsProps = {
  author: string;
  book: string;
};

const QuoteDetails = ({ author, book }: QuoteDetailsProps) => (
  <div className={styles.quoteDetails}>
    <p className={styles.author}>{author}</p>
    <p className={styles.book}>{book}</p>
  </div>
);
