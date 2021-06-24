import Head from "next/head";
<<<<<<< HEAD
import Image from "next/image";
import styles from "../styles/home.module.css";
import NextLink from "next/link";
export default function Home() {
  return (
    <div>
    <div className={styles.navbar}>
=======
import Styles from "../styles/home.module.css";
import NextLink from "next/link";

export default function Dashboard() {
  return (
    <div>
    <div className={Styles.navbar}>
>>>>>>> a1a19212761294e0eca34b86ed2b5383f0505a7b

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

<<<<<<< HEAD
  <div className={styles.container}>
        <h1 className={styles.titleBlue}>
=======
  <div className={Styles.container}>
        <h1 className={Styles.titleBlue}>
>>>>>>> a1a19212761294e0eca34b86ed2b5383f0505a7b
          Welcome to The Dashboard
        </h1>
</div>
</div>
  );
}
