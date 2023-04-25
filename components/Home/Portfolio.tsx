import React from "react";
import { AiFillCalendar, AiFillFolderOpen } from "react-icons/ai";
import { RiSafe2Fill } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
type Props = {};

export default function Portfolio({}: Props) {
  const portfolioData = [
    {
      icon: <AiFillFolderOpen />,
      title: "Manage your portfolio",
      content:
        "Buy and sell popular digital currencies, keep track of them in one place.",
    },
    {
      icon: <AiFillCalendar />,
      title: "Recurring buys",
      content:
        "Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.",
    },
    {
      icon: <RiSafe2Fill />,
      title: "Vault protection",
      content:
        "For added security, store your funds in a vault with time delayed withdrawals.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile apps",
      content: (
        <span>
          Stay on top of the markets with the Coinbase app for{" "}
          <a
            className="text-primary font-normal"
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noreferrer noopener"
          >
            Android
          </a>{" "}
          or
          <a
            className="text-primary font-normal"
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            iOS
          </a>
          .
        </span>
      ),
    },
  ];
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-center space-y-8">
        <div className="overflow-y-hidden py-1">
          <motion.h1
            initial={{ y: "100%", opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-80.5px 0px 0px 0px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Create your cryptocurrent portfolio today
          </motion.h1>
        </div>
        <div className="overflow-y-hidden py-1">
          <motion.h2
            initial={{ y: "100%", opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-80.5px 0px 0px 0px" }}
            transition={{ duration: 0.5 }}
            className="font-light"
          >
            CryptoBase has a variety of features that make it the ideal place to
            start trading
          </motion.h2>
        </div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-25% 0px -25% 0px" }}
          transition={{ duration: 1.5 }}
          className="flex max-w-7xl "
        >
          <div className="hidden xl:flex items-center mx-4 lg:max-w-7xl  ">
            <ul className="hidden lg:flex flex-col gap-12">
              {portfolioData.map((portfolioItem) => {
                return (
                  <li
                    key={portfolioItem.title}
                    className="flex  sm:flex-row  gap-4 items-center"
                  >
                    <div className="text-primary text-6xl">
                      {portfolioItem.icon}
                    </div>
                    <div className="text-center sm:text-left space-y-4 px-4">
                      <h3 className="text-2xl font-medium">
                        {portfolioItem.title}
                      </h3>
                      <p className="font-light">{portfolioItem.content} </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <img
            src="/portfolio-image.png"
            className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
            alt=""
          />
        </motion.div>
      </div>
      <ul className="xl:hidden flex flex-col  gap-12 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        {portfolioData.map((portfolioItem) => {
          return (
            <li
              key={portfolioItem.title}
              className="flex flex-col sm:flex-row  items-center gap-4 sm:items-start "
            >
              <div className="text-primary text-6xl">{portfolioItem.icon}</div>
              <div className="text-center sm:text-left space-y-4 px-4">
                <h3 className="text-2xl font-medium">{portfolioItem.title}</h3>
                <p className="font-light">{portfolioItem.content} </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
