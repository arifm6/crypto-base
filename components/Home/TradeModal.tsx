import Link from "next/link";
import React, { MutableRefObject, useEffect, useRef } from "react";

type Props = {
  handleModalClick: Function;
  coinName: string;
  coinId: string;
};

export default function TradeModal({
  handleModalClick,
  coinName,
  coinId,
}: Props) {
  function useOutsideAlerter(ref: MutableRefObject<HTMLInputElement | null>) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (event.target.dataset.modal) {
            return;
          }
          handleModalClick(event);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef<HTMLInputElement>(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div
      ref={wrapperRef}
      className="fixed inset-4 m-auto  w-fit max-w-[425px] h-fit z-50  text-neutral  lg:absolute lg:inset-auto lg:w-[450px] lg:right-[110%] lg:flex lg:items-center "
    >
      <div className="space-y-3 p-8 bg-neutral-content ">
        <h3 className="text-xl">Buy on our CryptoBase App</h3>
        <p className="text-sm font-light">
          Sign up for an account in minutes to buy crypto using credit card or
          bank transfer.
        </p>
        <div className="flex justify-center items-center  gap-2 ">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/iosdownload.webp"
              className="w-64  "
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
              className="w-64 "
              alt="Android download badge"
            />
          </a>
          <img
            src="/websiteqr.svg"
            className="hidden sm:block max-h-12  rounded-md"
            alt="CryptoBase QR Code"
          />
        </div>
        <div className="border-[0.5px] border-neutral"></div>
        <h3 className="text-xl">Trade on our Crypto.com Exchange (Pro)</h3>
        <p className="text-sm font-light">
          Deposit crypto to our Exchange and trade with deep liquidity and low
          fees
        </p>
        <button className="btn w-full">Go to Exchange</button>
      </div>
      <div className="hidden lg:block w-0 h-0 border-neutral-content border-y-8 border-y-transparent border-l-8 "></div>
    </div>
  );
}
