import Image from "next/image";
import styles from "./Company.module.css";

type Props = {
  logo: string;
  name: string;
};

export function Company({ logo, name }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={logo}
        width={100}
        height={50}
        alt={name}
        className={styles.logo}
      ></Image>
    </div>
  );
}
