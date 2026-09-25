import Link from "next/link";
import styles from "./nav.module.css";
import Image from "next/image";
import type { ReactNode } from "react";
import { SwipeNavigation } from "./swipe";
import grid from "./grid.svg";

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
      <Arrow url={left.url} label="Go to previous page">
        &larr;
      </Arrow>
      <Link
        className={styles.link}
        href={center.url}
        aria-label="Go back to the previous level (month or year)"
      >
        <Image
          src={grid}
          alt="Image of a grid"
          width={28}
          height={28}
          role="img"
        />
      </Link>
      <Arrow url={right.url} label="Go to next page">
        &rarr;
      </Arrow>
      <SwipeNavigation links={links} />
    </nav>
  );
};

type ArrowProps = {
  url: string;
  label: string;
  children: ReactNode;
};

const Arrow = ({ url, label, children }: ArrowProps) =>
  url ? (
    <Link className={styles.link} href={url} aria-label={label}>
      {children}
    </Link>
  ) : (
    <span className={`${styles.link} ${styles.disabled}`} aria-hidden="true">
      {children}
    </span>
  );
