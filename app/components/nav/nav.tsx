import Link from "next/link";
import styles from "./nav.module.css";
import Image from "next/image";

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
      <Link
        className={styles.link}
        href={center.url}
        aria-label="Go back to the previous level (month or year)"
      >
        <Image src="/grid.svg" alt="Image of a grid" width={25} height={25} />
        {/* <span>{center.text}</span> */}
      </Link>
      <Link className={styles.link} href={right.url}>
        <span>{right.text}</span>
        <span>&rarr;</span>
      </Link>
    </div>
  );
};
