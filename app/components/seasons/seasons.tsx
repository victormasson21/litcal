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
};

export const Seasons = ({ seasons }: Props): ReactNode => (
  <div className={styles.container}>
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

export const seasonsData: Record<string, Season> = {
  winter: {
    className: "winter",
    alt: "Etching of a snowflake",
    src: snowflake,
    height: "90%",
    transform: "rotate(10deg)",
  },
  spring: {
    className: "spring",
    alt: "Etching of a bud",
    src: smallbud,
    height: "130%",
    transform: "rotate(-30deg)",
  },
  summer: {
    className: "summer",
    alt: "Etching of the sun",
    src: sun,
    height: "100%",
    transform: "",
  },
  autumn: {
    className: "autumn",
    alt: "Etching of a chestnut leaf",
    src: leave,
    height: "110%",
    transform: "rotate(20deg)",
  },
};
