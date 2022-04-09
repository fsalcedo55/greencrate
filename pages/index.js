import Head from "next/head";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FoodBank from "../components/FoodBank";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DiscountTiers from "../components/DiscountTiers";

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
        <FoodBank />
        <DiscountTiers />
      </main>

      <footer className={styles.footer}>
        <div>GreenCrate</div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </footer>
    </div>
  );
}
