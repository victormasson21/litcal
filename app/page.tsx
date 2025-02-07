import { Year } from "@/app/components/year/year";
import { Quotes } from "@/app/types/types";
import { getQuoteDaysByMonth } from "./lib/helpers";
import { getStaticQuotes } from "./lib/staticQuotes";

export default async function Home() {
  const quotes: Quotes = await getStaticQuotes();
  const quoteDaysByMonth = getQuoteDaysByMonth(quotes);

  return (
    <div>
      <main>
        <Year quoteDaysByMonth={quoteDaysByMonth} />
      </main>
    </div>
  );
}
