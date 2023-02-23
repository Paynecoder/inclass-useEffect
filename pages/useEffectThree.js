import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/useEffectThree.module.css";

export default function useEffectThree() {
  const [count, setCount] = useState(0);

  const [value, setValue] = useState(-10);

  useEffect(() => {
    setValue(value + 10);
  }, [count]);
  return (
    <>
      <main className={styles.main}>
        <Link href="/">Home</Link>
        <div className={styles.maindiv}>
          <h1 className={styles.title}>useEffectThree</h1>
          <button onClick={() => setCount(count + 1)} className={styles.button}>
            Click Me
          </button>
        </div>
        <div>
          <h2 className={styles.count}>Value: {value}</h2>
        </div>
        <div className={styles.desc}>
          <h3 className={styles.desctitle}>Description:</h3>
          <p className={styles.descp}>
            This Example uses useState and useEffect to demonstrate how a
            useEffect hook activates on load, aswell as when an inner-count is
            updated.
          </p>
        </div>
      </main>
    </>
  );
}
