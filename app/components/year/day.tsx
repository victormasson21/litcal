import styles from "./day.module.css";

type Props = {
  day: number;
  hasQuote: boolean;
};

export const Day = ({ day, hasQuote }: Props) => {
  return (
    <div
      key={day}
      className={styles.dayCircle}
      style={{ background: hasQuote ? "black" : "none" }}
    />
  );
};
