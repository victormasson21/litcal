import type { ReactNode } from "react";
import { HomeLink } from "@/app/components/nav/nav";
import { Template } from "../template";
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
        className={styles.footer}
      >
        <HomeLink url="/" />
      </nav>
    }
  />
);
