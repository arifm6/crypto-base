import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import CryptoTable from "../components/CryptoTable";
import Hero from "../components/Hero";
import { useState } from "react";
import { fetchCoinCapCryptoData } from "../utils/crypto";

export async function getServerSideProps() {
  const initialCryptoData = await fetchCoinCapCryptoData(25, 0);

  return { props: { initialCryptoData } };
}

export default function Home({
  initialCryptoData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [cryptoData, setCryptoData] = useState(initialCryptoData);
  return (
    <div>
      <Head>
        <title>CryptoBase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {<CryptoTable cryptoData={cryptoData} setCryptoData={setCryptoData} />}
    </div>
  );
}
