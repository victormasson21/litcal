import styles from "./styling/page.module.css";
import { Year } from "./components/year/year";
import { createClient } from "./utils/serverClient";

export default async function Home() {
  const supabase = await createClient();
  const { data: quotes, error } = await supabase.from("quotes_dev").select();
  if (error) throw new Error();

  // { August:  [4, 6, 26, 31], July: [27, 26, 11], ...}
  const quotesByMonth = quotes.reduce((grouped, quote) => {
    const key = quote.month.slice(0, 3).toUpperCase();
    if (grouped[key]) {
      grouped[key].push(quote.day);
    } else {
      grouped[key] = [quote.day];
    }
    return grouped;
  }, {});

  return (
    <div className={styles.page}>
      <main
        className={styles.main}
        style={{
          padding: "32px",
        }}
      >
        <Year quotes={quotesByMonth} />
      </main>
    </div>
  );
}
