import styles from "@/app/styling/page.module.css";
import { Year } from "@/app/components/year/year";
import { Quotes } from "@/app/types/types";
import { getQuoteDaysByMonth } from "./lib/helpers";
import { getStaticQuotes } from "./lib/staticQuotes";

export default async function Home() {
  const quotes: Quotes = await getStaticQuotes();
  const quoteDaysByMonth = getQuoteDaysByMonth(quotes);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Year quoteDaysByMonth={quoteDaysByMonth} />
      </main>
    </div>
  );
}
