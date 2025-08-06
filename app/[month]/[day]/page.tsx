import { Day as DayComponent } from "@/app/components/day/day";
import { Day, MonthName } from "@/app/types/types";
import { DatabaseService } from "@/app/lib/database";
import { NavigationService } from "@/app/lib/navigation";

type Props = {
  params: Promise<{
    month: MonthName;
    day: string;
  }>;
};

export default async function DayPage({ params }: Props) {
  const { month: monthName, day: dayPath } = await params;
  const day: Day = Number(dayPath);

  if (isNaN(day) || day < 1 || day > 31) {
    throw new Error(`Invalid day: ${dayPath}`);
  }

  const [quote, availableDays] = await Promise.all([
    DatabaseService.getQuoteForDay(monthName, day),
    DatabaseService.getDaysWithQuotesForMonth(monthName)
  ]);

  const navigation = await NavigationService.buildNavigation(
    monthName, 
    day, 
    availableDays
  );

  return (
    <DayComponent
      day={day}
      monthName={monthName}
      quote={quote.quote}
      author={quote.author}
      book={quote.book}
      navigation={navigation}
    />
  );
}

export async function generateStaticParams() {
  const quotes = await DatabaseService.getAllQuoteLocations();

  return quotes.map(({ day, month }) => ({
    month,
    day: day.toString(),
  }));
}
