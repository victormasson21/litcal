import { Day as DayComponent } from "@/app/components/day/day";

import { supabase } from "@/app/lib/supabase";
import { Day, MonthName, Quote } from "@/app/types/types";
import { getDayPath, getNextMonth, getPreviousMonth } from "@/app/lib/helpers";

type Props = {
  params: Promise<{
    month: MonthName;
    day: string;
  }>;
};

export default async function DayPage({ params }: Props) {
  const { month: monthName, day: dayPath } = await params;
  const day: Day = Number(dayPath);

  // Get the current day's quote
  const { data, error } = await supabase
    .from("quotes_dev")
    .select()
    .eq("day", day)
    .eq("month", monthName)
    .eq("display", true);

  // Get all available days in the current month
  // TODO: turn this into re-usable function
  const { data: availableDays, error: availableDaysError } = await supabase
    .from("quotes_dev")
    .select("day, month")
    .eq("month", monthName)
    .eq("display", true)
    .not("quote", "is", null)
    .order("day", { ascending: true });

  if (error || availableDaysError) throw error;

  if (data.length === 0)
    throw new Error(`No matched quote - month: ${monthName} day: ${dayPath}`);

  const matchedQuote: Quote = data[0];
  const { quote, author, book } = matchedQuote;

  // Find the current day's position
  const currentDayIndex = availableDays.findIndex((d) => d.day === day);

  // Navigation object to store prev/next day info
  const navigation = {
    left: { url: "", text: "Previous" },
    center: { url: `/${monthName}`, text: monthName },
    right: { url: "", text: "Next" },
  };

  // Determine previous day
  if (currentDayIndex > 0) {
    // Previous day is in the same month
    navigation.left.url = getDayPath(
      monthName,
      availableDays[currentDayIndex - 1].day
    );
  } else {
    // Need to check the previous month
    const prevMonthName = getPreviousMonth(monthName);
    const { data: prevMonthLastDay } = await supabase
      .from("quotes_dev")
      .select("day, month")
      .eq("month", prevMonthName)
      .eq("display", true)
      .not("quote", "is", null)
      .order("day", { ascending: false })
      .limit(1);

    if (prevMonthLastDay && prevMonthLastDay.length > 0) {
      navigation.left.url = getDayPath(prevMonthName, prevMonthLastDay[0].day);
    }
  }

  // Determine next day
  if (currentDayIndex < availableDays.length - 1) {
    // Next day is in the same month
    navigation.right.url = getDayPath(
      monthName,
      availableDays[currentDayIndex + 1].day
    );
  } else {
    // Need to check the next month
    const nextMonthName = getNextMonth(monthName);
    const { data: nextMonthFirstDay } = await supabase
      .from("quotes_dev")
      .select("day, month")
      .eq("month", nextMonthName)
      .eq("display", true)
      .not("quote", "is", null)
      .order("day", { ascending: true })
      .limit(1);

    if (nextMonthFirstDay && nextMonthFirstDay.length > 0) {
      navigation.right.url = getDayPath(
        nextMonthName,
        nextMonthFirstDay[0].day
      );
    }
  }

  return (
    monthName &&
    day && (
      <DayComponent
        day={day}
        monthName={monthName}
        quote={quote}
        author={author}
        book={book}
        navigation={navigation}
      />
    )
  );
}

export async function generateStaticParams() {
  const { data: quotes, error } = await supabase
    .from("quotes_dev")
    .select()
    .eq("display", true)
    .not("quote", "is", null);

  if (error) throw new Error(error.message);

  return quotes.map(({ day, month }) => ({
    month,
    day: day.toString(),
  }));
}
