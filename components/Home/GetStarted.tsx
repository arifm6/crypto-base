import React from "react";
import { MdManageAccounts, MdCurrencyExchange } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
type Props = {};

export default function GetStarted({}: Props) {
  return (
    <div className="max-w-4xl mx-auto px-12  space-y-10">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl font-bold">Get started in a few minutes</h1>
        <p className="font-light">
          Easy to follow instructions to set up your account and start trading
          right away
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-evenly gap-4">
        <div className="flex flex-col items-center space-y-8 ">
          <MdManageAccounts className="text-5xl text-primary" />
          <h2 className="text-xl">Create an account</h2>
        </div>
        <div className="sm:grow sm:border-[0.5px]"></div>
        <div className="flex flex-col items-center space-y-8 ">
          <GiMoneyStack className="text-5xl text-success" />
          <h2 className="text-xl">Add funds</h2>
        </div>
        <div className="sm:grow sm:border-[0.5px]"></div>

        <div className="flex flex-col items-center space-y-8 ">
          <MdCurrencyExchange className="text-5xl text-success" />
          <h2 className="text-xl">Starting trading</h2>
        </div>
      </div>
    </div>
  );
}
