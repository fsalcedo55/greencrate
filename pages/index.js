import Head from "next/head";

import Hero from "./Hero";
import FoodBank from "../components/FoodBank";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DiscountTiers from "../components/DiscountTiers";

export default function Home() {
  return (
    <div className="bg-[#102418]">
      <Head>
        <title>GreenCrate</title>
        <meta name="description" content="Decentralized food crisis app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap" rel="stylesheet" />
      </Head>

      
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/logo.svg"
              className="w-72"
              alt="greencratelogo"
              height={50}
              width={250}
            />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-white hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-[#DD6C03] text-white border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <section className="p-12  pt-24 pb-32 max-w-6xl mx-auto flex items-center">
        <div className="w-7/12">
          <div className="text-7xl font-black text-white">
            Helping Hungry Families
          </div>
          <div className="text-white mt-4">
          Together we can pool funds to help subsidize groceries for families in difficult moments
          </div>
        </div>
        <div className="w-5/12">
          <img src="/broc.png"  className="w-60 mx-auto"/>
        </div>
      </section>
      <section className="bg-[#C3B37C] p-12">
        <div className="max-w-5xl mx-auto flex h-full">
          <div className="w-1/2">
            <div class="bg-white rounded-xl h-full p-12">
              <img src="/frust.png"  className="w-24"/> 
              <div class="text-5xl font-bold mt-6">
                Inflation Woes
              </div>
              <div>
                <p>Inflation has increased to incredible heights. Poverty is on the rise and every person that falls behind brings down communities all across the US. </p>
                <p>You can directly help repair the damage and show your support with incredible artwork by guest artist yetiscream. </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-6">
            <img src="/percent.png" />
     
          </div>
        </div>

      </section>


      


  

      <main className={styles.main}>
        <Hero />
        <FoodBank />
        <DiscountTiers />
      </main>

      <footer className={styles.footer}>
        <Image src="/logo.svg" alt="Vercel Logo" width={200} height={72} />
      </footer>
    </div>
  );
}
