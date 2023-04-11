import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
type Props = {};

// for somereason hero-li not all styles work
export default function Hero({}: Props) {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <h1 className="font-bold text-5xl text-center ">
          The Number One Platform for CryptoNews and Exchange
        </h1>
        <ul className="[&>li]:space-x-2 space-y-2">
          <li className="hero-li">
            <AiFillCheckCircle className="hero-checked-circle " />
            <p>
              Trusted by over <span className="text-primary">9K users</span>{" "}
              worldwide
            </p>
          </li>
          <li className="hero-li ">
            <AiFillCheckCircle className="hero-checked-circle" />
            <p>
              Industry leader in{" "}
              <span className="text-primary">comprehensive analysis </span> and{" "}
              <span className="text-primary">security compliance </span>
            </p>
          </li>
          <li className="hero-li">
            <AiFillCheckCircle className="hero-checked-circle" />
            <p>
              An easy to use, cross-platform tool for{" "}
              <span className="text-primary"> exchanging </span>and
              <span className="text-primary"> learning </span>
              about cryptocurrencies
            </p>
          </li>
        </ul>
        <div className="flex flex-wrap justify-center gap-2 py-2 ">
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
        </div>
      </div>

      <div className="lg:mt-12 relative flex items-center justify-center py-2 ">
        <div className="absolute w-full h-[120%] phone-glow"></div>
        <img
          src="/mobiledashboard.png"
          className="relative h-[450px] md:h-[610px] lg:h-[960px] "
          alt="CryptoBase Mobile App Dashboard"
        />
      </div>
    </>
  );
}
