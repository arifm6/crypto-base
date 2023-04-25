import React from "react";
import Benefit from "./Benefit";
import { BsFillSafeFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { SiSecurityscorecard } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";
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
        <div className="overflow-y-hidden py-1">
          <motion.h1
            initial={{ y: "100%", opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-80.5px 0px 0px 0px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-bold"
          >
            The most trust cryptocurrency platform
          </motion.h1>
        </div>
        <div className="overflow-y-hidden py-1">
          <motion.h2
            initial={{ y: "100%", opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-80.5px 0px 0px 0px" }}
            transition={{ duration: 0.5 }}
            className="text-center font-light"
          >
            Here are some of the benefits that come along with choosing
            CryptoBase
          </motion.h2>
        </div>
      </div>
      <div className="overflow-y-hidden py-1">
        <motion.div
          initial={{ y: "20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-25% 0px -25% 0px" }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center md:items-stretch md:flex-row justify-center"
        >
          {benefitsData.map((benefit, i) => {
            return (
              <Benefit
                key={i}
                icon={benefit.icon}
                title={benefit.title}
                mainContent={benefit.mainContent}
                mainLink={benefit.mainLink}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
