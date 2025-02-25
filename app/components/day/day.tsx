import { Navigation } from "@/app/components/common/navigation";
import { seasonsData, Seasons } from "@/app/seasons/seasons";
import { Day as DayType, MonthName } from "@/app/types/types";
import styles from "./day.module.css";
import { getDayNavLinks } from "@/app/lib/navLinks";

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
        <QuoteDetails author={author} book={book} />
      </div>
      <Navigation links={getDayNavLinks(day, monthName)} />
    </div>
  </div>
);
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
