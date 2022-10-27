import Head from "next/head";
import Image from "next/image";

import landingImg from "next/image";
import Work from "./Work";
import Main from "./Main";
import Contact from "./Contact";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jack Edmondson Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        <Main />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}
