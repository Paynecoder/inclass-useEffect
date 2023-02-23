import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>useEffect Dictionary</h1>

        <Link href="/useEffectOne">useEffectOne</Link>
        <Link href="/useEffectTwo">useEffectTwo</Link>
        <Link href="/useEffectThree">useEffectThree</Link>
        <Link href="/carouselPage">Carousel</Link>
      </main>
    </>
  );
}
