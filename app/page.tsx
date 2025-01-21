import styles from "./page.module.css";
import { Calendar } from "./components/calendar";
// import { createClient } from "./utils/serverClient";

export default async function Home() {
  // const supabase = await createClient();
  // const { data: quotes, error } = await supabase.from("quotes_dev").select();
  // if (error) throw new Error();

  return (
    <div className={styles.page}>
      <main
        className={styles.main}
        style={{
          padding: "32px",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        {/* <Calendar quotes={quotes} /> */}
        <Calendar />
      </main>
    </div>
  );
}
