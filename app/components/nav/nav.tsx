import Link from "next/link";
import styles from "./nav.module.css";
import template from "../template.module.css";
import type { ReactNode } from "react";
import { SwipeNavigation } from "./swipe";

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
    <nav role="navigation" aria-label="Page navigation" className={template.bar}>
      <Arrow url={left.url}>Previous</Arrow>
      <HomeLink url={center.url} />
      <Arrow url={right.url}>Next</Arrow>
      <SwipeNavigation links={links} />
    </nav>
  );
};

const barItem = `${template.textLink} ${template.barItem}`;

export const HomeLink = ({ url }: { url: string }) => (
  <Link className={barItem} href={url}>
    Back
  </Link>
);

type ArrowProps = {
  url: string;
  children: ReactNode;
};

const Arrow = ({ url, children }: ArrowProps) =>
  url ? (
    <Link className={barItem} href={url}>
      {children}
    </Link>
  ) : (
    <span className={`${barItem} ${styles.disabled}`} aria-hidden="true">
      {children}
    </span>
  );
