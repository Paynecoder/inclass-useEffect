import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/useEffectTwo.module.css";

export default function useEffectTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    setCount(count + 50);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Link href="/">Home</Link>
        <div>
          <h1 className={styles.title}>useEffectTwo</h1>
        </div>
        <div>
          <h2 className={styles.count}>Count: {count}</h2>
        </div>
        <div className={styles.desc}>
          <h3 className={styles.desctitle}>Description:</h3>
          <p className={styles.descp}>
            This Example uses useState and useEffect to demonstrate how a
            useEffect hook activates on load.
          </p>
        </div>
      </main>
    </>
  );
}
