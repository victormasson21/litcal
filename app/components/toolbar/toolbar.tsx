import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import template from "../template.module.css";
import add from "./add.svg";
import bell from "./bell.svg";
import about from "./about.svg";

export const SHOW_TOOLBAR = true;

const ICON_SIZE = 32;

type Action = {
  label: string;
  icon: StaticImageData;
  url: string;
  show: boolean;
};

const actions: ReadonlyArray<Action> = [
  { label: "Add a quote", icon: add, url: "/add", show: false },
  { label: "About Seasons", icon: about, url: "/about", show: true },
  { label: "Get notified", icon: bell, url: "/notify", show: true },
];

export const Toolbar = () => (
  <nav role="navigation" aria-label="Page actions" className={template.bar}>
    {actions
      .filter(({ show }) => show)
      .map(({ label, icon, url }) => (
        <Link
          key={label}
          className={template.barItem}
          href={url}
          aria-label={label}
        >
          <Image src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        </Link>
      ))}
  </nav>
);
