import Head from "next/head";
import React, { useState } from "react";
import CryptoChart from "../components/Global/CryptoChart";
import { InferGetServerSidePropsType } from "next";
import { fetchHistoricalCryptoData } from "../utils/crypto";
type Props = {};

export async function getServerSideProps() {
  const historicalCryptoData = await fetchHistoricalCryptoData("bitcoin", "1m");
  return { props: { historicalCryptoData } };
}
export default function testPage({
  historicalCryptoData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [chartOptions, setChartOptions] = useState({
    plugins: {
      legend: { display: false },
      title: { display: false, text: `COIN historical chart` },
    },
    scales: {
      x: { ticks: { display: true, autoSkip: true, maxTicksLimit: 8 } },
    },
  });
  const [chartData, setChartData] = useState({
    labels: historicalCryptoData.prices.map((dataItem: any) =>
      new Date(dataItem[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: "example label",

        data: historicalCryptoData.prices.map((dataItem: any) => dataItem[1]),
        borderColor:
          historicalCryptoData.prices[0][1] <
          historicalCryptoData.prices[historicalCryptoData.prices.length - 1][1]
            ? "green"
            : "red",
      },
    ],
  });
  return (
    <div>
      <Head>
        <title>Test Page for components</title>
        <link rel="icon" href="/crypto-icon.png" />
      </Head>
      <CryptoChart data={chartData} options={chartOptions} />
    </div>
  );
}
