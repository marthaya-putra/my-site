import React from "react";
import styles from "./Contact.module.css";

type Props = {
  icon: React.ReactNode;
  label: string;
};

export function Contact({ icon, label }: Props) {
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      <div>{label}</div>
    </div>
  );
}
