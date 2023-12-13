import React from "react";
import styles from "./Card.module.css";

type Props = {
  header: string;
  children: React.ReactNode;
};

export function Card({ header, children }: Props) {
  return (
    <section className={styles.card}>
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
