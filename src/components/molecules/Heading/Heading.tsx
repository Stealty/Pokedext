import React from "react";
import styles from "./Heading.module.scss";

type HeadingProps = {
  title: string;
  className?: string;
}

export default function Heading({ title, className }: HeadingProps) {
  return (
    <div className={styles.Heading__content}>
      <img
        src="./images/Pokeball.png"
        alt="Pokeball ilustration"
        className={styles.Heading__image}
      />
      <h1 className={styles.Heading__title + " " + className}>{title}</h1>
    </div>
  );
}
