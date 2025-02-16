import { Month as MonthComponent } from "@/app/components/month/month";
import { MonthName } from "@/app/types/types";

import { capitalize, getDays } from "@/app/lib/helpers";
import { numberOfDaysMap } from "@/app/lib/numberOfDaysMap";
import { supabase } from "../lib/supabase";

type Props = {
  params: Promise<{
    month: MonthName;
  }>;
};

export default async function MonthPage({ params }: Props) {
  const { month: monthName } = await params;

  const numberOfDays = numberOfDaysMap[monthName];

  const { data, error } = await supabase
    .from("quotes_dev")
    .select("day")
    .eq("month", capitalize(monthName));

  if (error) throw error;

  const quoteDays: number[] = Object.values(data).map(({ day }) => day);
  const allDays = getDays(numberOfDays);

  return (
    <MonthComponent
      monthName={monthName}
      allDays={allDays}
      quoteDays={quoteDays}
    />
  );
}

export async function generateStaticParams() {
  const { data, error } = await supabase.from("quotes_dev").select("month");

  if (error) throw new Error();

  const monthsArray = new Set(data.map(({ month }) => month));
  const monthsObjectArray = [...monthsArray].map((month) => ({ month: month }));
  return monthsObjectArray;
}
