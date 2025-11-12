import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.inner}>
        <div>
          <span className={styles.brand}>Grok Advantage</span>
          <p className={styles.copy}>
            Built for operators who treat signal as a competitive weapon.
          </p>
        </div>
        <div className={styles.links}>
          <a href="#capabilities">Capabilities</a>
          <a href="#composer">Composer</a>
          <a href="#briefing">Briefing</a>
        </div>
        <div className={styles.meta}>
          <span>© {new Date().getFullYear()} Super Heavy Command.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
