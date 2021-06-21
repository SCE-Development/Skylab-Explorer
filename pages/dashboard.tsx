import Head from "next/head";
import Styles from "../styles/home.module.css";
import NextLink from "next/link";

export default function Dashboard() {
  return (
    <div>
    <div className={Styles.navbar}>

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

  <div className={Styles.container}>
        <h1 className={Styles.titleBlue}>
          Welcome to The Dashboard
        </h1>
</div>
</div>
  );
}
