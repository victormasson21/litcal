import { Day as DayComponent } from "@/app/components/day/day";

import { supabase } from "@/app/lib/supabase";
import { Day, MonthName, Quote } from "@/app/types/types";

type Props = {
  params: Promise<{
    month: MonthName;
    day: string;
  }>;
};

export default async function DayPage({ params }: Props) {
  const { month: monthName, day: dayPath } = await params;

  const day: Day = Number(dayPath);

  const { data, error } = await supabase
    .from("quotes_dev")
    .select()
    .eq("day", day)
    .eq("month", monthName);

  if (error) throw error;

  if (data.length === 0)
    throw new Error(`No matched quote - month: ${monthName} day: ${dayPath}`);

  const matchedQuote: Quote = data[0];
  const { quote, year, author, book } = matchedQuote;

  /* TODO: improve to remove defensive coding? */
  return (
    monthName &&
    day && (
      <DayComponent
        day={day}
        monthName={monthName}
        quote={quote}
        year={year}
        author={author}
        book={book}
      />
    )
  );
}

export async function generateStaticParams() {
  const { data: quotes, error } = await supabase
    .from("quotes_dev")
    .select()
    .not("quote", "is", null);

  if (error) throw new Error(error.message);

  return quotes.map(({ day, month }) => ({
    month,
    day: day.toString(),
  }));
}
