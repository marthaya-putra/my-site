import styles from "./Experiences.module.css";
import { Experience } from "./Experience";
import { ExperienceData, ResumeData } from "../type";

export async function Experiences({
  experiences,
}: {
  experiences: ExperienceData[];
}) {
  return (
    <div className={styles.container}>
      <div className={styles.verticalLine} />
      <div className={styles.content}>
        {(experiences || []).map((exp) => (
          <>
            <div className={styles.bullet} />
            <Experience {...exp} />
          </>
        ))}
      </div>
    </div>
  );
}
