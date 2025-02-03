import { Day as DayComponent } from "@/app/components/day/day";
import { getTodaysQuote } from "@/app/lib/helpers";

import { getStaticQuotes } from "@/app/lib/staticQuotes";
import { Day, MonthName, Quotes } from "@/app/types/types";

type Props = {
  params: {
    month: MonthName;
    day: string;
  };
};

export default async function DayPage({ params }: Props) {
  const { month: monthName, day: dayPath } = await params;

  const day: Day = Number(dayPath);

  const quotes: Quotes = await getStaticQuotes();
  const quoteData = getTodaysQuote(quotes, monthName, Number(day));

  console.log({
    monthName,
    dayPath,
    day,
    quotes,
    quoteData,
  });

  const { quote, year, author, book } = quoteData;

  return (
    <DayComponent
      day={day}
      monthName={monthName}
      quote={quote}
      year={year}
      author={author}
      book={book}
    />
  );
}
