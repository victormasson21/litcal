import type { ReactNode } from "react";

import styles from "./template.module.css";

type Props = Readonly<{
  header: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  containerStyle?: object;
}>;

export const Template = ({
  header,
  body,
  footer,
  containerStyle = {},
}: Props): ReactNode => (
  <div className={styles.container} style={containerStyle}>
    <header className={styles.header}>{header}</header>
    <main className={styles.main}>{body}</main>
    {footer && <footer className={styles.footer}>{footer}</footer>}
  </div>
);
