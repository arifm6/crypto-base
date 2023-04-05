import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import { fetchCoinCapCryptoData } from "../utils/crypto";
import Head from "next/head";
import Navbar from "../components/Home/Navbar";
import CryptoTable from "../components/Home/CryptoTable";

type Props = {};

export async function getStaticProps() {
  const coincapCryptoData = await fetchCoinCapCryptoData(5, 0);

  return { props: { coincapCryptoData } };
}

export default function Home({
  coincapCryptoData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>CryptoBase</title>
        <link rel="icon" href="/crypto-icon.png" />
      </Head>
      <Navbar />
      <CryptoTable coincapCryptoData={coincapCryptoData} />
    </div>
  );
}
