import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import AnimatedCounter from "../Global/AnimatedCounter";

type Props = {};

// for somereason hero-li not all styles work
export default function Hero({}: Props) {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="overflow-y-hidden py-1">
          <motion.h1
            initial={{ y: "100%", opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-80.5px 0px 0px 0px" }}
            transition={{ duration: 0.5 }}
            className="font-bold text-4xl lg:text-5xl text-center "
          >
            The Number One Platform for CryptoNews and Exchange
          </motion.h1>
        </div>
        <div className="overflow-y-hidden ">
          <motion.ul
            initial={{ y: "100%", opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-80.5px 0px 0px 0px" }}
            transition={{ duration: 0.5 }}
            className="[&>li]:space-x-2 space-y-2"
          >
            <li className="flex">
              <AiFillCheckCircle className="ul-bullet " />
              <p>
                Trusted by over{" "}
                <span className="text-primary">
                  {<AnimatedCounter from={0} to={9} duration={1} />}K users
                </span>{" "}
                worldwide
              </p>
            </li>
            <li className="flex ">
              <AiFillCheckCircle className="ul-bullet" />
              <p>
                Industry leader in{" "}
                <span className="text-primary">comprehensive analysis </span>{" "}
                and <span className="text-primary">security compliance </span>
              </p>
            </li>
            <li className="flex">
              <AiFillCheckCircle className="ul-bullet" />
              <p>
                An easy to use, cross-platform tool for{" "}
                <span className="text-primary"> exchanging </span>and
                <span className="text-primary"> learning </span>
                about cryptocurrencies
              </p>
            </li>
          </motion.ul>
        </div>
        <div className="overflow-y-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-80.5px 0px 0px 0px" }}
            transition={{ duration: 2 }}
            className="flex flex-col md:flex-row items-center md:items-stretch  flex-wrap justify-center gap-4 py-2 "
          >
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/iosdownload.webp"
                className="w-64 grow-0  "
                alt="iOS download badge"
              />
            </a>
            <a
              href="https://www.apple.com/ca/app-store/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/androiddownload.png"
                className="w-64 grow-0"
                alt="Android download badge"
              />
            </a>
            <img
              src="/websiteqr.svg"
              className="h-20 rounded-md"
              alt="CryptoBase QR Code"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
