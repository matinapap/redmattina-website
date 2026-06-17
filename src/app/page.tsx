import FlipThroughSketchbook from "@/features/flipbook/FlipThroughSketchbook";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.stage}>
        <div className={styles.flipbookSlot}>
          <FlipThroughSketchbook />
        </div>
      </section>
    </div>
  );
}
