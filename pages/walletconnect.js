import Head from "next/head";
import Hero from "../pages/Hero";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

// Create a connector
const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal,
});

// Check if connection is already established
if (!connector.connected) {
  // create new session
  connector.createSession();
}

// Subscribe to connection events
connector.on("connect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Get provided accounts and chainId
  const { accounts, chainId } = payload.params[0];
});

connector.on("session_update", (error, payload) => {
  if (error) {
    throw error;
  }

  // Get updated accounts and chainId
  const { accounts, chainId } = payload.params[0];
});

connector.on("disconnect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Delete connector
});

console.log(connector.accounts);

export default function Home() {
  return (
    <div className="bg-[#102418]">
      <Head>
        <title>GreenCrate</title>
        <meta name="description" content="Decentralized food crisis app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap"
          rel="stylesheet"
        /> */}
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
            <a className="mr-5 text-white hover:text-gray-900"></a>
          </nav>
          <Link href="/walletconnect">
            <a className="inline-flex items-center bg-[#DD6C03] text-white border-0 py-3 px-6 focus:outline-none hover:bg-orange-200 rounded text-base mt-4 md:mt-0">
              Dapp
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
            </a>
          </Link>
        </div>
      </header>
      <main className="max-w-lg mx-auto h-screen pt-12">
        <div className="bg-white rounded-xl p-12">
          <div className="text-center">
            <Image
              src="/check.png"
              className="mx-auto"
              width={100}
              height={100}
              alt="check-logo"
            />
            <div className="font-bold text-2xl">wallet address</div>
            <div> {connector.accounts[0]} </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>GreenCrate</div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </footer>
    </div>
  );
}
