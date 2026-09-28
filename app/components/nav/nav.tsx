import Link from "next/link";
import styles from "./nav.module.css";
import template from "../template.module.css";
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
    <nav
      role="navigation"
      aria-label="Page navigation"
      className={`${template.bar} ${styles.container}`}
    >
      <Arrow url={left.url} label="Go to previous page">
        &larr;
      </Arrow>
      <HomeLink url={center.url} />
      <Arrow url={right.url} label="Go to next page">
        &rarr;
      </Arrow>
      <SwipeNavigation links={links} />
    </nav>
  );
};

export const HomeLink = ({ url }: { url: string }) => (
  <Link
    className={template.barItem}
    href={url}
    aria-label="Go back to the previous level (month or year)"
  >
    <Image src={grid} alt="Image of a grid" width={28} height={28} role="img" />
  </Link>
);

type ArrowProps = {
  url: string;
  label: string;
  children: ReactNode;
};

const Arrow = ({ url, label, children }: ArrowProps) =>
  url ? (
    <Link className={template.barItem} href={url} aria-label={label}>
      {children}
    </Link>
  ) : (
    <span
      className={`${template.barItem} ${styles.disabled}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
