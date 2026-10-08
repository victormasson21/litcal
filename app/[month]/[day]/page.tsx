import { Day as DayComponent } from "@/app/components/day/day";
import { Day, DayPageProps } from "@/app/types/types";
import { DatabaseService } from "@/app/lib/database";
import { NavigationService } from "@/app/lib/navigation";

export const dynamicParams = false;

export default async function DayPage({ params }: DayPageProps) {
  const { month: monthName, day: dayPath } = await params;
  const day: Day = Number(dayPath);

  if (isNaN(day) || day < 1 || day > 31) {
    throw new Error(`Invalid day: ${dayPath}`);
  }

  const [quotes, availableDays] = await Promise.all([
    DatabaseService.getQuotesForDay(monthName, day),
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
      quotes={quotes}
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
