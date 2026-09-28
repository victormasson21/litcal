import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./toolbar.module.css";
import bell from "./bell.svg";

export const SHOW_TOOLBAR = true;

type Action = {
  label: string;
  icon: ReactNode;
  show: boolean;
};

const actions: ReadonlyArray<Action> = [
  { label: "Add a quote", icon: "+", show: true },
  {
    label: "Get notified",
    icon: <Image src={bell} alt="" width={28} height={28} />,
    show: true,
  },
  { label: "About Seasons", icon: "?", show: true },
];

export const Toolbar = () => (
  <div role="toolbar" aria-label="Page actions" className={styles.container}>
    {actions
      .filter(({ show }) => show)
      .map(({ label, icon }) => (
        <button
          key={label}
          type="button"
          className={styles.button}
          aria-label={label}
        >
          {icon}
        </button>
      ))}
  </div>
);
