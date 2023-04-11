import React from "react";
import { Coin } from "../../types/Coin";
import { currencyFormat, roundCryptoPercentage } from "../../utils/crypto";
import Link from "next/link";

type Props = {
  rankedCryptoData: Array<Coin>;
};

export default function CryptoTable({ rankedCryptoData }: Props) {
  return (
    <div className="px-3 md:px-12  ">
      <div className="max-w-7xl mx-auto space-y-12 ">
        <div className="space-y-6 text-center max-w-4xl mx-auto ">
          <div>
            <h4 className="text-primary font-bold ">
              SECURELY BUY, SELL, STORE, SEND, AND TRACK
            </h4>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Buy crypto at true cost</h1>
          </div>
          <div>
            <p className="font-semibold">
              Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using
              bank transfers or your credit/debit card.
            </p>
          </div>
        </div>
        <div>
          {rankedCryptoData.map((coin) => {
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
                  <img
                    src={`https://graphsv2.coinpaprika.com/currency/chart/${coin.symbol}-${coin.id}/7d/chart.svg`}
                    alt=""
                  />{" "}
                </div>
                <button className={`btn btn-primary`}>Trade</button>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <Link href="/price" className="btn btn-outline ">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
