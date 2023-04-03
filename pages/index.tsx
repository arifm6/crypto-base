import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import CryptoTable from "../components/CryptoTable";
import Hero from "../components/Hero";
import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.coincap.io/v2/assets?limit=25&offset=0",
    {
      headers: {
        Authorization: `Bearer ${process.env.COINCAP_PRIVATE_API_KEY}`,
      },
    }
  );
  const data = await res.json();
  const initialCryptoData = data.data;

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
