import { Navigation, NavLinks } from "@/app/components/nav/nav";
import { seasonsData, Seasons } from "@/app/components/seasons/seasons";
import { Day as DayType, MonthName } from "@/app/types/types";
import styles from "./day.module.css";
import { monthsMap } from "@/app/lib/months";
import { Template } from "../template";

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
    <Template
      containerStyle={{ maxWidth: "500px" }}
      header={
        <h1 className={styles.dateHeader}>
          <span>{monthName}</span>
          <span>{day}</span>
        </h1>
      }
      body={
        <div className={styles.innerPage}>
          <p className={styles.paragraph}>{quote}</p>
          {/* TODO: improve to remove defensive coding? */}
          {mainIcon && <Seasons seasons={[seasonsData[mainIcon]]} />}
        </div>
      }
      footer={
        <>
          <QuoteDetails author={author} book={book} />
          <Navigation links={navigation} />
        </>
      }
    />
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
