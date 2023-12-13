import { promises as fs } from "fs";
import { Contact } from "@/components/Contact/Contact";
import styles from "./page.module.css";
import Image from "next/image";
import { MdEmail, MdLocalPhone, MdPlace } from "react-icons/md";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Card } from "./Card";
import { Experiences } from "./experiences/Experiences";
import { ResumeData } from "./type";

export default async function Resume() {
  const email = "marthayaputra@hotmail.com";
  const phone = "+6281290672870";
  const file = await fs.readFile(
    process.cwd() + "/app/resume/data/resume.json",
    "utf8"
  );
  const resume: ResumeData = JSON.parse(file);

  return (
    <div className="maxWidthWrapper">
      <header className={styles.header}>
        <Link href="/" className={styles.arrowLink}>
          <FaArrowLeftLong className={styles.arrow} />
        </Link>
        <Image
          className={styles.picture}
          src="/profile-picture.png"
          alt="Profile picture"
          width={120}
          height={120}
        />
        <div>
          <h1 className={styles.h1}>Marthaya Putra</h1>
          <h4 className={styles.h4}>Seasoned Front-end Engineer</h4>
        </div>
        <div className={styles.contacts}>
          <Link href={`mailto:${email}`} target="_blank">
            <Contact icon={<MdEmail />} label={email} />
          </Link>
          <Link
            href={`https://wa.me/${phone.replace("+", "")}`}
            target="_blank"
          >
            <Contact icon={<MdLocalPhone />} label={phone} />
          </Link>
          <Contact icon={<MdPlace />} label="Bali, Indonesia" />
        </div>
      </header>
      <main className={styles.main}>
        <Card header="Summary">
          <p>{resume.summary}</p>
        </Card>
        <Card header="Experiences">
          <Experiences experiences={resume.workExperiences} />
        </Card>
      </main>
    </div>
  );
}
