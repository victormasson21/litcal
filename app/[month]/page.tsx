import { Month as MonthComponent } from "@/app/components/month/month";
import { MonthName, QuoteDaysByMonth, Quotes } from "@/app/types/types";
import { getStaticQuotes } from "@/app/lib/staticQuotes";
import { getDays, getQuoteDaysByMonth } from "@/app/lib/helpers";
import { numberOfDaysMap } from "@/app/lib/numberOfDaysMap";

type Props = {
  params: {
    month: MonthName;
  };
};

export default async function MonthPage({ params }: Props) {
  const { month: monthName } = await params;

  const numberOfDays = numberOfDaysMap[monthName];

  const quotes: Quotes = await getStaticQuotes();
  const quoteDaysByMonth: QuoteDaysByMonth = getQuoteDaysByMonth(quotes);

  const allDays = getDays(numberOfDays);
  const quoteDays = quoteDaysByMonth[monthName];

  return (
    <MonthComponent
      monthName={monthName}
      allDays={allDays}
      quoteDays={quoteDays}
    />
  );
}
