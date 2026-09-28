import type { ReactNode } from "react";
import { HomeLink } from "@/app/components/nav/nav";
import { Template } from "../template";
import template from "../template.module.css";
import styles from "./info.module.css";

type Props = {
  title: string;
  children: ReactNode;
};

export const Info = ({ title, children }: Props) => (
  <Template
    containerStyle={{ maxWidth: "500px" }}
    header={<h1 className={styles.title}>{title}</h1>}
    body={<div className={styles.body}>{children}</div>}
    footer={
      <nav
        role="navigation"
        aria-label="Page navigation"
        className={`${template.bar} ${styles.footer}`}
      >
        <HomeLink url="/" />
      </nav>
    }
  />
);
