import Link from "next/link";
import Carousel from "@/components/Carousel";
import styles from "@/styles/carouselPage.module.css";

export default function carouselPage() {
  return (
    <>
      <main className={styles.main}>
        <Link href="/">Home</Link>
        <Carousel />
        <div className={styles.desc}>
          <h3 className={styles.desctitle}>Description:</h3>
          <p className={styles.descp}>
            This Example uses useState to keep track of the current slide. The
            State is updated when the arrows are clicked based on their
            direction.
          </p>
        </div>
      </main>
    </>
  );
}
