import type { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import smallbud from "./images/smallbud.png";
import leave from "./images/leave.png";
import snowflake from "./images/snowflake.png";
import sun from "./images/sun.png";
import styles from "./seasons.module.css";

export type SeasonKey = "winter" | "spring" | "summer" | "autumn";
interface SeasonImage {
  className: string;
  alt: string;
  src: StaticImageData;
}

type Props = {
  seasons: SeasonKey[];
};

export const Seasons = ({ seasons }: Props): ReactNode => (
  <div className={styles.container}>
    {seasons.map((key) => {
      const { className, src, alt } = seasonsData[key];
      return (
        <Image
          className={className && styles[className]}
          key={alt}
          src={src}
          alt={alt}
          style={{ width: "fit-content" }}
        />
      );
    })}
  </div>
);

export const seasonsData: Record<SeasonKey, SeasonImage> = {
  winter: {
    className: "winter",
    alt: "Etching of a snowflake",
    src: snowflake,
  },
  spring: {
    className: "spring",
    alt: "Etching of a bud",
    src: smallbud,
  },
  summer: {
    className: "summer",
    alt: "Etching of the sun",
    src: sun,
  },
  autumn: {
    className: "autumn",
    alt: "Etching of a chestnut leaf",
    src: leave,
  },
};
