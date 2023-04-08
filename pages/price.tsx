import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import CryptoTable from "../components/Price/CryptoTable";
import Hero from "../components/Price/Hero";
import { useState } from "react";
import { fetchBasicCryptoData, fetchCryptoOverviewData } from "../utils/crypto";

export async function getServerSideProps() {
  const basicCryptoData = await fetchBasicCryptoData(25, 0);
  const cryptoOverviewData = await fetchCryptoOverviewData();
  //NOTE there is no safety check... assuming that it will always return a result
  return { props: { basicCryptoData, cryptoOverviewData } };
}
export default function Price({
  basicCryptoData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [cryptoData, setCryptoData] = useState(basicCryptoData);

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
