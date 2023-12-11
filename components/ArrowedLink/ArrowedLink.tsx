import styles from "./ArrowedLink.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export function ArrowedLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className={styles.link} href={href}>
      {children}
      <FaArrowRight className={styles.arrow} />
    </Link>
  );
}
