import Image from "next/image";
import styles from "./page.module.css";
import { ArrowedLink } from "@/components/ArrowedLink/ArrowedLink";
import clsx from "clsx";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Company } from "@/components/Company/Company";

export default function Home() {
  const companies = [
    {
      logo: "/logos/glints.png",
      name: "Glints",
    },
    {
      logo: "/logos/nintex.png",
      name: "Nintex",
    },
    {
      logo: "/logos/apar.png",
      name: "Apar Technologies",
    },
    {
      logo: "/logos/arvato.png",
      name: "Arvato",
    },
    {
      logo: "/logos/gfk.png",
      name: "GfK",
    },
  ];
  return (
    <>
      <header />
      <div className={styles.wrapper}>
        <main className={`maxWidthWrapper ${styles.main}`}>
          <section className={styles.mainSection}>
            <nav className={styles.nav}>
              <li>
                <ul>
                  <Link
                    href={
                      "https://www.linkedin.com/in/marthaya-putra-a5352227/"
                    }
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                </ul>
                <ul>
                  <Link href={"https://github.com/nasiUduk"} target="_blank">
                    <FaGithub />
                  </Link>
                </ul>
                <ul>
                  <Link
                    href={"https://twitter.com/marthayaputra"}
                    target="_blank"
                  >
                    <FaSquareXTwitter />
                  </Link>
                </ul>
              </li>
            </nav>
            <div className={styles.profileWrapper}>
              <Image
                className={styles.profilePicture}
                src="/background-profile.png"
                alt="Picture of Marthaya Putra"
                height={500}
                width={500}
              />
              <p className={clsx(styles.name, styles.firstName)}>Marthaya</p>
              <p className={clsx(styles.name, styles.lastName)}>Putra</p>
            </div>
            <article className={styles.article}>
              <div className={styles.linkWrapper}>
                <ArrowedLink href="/resume">
                  <span>View my full resume</span>
                </ArrowedLink>
              </div>
              <p>
                <span className={styles.waving}>👋</span> I'm Putra, a
                passionate Front-end Engineer based in Bali, Indonesia with a
                knack for crafting seamless and delightful user experiences.
              </p>
              <p>
                Well-versed in modern web technologies, I specialize in building
                robust and scalable applications using frameworks such as{" "}
                <em>
                  <strong>React</strong>
                </em>
                ,{" "}
                <em>
                  <strong>Next.js</strong>
                </em>
                , and{" "}
                <em>
                  <strong>Angular</strong>
                </em>
                .
              </p>
            </article>
            <section className={styles.subSection}>
              <div className={styles.companyWrapper}>
                <div className={styles.companiesLine} />
                <div className={styles.companiesCaption}>
                  Companies I've worked for
                </div>
                <div className={styles.companies}>
                  {companies.map((c) => (
                    <Company logo={c.logo} name={c.name} key={c.name} />
                  ))}
                </div>
              </div>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}
