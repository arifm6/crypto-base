import React from "react";
import { Coin } from "../../types/Coin";
import {
  cryptoNumberFormatter,
  currencyFormat,
  roundCryptoPercentage,
  roundCryptoPrice,
} from "../../utils/crypto";
import CryptoChart from "../CryptoChart";

type Props = {
  coincapCryptoData: Array<Coin>;
};

export default function CryptoTable({ coincapCryptoData }: Props) {
  return (
    <div className="px-3 md:px-12  ">
      <div className="max-w-7xl mx-auto ">
        {coincapCryptoData.map((coin) => {
          const rocColour =
            parseFloat(coin.changePercent24Hr) > 0 ? "success" : "error";

          return (
            <div
              key={coin.id}
              className="flex justify-between border-b py-6 items-center space-x-2"
            >
              <div className="flex flex-col md:flex-row  md:items-center md:space-x-2  grow md:grow-0 md:w-1/6 ">
                <h5 className="text-lg font-medium">{coin.name}</h5>
                <p className="text-base font-extralight ">{coin.symbol}</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-end md:items-center  w-1/5">
                <h5 className="text-xl font-bold">
                  {currencyFormat(parseFloat(coin.priceUsd))}
                </h5>
                <p className={`text-sm font-bold text-${rocColour}`}>
                  {parseFloat(coin.changePercent24Hr) > 0 && "+"}
                  {roundCryptoPercentage(parseFloat(coin.changePercent24Hr))}%
                </p>
              </div>
              <p className=" w-1/5  hidden md:inline text-center ">
                {currencyFormat(parseFloat(coin.marketCapUsd))}
              </p>
              <div className="w-1/5 hidden md:block">
                <CryptoChart />
              </div>
              <button className={`btn btn-primary`}>Trade</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
