import React, { Dispatch, useState } from "react";
import {
  TiArrowSortedUp,
  TiArrowSortedDown,
  TiArrowUnsorted,
} from "react-icons/ti";
import { IoIosStar } from "react-icons/io";
import CryptoTablePagination from "./CryptoTablePagination";
import {
  cryptoNumberFormatter,
  roundCryptoPercentage,
  roundCryptoPrice,
} from "../../utils/crypto";
import { Coin } from "../../types/Coin";
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
  const addDefaultIcon = (event: any) => {
    event.target.src = "./crypto-icon.png";
  };
  const addDefaultChart = (event: any) => {
    event.target.src =
      "https://graphsv2.coinpaprika.com/currency/chart/btc-bitcoin/7d/chart.svg";
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl ml-4 md:ml-0">Today's Cryptocurrency Prices</h1>
        <div className="overflow-x-auto">
          <table className="table w-full table-zebra ">
            <thead>
              <tr>
                <th>#</th>
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
                <th>7d</th>
                <th className="">24H Change</th>
                <th className="">24H Volume</th>
                <th className="">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((coin: Coin) => {
                const rocColour =
                  parseFloat(coin.changePercent24Hr) > 0
                    ? "text-success"
                    : "text-error";
                return (
                  <tr key={coin.id}>
                    <th>{coin.rank}</th>

                    <td className="flex items-center  ">
                      <img
                        src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                        alt={coin.id}
                        className="max-w-[2rem] h-auto mr-2 "
                        onError={addDefaultIcon}
                      />

                      {coin.name}
                    </td>
                    <td>${roundCryptoPrice(parseFloat(coin.priceUsd))}</td>
                    <td>
                      <img
                        src={`https://graphsv2.coinpaprika.com/currency/chart/${coin.symbol}-${coin.id}/7d/chart.svg`}
                        alt={`Graph of ${coin.name} from the last seven days`}
                        onError={addDefaultChart}
                      />
                    </td>
                    <td className={`${rocColour} font-bold`}>
                      {parseFloat(coin.changePercent24Hr) > 0 && "+"}
                      {roundCryptoPercentage(
                        parseFloat(coin.changePercent24Hr)
                      )}
                      %
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
        </div>
        <CryptoTablePagination
          setCryptoData={setCryptoData}
          offset={25}
          numberOfPages={30}
        />
      </div>
    </>
  );
}
