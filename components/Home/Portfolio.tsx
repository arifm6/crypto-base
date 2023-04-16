import React from "react";
import { AiFillCalendar, AiFillFolderOpen } from "react-icons/ai";
import { RiSafe2Fill } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
type Props = {};

export default function Portfolio({}: Props) {
  return (
    <div>
      <div className="text-center space-y-8">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Create your cryptocurrent portfolio today
        </h1>
        <h2 className="font-light">
          CryptoBase has a variety of features that make it the ideal place to
          start trading
        </h2>
      </div>

      <div className="flex flex-col max-w-full">
        <img src="/portfolio-image.png" alt="portfolio-image" />
      </div>
      <div className="flex justify-center">
        <ul className="[&>li]:space-x-2 space-y-10 text-center">
          <li className="flex flex-col items-center space-y-4">
            <AiFillFolderOpen className="text-primary w-16 h-16 " />
            <h3 className="text-2xl font-medium">Manage your portfolio</h3>
            <p className="font-extralight">
              Buy and sell popular digital currencies, keep track of them in one
              place
            </p>
          </li>
          <li className="flex flex-col items-center space-y-4">
            <AiFillCalendar className="text-primary w-16 h-16 " />
            <h3 className="text-2xl font-medium">Recurring buys</h3>
            <p className="font-extralight">
              Invest in cryptocurrency slowly over time by scheduling buys
              daily, weekly, monthly.
            </p>
          </li>
          <li className="flex flex-col items-center space-y-4">
            <RiSafe2Fill className="text-primary w-16 h-16 " />
            <h3 className="text-2xl font-medium">Vault protection</h3>
            <p className="font-extralight">
              For added security, store your funds in a vault with time delayed
              withdrawals
            </p>
          </li>
          <li className="flex flex-col items-center space-y-4">
            <FaMobileAlt className="text-primary w-16 h-16 " />
            <h3 className="text-2xl font-medium">Mobile apps</h3>
            <p className="font-extralight">
              Stay on top of the markets with the CryptoBase app for{" "}
              <a
                className="text-primary font-normal"
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noreferrer noopener"
              >
                Android
              </a>{" "}
              or{" "}
              <a
                className="text-primary font-normal"
                href="https://www.apple.com/ca/app-store/"
                target="_blank"
                rel="noreferrer noopener"
              >
                {" "}
                iOS{" "}
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
