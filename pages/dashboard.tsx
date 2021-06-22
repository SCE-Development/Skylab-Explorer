import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";
import NextLink from "next/link";
export default function Home() {
  return (
    <div>
    <div className={styles.navbar}>

       <NextLink href="/dashboard">
          <a>Analytics</a>
        </NextLink>

         <NextLink href="/analytics/discord">
          <a>Discord</a>
        </NextLink>

         <NextLink href="/analytics/corev4">
          <a>Core v4</a>
        </NextLink>
    </div>

  <div className={styles.container}>
        <h1 className={styles.titleBlue}>
          Welcome to The Dashboard
        </h1>
</div>
</div>
  );
}
