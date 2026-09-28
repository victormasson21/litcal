import Image, { StaticImageData } from "next/image";
import styles from "./toolbar.module.css";
import template from "../template.module.css";
import add from "./add.svg";
import bell from "./bell.svg";
import question from "./question.svg";

export const SHOW_TOOLBAR = true;

const ICON_SIZE = 32;

type Action = {
  label: string;
  icon: StaticImageData;
  show: boolean;
};

const actions: ReadonlyArray<Action> = [
  { label: "Add a quote", icon: add, show: true },
  { label: "Get notified", icon: bell, show: true },
  { label: "About Seasons", icon: question, show: true },
];

export const Toolbar = () => (
  <div role="toolbar" aria-label="Page actions" className={template.bar}>
    {actions
      .filter(({ show }) => show)
      .map(({ label, icon }) => (
        <button
          key={label}
          type="button"
          className={`${template.barItem} ${styles.button}`}
          aria-label={label}
        >
          <Image src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        </button>
      ))}
  </div>
);
