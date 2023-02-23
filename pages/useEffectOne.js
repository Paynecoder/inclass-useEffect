import { useState, useEffect } from "react";
import styles from "@/styles/useEffectOne.module.css";

import Link from "next/link";

export default function useEffectOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    setCount(count + 1);
  });

  return (
    <>
      <main className={styles.main}>
        <Link href="/">Home</Link>
        <div>
          <h1 className={styles.title}>useEffectOne</h1>
        </div>
        <div>
          <h2 className={styles.count}>Count: {count}</h2>
          <button onClick={() => setCount(undefined)} className={styles.button}>
            Stop Count
          </button>
        </div>
        <div className={styles.desc}>
          <h3 className={styles.desctitle}>Description:</h3>
          <p className={styles.descp}>
            This Example uses useState and useEffect to create an infinite loop.
          </p>
        </div>
      </main>
    </>
  );
}
