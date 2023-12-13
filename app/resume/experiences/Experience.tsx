import { ExperienceData } from "../type";
import styles from "./Experience.module.css";

export function Experience({
  from,
  to,
  company,
  location,
  title,
  achievements = [],
}: ExperienceData) {
  return (
    <div className={styles.container}>
      <div className={styles.time}>
        {from} - {to ? to : "Present"}
      </div>
      <div className={styles.companyAndlocation}>
        {`${company} | ${location.city}, ${location.country} ${
          location.isRemote ? "(Remote)" : ""
        }`}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.achievements}>
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
