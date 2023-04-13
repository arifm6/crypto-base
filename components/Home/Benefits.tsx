import React from "react";
import Benefit from "./Benefit";
import { BsFillSafeFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { SiSecurityscorecard } from "react-icons/si";
import Link from "next/link";
type Props = {};

export default function Benefits({}: Props) {
  const benefitsData = [
    {
      icon: <BsFillSafeFill />,
      title: "Secure storage",
      mainContent:
        "We store the vast majority of the digital assets in secure offline storage.",
      mainLink: (
        <Link href={"#"}>
          Learn how CryptoBase keeps your funds safe and secure
        </Link>
      ),
    },
    {
      icon: <CgFileDocument />,
      title: "Protected by insurance",
      mainContent:
        "CryptoBase maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250, 000.",
      mainLink: (
        <Link href={"#"}>
          Learn how your crypto is covered by our insurance policy
        </Link>
      ),
    },
    {
      icon: <SiSecurityscorecard />,
      title: "Industry best practices",
      mainContent:
        "CryptoBase supports a variety of the most popular digital currencies",
      mainLink: (
        <Link href={"#"}>
          Learn how we implement industry best practices for account security
        </Link>
      ),
    },
  ];
  return (
    <div className="max-w-full mx-auto space-y-12">
      <div className="text-center space-y-8">
        <h1 className="text-4xl lg:text-5xl font-bold">
          The most trust cryptocurrency platform
        </h1>
        <h2 className="text-center font-light">
          Here are some of the benefits that come along with choosing CryptoBase
        </h2>
      </div>
      <div className="flex flex-col items-center md:items-stretch md:flex-row justify-center">
        {benefitsData.map((benefit) => {
          return (
            <Benefit
              icon={benefit.icon}
              title={benefit.title}
              mainContent={benefit.mainContent}
              mainLink={benefit.mainLink}
            />
          );
        })}
      </div>
    </div>
  );
}
