import { Day as DayComponent } from "@/app/components/day/day";
import { getMonthKey, getTodaysQuote } from "@/app/lib/helpers";
import { monthsDetails } from "@/app/lib/monthDetails";
import { getStaticQuotes } from "@/app/lib/staticQuotes";
import { Day, MonthPath, Quotes } from "@/app/types/types";

type Props = {
  params: {
    month: MonthPath;
    day: string;
  };
};

export default async function DayPage({ params }: Props) {
  const { month: monthPath, day: dayPath } = await params;

  const monthKey = getMonthKey(monthPath);
  const { monthName } = monthsDetails[monthKey];

  const day: Day = Number(dayPath);

  const quotes: Quotes = await getStaticQuotes();
  const quoteData = getTodaysQuote(quotes, monthName, Number(day));

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
