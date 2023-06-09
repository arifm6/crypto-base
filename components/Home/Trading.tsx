import React, { useState } from "react";
import { Coin } from "../../types/Coin";
import { currencyFormat, roundCryptoPercentage } from "../../utils/crypto";
import Link from "next/link";
import TradeModal from "./TradeModal";
import { addDefaultChart } from "../../utils/chart";
import { motion } from "framer-motion";

type Props = {
  rankedCryptoData: Array<Coin>;
};

export default function CryptoTable({ rankedCryptoData }: Props) {
  const [activeTradeModal, setActiveTradeModal] = useState<string | undefined>(
    undefined
  );
  function handleModalClick(event: any) {
    if (event.target.dataset.modal === activeTradeModal) {
      setActiveTradeModal(undefined);
    } else {
      setActiveTradeModal(event.target.dataset.modal);
    }
  }
  return (
    <div className="px-3 md:px-12  ">
      <div className="max-w-7xl mx-auto space-y-12 ">
        <div className="space-y-6 text-center max-w-4xl mx-auto ">
          <div className="overflow-hidden">
            <motion.h4
              initial={{ y: "100%", opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ margin: "-80.5px 0px 0px 0px" }}
              transition={{ duration: 0.5 }}
              className="text-primary font-bold "
            >
              SECURELY BUY, SELL, STORE, SEND, AND TRACK
            </motion.h4>
          </div>
          <div className="overflow-y-hidden py-1">
            <motion.h1
              initial={{ y: "100%", opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ margin: "-80.5px 0px 0px 0px" }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-5xl font-bold"
            >
              Buy crypto at true cost
            </motion.h1>
          </div>
          <div className="overflow-y-hidden py-1">
            <motion.p
              initial={{ y: "100%", opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ margin: "-80.5px 0px 0px 0px" }}
              transition={{ duration: 0.5 }}
              className="font-semibold"
            >
              Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using
              bank transfers or your credit/debit card.
            </motion.p>
          </div>
        </div>
        <div className="overflow-y-hidden ">
          <motion.div
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-25% 0px -25% 0px" }}
            transition={{ duration: 1.5 }}
          >
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
                      {roundCryptoPercentage(
                        parseFloat(coin.changePercent24Hr)
                      )}
                      %
                    </p>
                  </div>
                  <p className=" w-1/5  hidden md:inline text-center ">
                    {currencyFormat(parseFloat(coin.marketCapUsd))}
                  </p>
                  <div className="w-1/6 hidden md:block ">
                    <img
                      src={`https://graphsv2.coinpaprika.com/currency/chart/${coin.symbol}-${coin.id}/7d/chart.svg`}
                      alt={`7D Chart of ${coin.name}`}
                      className="w-full"
                      onError={addDefaultChart}
                    />{" "}
                  </div>
                  <div className="lg:relative lg:flex lg:items-center ">
                    {activeTradeModal === coin.id && (
                      <TradeModal
                        handleModalClick={handleModalClick}
                        coinName={coin.name}
                        coinId={coin.id}
                      />
                    )}

                    <button
                      className={`btn btn-outline `}
                      data-modal={coin.id}
                      onClick={handleModalClick}
                    >
                      Trade
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%", opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-40.25px 0px 0px 0px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link href="/price" className="btn btn-outline">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
