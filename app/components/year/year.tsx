import { Month } from "./month";
import { MonthKey, monthKeys } from "../../types/logic";

type Props = {
  quotes: Record<string, number[]>; // { August:  [4, 6, 26, 31], July: [27, 26, 11], ...}
};

export const Year = ({ quotes }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "32px",
      }}
    >
      {monthKeys.map((key: MonthKey) => {
        return <Month key={key} month={key} quotes={quotes[key]} />;
      })}
    </div>
  );
};
