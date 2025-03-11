import Link from "next/link";
import styles from "./nav.module.css";

type Link = {
  url: string;
  text: string;
};

export interface NavLinks {
  left: Link;
  center: Link;
  right: Link;
}

export const Navigation = ({ links }: { links: NavLinks }) => {
  const { left, center, right } = links;

  return (
    <div className={styles.container}>
      <Link className={styles.link} href={left.url}>
        <span>&larr;</span>
        <span>{left.text}</span>
      </Link>
      <Link className={styles.link} href={center.url}>
        <span>{center.text}</span>
      </Link>
      <Link className={styles.link} href={right.url}>
        <span>{right.text}</span>
        <span>&rarr;</span>
      </Link>
    </div>
  );
};
