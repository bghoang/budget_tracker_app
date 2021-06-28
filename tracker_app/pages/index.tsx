import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Budget Tracker</title>
        <meta name="my budget tracker" content="my budget tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello</div>
    </div>
  );
}
