import { Month as MonthComponent } from "@/app/components/month/month";
import { MonthPath, QuoteDaysByMonth, Quotes } from "@/app/types/types";
import { getStaticQuotes } from "@/app/lib/staticQuotes";
import { getDays, getMonthKey, getQuoteDaysByMonth } from "@/app/lib/helpers";
import { monthsDetails } from "@/app/lib/monthDetails";

type Props = {
  params: {
    month: MonthPath;
  };
};

export default async function MonthPage({ params }: Props) {
  const { month: monthPath } = await params;

  const monthKey = getMonthKey(monthPath);
  const { monthName, numberOfDays } = monthsDetails[monthKey];

  const quotes: Quotes = await getStaticQuotes();
  const quoteDaysByMonth: QuoteDaysByMonth = getQuoteDaysByMonth(quotes);

  const allDays = getDays(numberOfDays);
  const quoteDays = quoteDaysByMonth[monthKey];

  return (
    <MonthComponent
      monthName={monthName}
      monthPath={monthPath}
      allDays={allDays}
      quoteDays={quoteDays}
    />
  );
}
