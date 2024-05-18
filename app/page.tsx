import styles from "./page.module.css";
import { NameTexture } from "./components/NameTexture";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.cloud}>☁︎</div>
          <div className={styles.name}>Adam Rowe</div>
        </div>
        <div className={styles.bottom}>
          <a href="https://www.linkedin.com/in/admrwe/">
            Design system developer
          </a>
          , designer, <a href="https://soundcloud.com/admrwe">musician</a>
        </div>
      </div>
      <NameTexture />
    </main>
  );
}
