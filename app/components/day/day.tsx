"use client";

import { useRef, useState } from "react";
import { Navigation, NavLinks } from "@/app/components/nav/nav";
import { seasonsData } from "@/app/components/seasons/seasons";
import { Day as DayType, MonthName, Quote } from "@/app/types/types";
import styles from "./day.module.css";
import { monthsMap } from "@/app/lib/months";
import { Template } from "../template";
import Image from "next/image";

type Props = {
  day: DayType;
  monthName: MonthName;
  quotes: Quote[];
  navigation: NavLinks;
};

export const Day = ({ day, monthName, quotes, navigation }: Props) => {
  const [index, setIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const { quote, author, book } = quotes[index];
  const nextIndex = (index + 1) % quotes.length;
  const mainIcon = monthName && monthsMap[monthName].mainIcon;
  const { src, alt } = seasonsData[mainIcon];

  const icon = mainIcon && (
    <Image key={alt} src={src} alt={alt} height={50} className={styles.icon} />
  );

  const showNextQuote = () => {
    setIndex(nextIndex);
    bodyRef.current?.scrollTo({ top: 0 });
  };

  return (
    <Template
      containerStyle={{ maxWidth: "500px" }}
      header={
        <h1 className={styles.header}>
          <span>{monthName}</span>
          <span>{day}</span>
        </h1>
      }
      body={
        <div ref={bodyRef} className={styles.body}>
          <p className={styles.paragraph}>{quote}</p>

          {quotes.length > 1 ? (
            <button
              type="button"
              className={styles.switch}
              onClick={showNextQuote}
              aria-label={`Show quote ${nextIndex + 1} of ${quotes.length}`}
            >
              {icon}
              <span className={styles.dots} aria-hidden="true">
                {quotes.map(({ id }, dotIndex) => (
                  <span
                    key={id}
                    className={dotIndex === index ? styles.currentDot : styles.dot}
                  />
                ))}
              </span>
            </button>
          ) : (
            icon
          )}
        </div>
      }
      footer={
        <>
          <QuoteDetails author={author} book={book} />
          <hr />
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
