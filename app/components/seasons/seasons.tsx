import type { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import spring from "./images/spring.png";
import autumn from "./images/autumn.png";
import winter from "./images/winter.png";
import summer from "./images/summer.png";
import styles from "./seasons.module.css";

export type SeasonKey = "winter" | "spring" | "summer" | "autumn";
interface SeasonImage {
  className: string;
  alt: string;
  src: StaticImageData;
  style: object;
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

export const Season = ({
  season,
  style,
}: {
  season: SeasonKey;
  style?: object;
}): ReactNode => {
  const { className, src, alt, style: baseStyle } = seasonsData[season];
  return (
    <Image
      className={styles[className]}
      src={src}
      alt={alt}
      style={{ ...baseStyle, ...style }}
    />
  );
};

export const seasonsData: Record<SeasonKey, SeasonImage> = {
  winter: {
    className: "winter",
    alt: "Etching of a snowflake",
    src: winter,
    style: {
      width: "fit-content",
      height: "100%",
    },
  },
  spring: {
    className: "spring",
    alt: "Etching of a bud",
    src: spring,
    style: {
      width: "fit-content",
      height: "100%",
    },
  },
  summer: {
    className: "summer",
    alt: "Etching of the sun",
    src: summer,
    style: {
      width: "fit-content",
      height: "100%",
    },
  },
  autumn: {
    className: "autumn",
    alt: "Etching of a chestnut leaf",
    src: autumn,
    style: {
      width: "fit-content",
      height: "100%",
    },
  },
};
