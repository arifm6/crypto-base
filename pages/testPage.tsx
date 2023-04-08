import Head from "next/head";
import React from "react";
import CryptoChart from "../components/CryptoChart";
import { InferGetServerSidePropsType } from "next";
import { fetchHistoricalCryptoData } from "../utils/crypto";

type Props = {};

export async function getServerSideProps() {
  const historicalCryptoData = await fetchHistoricalCryptoData(
    "bitcoin",
    "max"
  );
  return { props: { historicalCryptoData } };
}
export default function testPage({
  historicalCryptoData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Test Page for components</title>
        <link rel="icon" href="/crypto-icon.png" />
      </Head>
      <CryptoChart />
    </div>
  );
}
