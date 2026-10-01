import Link from "next/link";
import template from "../template.module.css";
import styles from "./toolbar.module.css";

type Action = {
  label: string;
  url: string;
  show: boolean;
};

const actions: ReadonlyArray<Action> = [
  { label: "Add a quote", url: "/add", show: false },
  { label: "About", url: "/about", show: true },
  { label: "Get notified", url: "/about#notifications", show: false },
];

export const Toolbar = () => (
  <nav
    role="navigation"
    aria-label="Page actions"
    className={`${template.bar} ${styles.toolbar}`}
  >
    {actions
      .filter(({ show }) => show)
      .map(({ label, url }) => (
        <Link
          key={label}
          className={`${template.textLink} ${template.barItem}`}
          href={url}
        >
          {label}
        </Link>
      ))}
  </nav>
);
