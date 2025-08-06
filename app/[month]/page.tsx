import { Month as MonthComponent } from "@/app/components/month/month";
import { MonthName } from "@/app/types/types";
import { DatabaseService } from "@/app/lib/database";
import { getDays } from "@/app/lib/helpers";
import { monthsMap } from "@/app/lib/months";

type Props = {
  params: Promise<{
    month: MonthName;
  }>;
};

export default async function MonthPage({ params }: Props) {
  const { month: monthName } = await params;

  /* TODO: improve to remove defensive coding? */
  const dayCount = monthName && monthsMap[monthName].dayCount;

  const quoteDays = await DatabaseService.getQuoteDaysForMonth(monthName);
  const allDays = getDays(dayCount);

  return (
    monthName && (
      <MonthComponent
        monthName={monthName}
        allDays={allDays}
        quoteDays={quoteDays}
      />
    )
  );
}

export async function generateStaticParams() {
  const months = await DatabaseService.getMonthsWithQuotes();

  return months.map((month) => ({
    month,
  }));
}
