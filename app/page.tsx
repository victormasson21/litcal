import { Year } from "@/app/components/year/year";
import { Quote } from "@/app/types/types";
import { getQuoteDaysByMonth } from "./lib/helpers";
import { supabase } from "./lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("quotes_dev")
    .select("month, day")
    .eq("display", true)
    .not("quote", "is", null);

  /*
    // Playground data
    const { data: playgroundData } = await supabase
      .from("quotes_dev")
      .select("author, book")
      .eq("display", true)
      .not("quote", "is", null);
  
    console.log({ playgroundData });
  */

  console.log(data?.length);

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
