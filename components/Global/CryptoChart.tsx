import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";
Chart.register(CategoryScale);
type Props = {
  data: { datasets: any };
  options: object;
};

export default function CryptoChart({ data, options }: Props) {
  console.log(data);
  return <Line data={data} options={options} />;
}

// use these options for a simple diagram
export const basicOptions = {
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    x: { ticks: { display: false } },
    y: { ticks: { display: false } },
  },
};
