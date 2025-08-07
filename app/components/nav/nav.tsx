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
    <nav role="navigation" aria-label="Page navigation" className={styles.container}>
      <Link className={styles.link} href={left.url} aria-label="Go to previous page">
        &larr;
      </Link>
      <Link
        className={styles.link}
        href={center.url}
        aria-label="Go back to the previous level (month or year)"
      >
        <Image 
          src="/grid.svg" 
          alt="Image of a grid" 
          width={25} 
          height={25} 
          role="img"
        />
      </Link>
      <Link className={styles.link} href={right.url} aria-label="Go to next page">
        &rarr;
      </Link>
    </nav>
  );
};
