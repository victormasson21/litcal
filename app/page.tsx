// import { supabase } from "./utils/client";
import Image from "next/image";
import styles from "./page.module.css";
import { createClient } from "./utils/serverClient";

export default async function Home() {
  const supabase = await createClient();
  const { data: quotes, error } = await supabase.from("quotes_dev").select();
  console.log({ quotes });

  if (error) throw new Error();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h3>lit cal</h3>
        <pre>{JSON.stringify(quotes, null, 2)}</pre>
      </main>
      <footer className={styles.footer}>
        <p>footer content</p>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  );
}
