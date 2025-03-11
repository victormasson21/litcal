import { Navigation, NavLinks } from "@/app/components/nav/nav";
import { seasonsData, Seasons } from "@/app/components/seasons/seasons";
import { Day as DayType, MonthName } from "@/app/types/types";
import styles from "./day.module.css";
import { monthsMap } from "@/app/lib/months";

type Props = {
  day: DayType;
  monthName: MonthName;
  quote: string;
  author: string;
  book: string;
  navigation: NavLinks;
};

export const Day = ({
  day,
  monthName,
  quote,
  author,
  book,
  navigation,
}: Props) => {
  /* TODO: improve to remove defensive coding? */
  const mainIcon = monthName && monthsMap[monthName].mainIcon;

  return (
    <div className={styles.container}>
      <h1 className={styles.dateHeader}>
        <span>{monthName}</span>
        <span>{day}</span>
      </h1>

      <div className={styles.innerPage}>
        <p className={styles.paragraph}>{quote}</p>
        {/* TODO: improve to remove defensive coding? */}
        {mainIcon && <Seasons seasons={[seasonsData[mainIcon]]} />}
      </div>
      <QuoteDetails author={author} book={book} />
      <Navigation links={navigation} />
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
