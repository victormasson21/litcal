import Link from "next/link";
import styles from "./back.module.css";

type Props = {
  url: string;
  copy?: string;
};

export const Back = ({ url, copy = "back" }: Props) => {
  return (
    <Link className={styles.backButton} href={url}>
      <span>&larr;</span>
      <span>{copy}</span>
    </Link>
  );
};
