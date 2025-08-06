import { Year } from "@/app/components/year/year";
import { DatabaseService } from "@/app/lib/database";
import { getQuoteDaysByMonth } from "./lib/helpers";

export default async function Home() {
  const quotesData = await DatabaseService.getAllQuoteLocations();
  const quoteDaysByMonth = getQuoteDaysByMonth(quotesData);

  return (
    <div>
      <main>
        <Year quoteDaysByMonth={quoteDaysByMonth} />
      </main>
    </div>
  );
}
