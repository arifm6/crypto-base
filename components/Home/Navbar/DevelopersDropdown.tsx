import React from "react";
import DevelopersDropdownItem from "./DevelopersDropdownItem";
type Props = {};

export default function DevelopersDropdown({}: Props) {
  const apiData = [
    {
      url: "https://www.coingecko.com/en/api",
      icon: "/coingecko-logo.svg",
      iconAlt: "Coin Gecko Logo",
      title: "CoinGecko API",
      content: "The most comprehensive but low request rate cryptocurrencyAPI",
    },
    {
      url: "https://docs.coincap.io/",
      icon: "/coincap-logo.svg",
      iconAlt: "CoinCap Logo",
      title: "CoinCap API",
      content: "A simple, high request, free cryptocurrency API service",
    },
    {
      url: "https://coinmarketcap.com/api/",
      icon: "/coinmarketcap-logo.svg",
      iconAlt: "CoinMarketCap Logo",
      title: "CoinMarketCap API",
      content: "A well rounded medium frequency API request service",
    },
    {
      url: "https://api.coinpaprika.com/",
      icon: "/coinpaprika-logo.svg",
      iconAlt: "CoinPaprika Logo",
      title: "CoinPaprika API",
      content:
        "Another well rounded medium frequency API service good for historical data",
    },
  ];
  const techData = [
    {
      url: "https://www.typescriptlang.org/",
      icon: "/typescript.svg",
      iconAlt: "TypeScript Logo",
      title: "TypeScript",
      content:
        "A strongly typed programming language that builds on JavaScript",
    },
    {
      url: "https://react.dev/",
      icon: "/react.svg",
      iconAlt: "React Logo",
      title: "React",
      content: "A JavaScript library for building user interfaces",
    },
    {
      url: "https://www.mongodb.com/",
      icon: "/mongodb-icon.svg",
      iconAlt: "MongoDB Logo",
      title: "MongoDB",
      content: "A highly available document-oriented database program",
    },
    {
      url: "https://nodejs.org/",
      icon: "/nodejs-icon.svg",
      iconAlt: "NodeJS Logo",
      title: "NodeJS ",
      content: "A back-end JavaScript runtime environment ",
    },
  ];
  const otherData = [
    {
      url: "https://nextjs.org/",
      icon: "/nextjs-icon.svg",
      iconAlt: "NextJS Logo",
      title: "NextJS",
      content: "A highly available document-oriented database program",
    },

    {
      url: "https://daisyui.com/",
      icon: "/daisyui-icon.svg",
      iconAlt: "daisyUI Logo",
      title: "daisyUI",
      content: "A customizable Tailwind CSS component library ",
    },
    {
      url: "https://www.chartjs.org/",
      icon: "/chartjs-logo.svg",
      iconAlt: "ChartJS",
      title: "ChartJS",
      content: "A free, open-source JavaScript library for data visualization",
    },
    {
      url: "https://react-icons.github.io/react-icons//",
      icon: "/react-icons-logo.svg",
      iconAlt: "React Icons Logo",
      title: "React Icons ",
      content: "A library of commonly used SVG icons ",
    },
  ];
  return (
    <div className="developers-dropdown-grid gap-6 ">
      <div className="flex flex-col gap-6 row-span-5">
        <h2 className="text-xl text-center font-medium ">APIs</h2>
        <ul className="flex flex-col gap-6">
          {apiData.map((apiItem) => {
            return (
              <DevelopersDropdownItem
                url={apiItem.url}
                icon={apiItem.icon}
                iconAlt={apiItem.iconAlt}
                title={apiItem.title}
                content={apiItem.content}
              />
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-6 row-span-5">
        <h2 className="text-xl text-center font-medium ">Tech Used</h2>
        <ul className="flex flex-col gap-6">
          {techData.map((techItem) => {
            return (
              <DevelopersDropdownItem
                url={techItem.url}
                icon={techItem.icon}
                iconAlt={techItem.iconAlt}
                title={techItem.title}
                content={techItem.content}
              />
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-6 row-span-5">
        <h2 className="text-xl text-center font-medium ">Other Tools</h2>
        <ul className="flex flex-col gap-6">
          {otherData.map((otherItem) => {
            return (
              <DevelopersDropdownItem
                key={otherItem.title}
                url={otherItem.url}
                icon={otherItem.icon}
                iconAlt={otherItem.iconAlt}
                title={otherItem.title}
                content={otherItem.content}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
