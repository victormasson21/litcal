import { Year } from "@/app/components/year/year";
import { Quote } from "@/app/types/types";
import { getQuoteDaysByMonth } from "./lib/helpers";
import { supabase } from "./lib/supabase";

export default async function Home() {
  const { data: data, error } = await supabase
    .from("quotes_dev")
    .select("month, day");

  const { data: playgroundData } = await supabase
    .from("quotes_dev")
    .select("month, day, quote");

  console.log({ playgroundData });

  if (error) throw error;

  const quoteDaysByMonth = getQuoteDaysByMonth(
    data as Array<Pick<Quote, "month" | "day">>
  );

  if (error) throw error;

  return (
    <div>
      <main>
        <Year quoteDaysByMonth={quoteDaysByMonth} />
      </main>
    </div>
  );
}
