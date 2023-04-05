import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import CryptoTable from "../components/Price/CryptoTable";
import Hero from "../components/Price/Hero";
import { useState } from "react";
import {
  fetchCoinCapCryptoData,
  fetchCoinMarketCapData,
} from "../utils/crypto";

export async function getServerSideProps() {
  const coincapCryptoData = await fetchCoinCapCryptoData(25, 0);
  const coinmarketcapData = await fetchCoinMarketCapData();
  //NOTE there is no safety check... assuming that it will always return a result
  return { props: { coincapCryptoData, coinmarketcapData } };
}
export default function Price({
  coincapCryptoData,
  coinmarketcapData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [cryptoData, setCryptoData] = useState(coincapCryptoData);

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
