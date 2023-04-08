import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js/auto";
ChartJS.register(CategoryScale);

type Props = {};

export default function CryptoChart({}: Props) {
  const [historicalData, setHistoricalData] = useState({
    labels: [2016, 2017, 2018, 2019],
    datasets: [{ data: [4, 7, 9, 2] }],
  });

  return <Line data={historicalData}></Line>;
}
