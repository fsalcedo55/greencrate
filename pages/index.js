import Head from "next/head";
import Navbar from "../pages/navbar";
import Hero from "../pages/hero";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GreenCrate</title>
        <meta name="description" content="Decentralized food crisis app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <Hero />
      </main>

      <footer className={styles.footer}>
        <div>GreenCrate</div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </footer>
    </div>
  );
}
