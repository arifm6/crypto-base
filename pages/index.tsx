import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import { fetchBasicCryptoData } from "../utils/crypto";
import Head from "next/head";
import Navbar from "../components/Home/Navbar";
import CryptoTable from "../components/Home/CryptoTable";

type Props = {};

export async function getStaticProps() {
  const rankedCryptoData = await fetchBasicCryptoData(5, 0);

  return { props: { rankedCryptoData } };
}

export default function Home({
  rankedCryptoData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>CryptoBase</title>
        <link rel="icon" href="/crypto-icon.png" />
      </Head>
      <Navbar />
      <CryptoTable rankedCryptoData={rankedCryptoData} />
    </div>
  );
}
