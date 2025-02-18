import type { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import smallbud from "./images/smallbud.png";
import leave from "./images/leave.png";
import snowflake from "./images/snowflake.png";
import sun from "./images/sun.png";
import styles from "./seasons.module.css";

interface Season {
  className: string;
  alt: string;
  src: StaticImageData;
  height: string;
  transform: string;
}

type Props = {
  seasons: Season[];
  height?: string;
};

export const Seasons = ({ seasons, height = "60px" }: Props): ReactNode => (
  <div className={styles.container} style={{ height }}>
    {seasons.map(({ className, src, alt, height, transform }) => (
      <Image
        className={className && styles[className]}
        key={alt}
        src={src}
        alt={alt}
        style={{ height, transform, width: "fit-content" }}
      />
    ))}
  </div>
);

export const seasonsData: Season[] = [
  {
    className: "",
    alt: "Etching of a snowflake",
    src: snowflake,
    height: "90%",
    transform: "rotate(10deg)",
  },
  {
    className: "",
    alt: "Etching of a bud",
    src: smallbud,
    height: "130%",
    transform: "rotate(-30deg)",
  },
  {
    className: "rotate",
    alt: "Etching of the sun",
    src: sun,
    height: "100%",
    transform: "",
  },
  {
    className: "",
    alt: "Etching of a chestnut leaf",
    src: leave,
    height: "110%",
    transform: "rotate(20deg)",
  },
];
