import type { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import smallbud from "./images/smallbud.png";
import leave from "./images/leave.png";
import snowflake from "./images/snowflake.png";
import sun from "./images/sun.png";
import styles from "./seasons.module.css";

interface Season {
  alt: string;
  src: StaticImageData;
  height: string;
  transform: string;
}

type Props = {
  seasons: Season[];
  height?: string;
};
console.log({ styles });

export const Seasons = ({ seasons, height = "60px" }: Props): ReactNode => (
  <div
    // className={styles.seasonsContainer}
    style={{
      height,
      display: "flex",
      flexDirection: "row",
      gap: "16px",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {seasons.map(({ src, alt, height, transform }) => (
      <Image
        key={alt}
        src={src}
        alt={alt}
        style={{ height, width: "fit-content", transform }}
      />
    ))}
  </div>
);

export const seasonsData: Season[] = [
  {
    alt: "Etching of a snowflake",
    src: snowflake,
    height: "90%",
    transform: "",
  },
  {
    alt: "Etching of a bud",
    src: smallbud,
    height: "130%",
    transform: "rotate(-30deg)",
  },
  { alt: "Etching of the sun", src: sun, height: "100%", transform: "" },
  {
    alt: "Etching of a chestnut leaf",
    src: leave,
    height: "110%",
    transform: "rotate(20deg)",
  },
];
