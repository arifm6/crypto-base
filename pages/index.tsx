import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import { fetchBasicCryptoData } from "../utils/crypto";
import Head from "next/head";
import Navbar from "../components/Home/Navbar";
import Trading from "../components/Home/Trading";
import Hero from "../components/Home/Hero";
import Benefits from "../components/Home/Benefits";
import AboutBanner from "../components/Home/AboutBanner";
import GetStarted from "../components/Home/GetStarted";

type Props = {};

export async function getStaticProps() {
  const rankedCryptoData = await fetchBasicCryptoData(5, 0);

  return { props: { rankedCryptoData } };
}

export default function Home({
  rankedCryptoData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="space-y-20 md:space-y-36">
      <Head>
        <title>CryptoBase</title>
        <link rel="icon" href="/crypto-icon.png" />
      </Head>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <Trading rankedCryptoData={rankedCryptoData} />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <AboutBanner />
      </section>
      <section>
        <GetStarted />
      </section>
    </div>
  );
}
