import React, { Dispatch, useState } from "react";
import {
  TiArrowSortedUp,
  TiArrowSortedDown,
  TiArrowUnsorted,
} from "react-icons/ti";
import ReactPaginate from "react-paginate";
import CryptoTablePagination from "./CryptoTablePagination";
import Image from "next/image";
import {
  cryptoNumberFormatter,
  roundCryptoPercentage,
  roundCryptoPrice,
} from "../utils/crypto";
type Coin = {
  id: string;
  name: string;
  rank: string;
  priceUsd: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
  marketCapUsd: string;
  symbol: string;

  [others: string]: any;
};

type Props = {
  cryptoData: Array<Coin>;
  setCryptoData: Dispatch<any>;
};
export default function CryptoTable({ cryptoData, setCryptoData }: Props) {
  const [sortBy, setSortBy] = useState("ascending rank");
  const sortByInt = (property: string) => {
    const dummyData = [...cryptoData];
    //always sort ascending if unsorted
    dummyData.sort(function (a: Coin, b: Coin) {
      return sortBy !== `ascending ${property}`
        ? a[property] - b[property]
        : b[property] - a[property];
    });
    setCryptoData(dummyData);
    setSortBy((prevSortBy: string) => {
      return prevSortBy === `ascending ${property}`
        ? `descending ${property}`
        : `ascending ${property}`;
    });
  };
  const sortByStr = (property: string) => {
    const dummyData = [...cryptoData];
    dummyData.sort(function (a: Coin, b: Coin) {
      return sortBy !== `ascending ${property}`
        ? a[property].localeCompare(b[property])
        : b[property].localeCompare(a[property]);
    });
    setCryptoData(dummyData);
    setSortBy((prevSortBy: string) => {
      return prevSortBy === `ascending ${property}`
        ? `descending ${property}`
        : `ascending ${property}`;
    });
  };
  const addDefaultSrc = (event: any) => {
    event.target.src = "./crypto-icon.png";
  };
  return (
    <div className="max-w-7xl mx-auto space-y-2">
      <h1 className="text-3xl">Today's Cryptocurrency Prices</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th className="">
                <button
                  className="flex items-center"
                  onClick={() => {
                    sortByInt("rank");
                  }}
                >
                  <span className="font-light text-xl">#</span>
                  <span className="text-md">
                    {sortBy === "ascending rank" ? (
                      <TiArrowSortedUp />
                    ) : sortBy === "descending rank" ? (
                      <TiArrowSortedDown />
                    ) : (
                      <TiArrowUnsorted />
                    )}
                  </span>
                </button>
              </th>

              <th>
                <button
                  className="flex items-center"
                  onClick={() => sortByStr("name")}
                >
                  Name
                  <span className="text-md">
                    {sortBy === "ascending name" ? (
                      <TiArrowSortedUp />
                    ) : sortBy === "descending name" ? (
                      <TiArrowSortedDown />
                    ) : (
                      <TiArrowUnsorted />
                    )}
                  </span>
                </button>
              </th>
              <th className="">Price</th>
              <th className="">24H Change</th>
              <th className="">24H Volume</th>
              <th className="">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((coin: Coin) => {
              const rocColour =
                parseFloat(coin.changePercent24Hr) > 0
                  ? "text-[#20BCA4]"
                  : "text-[#D9475A]";
              return (
                <tr key={coin.id}>
                  <td>{coin.rank}</td>

                  <td className="flex items-center  ">
                    <img
                      src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                      onError={(e) => addDefaultSrc(e)}
                      alt={coin.id}
                      className="max-w-[2rem] h-auto mr-2 "
                    />

                    {coin.name}
                  </td>
                  <td>${roundCryptoPrice(parseFloat(coin.priceUsd))}</td>
                  <td className={rocColour}>
                    {roundCryptoPercentage(parseFloat(coin.changePercent24Hr))}%
                  </td>
                  <td>
                    {cryptoNumberFormatter(parseFloat(coin.volumeUsd24Hr), 2)}
                  </td>
                  <td>
                    {cryptoNumberFormatter(parseFloat(coin.marketCapUsd), 2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <CryptoTablePagination
          setCryptoData={setCryptoData}
          offset={25}
          numberOfPages={30}
        />
      </div>
    </div>
  );
}