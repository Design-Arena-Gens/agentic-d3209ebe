import styles from "./Background.module.css";

export function Background() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={`${styles.beam} ${styles.beamOne}`} />
      <div className={`${styles.beam} ${styles.beamTwo}`} />
      <div className={`${styles.beam} ${styles.beamThree}`} />
      <div className={styles.grid}>
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} className={styles.point} />
        ))}
      </div>
    </div>
  );
}
