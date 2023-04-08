import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { fetchHistoricalCryptoData } from "../../utils/crypto";

type Props = {};

export default function Price({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { coinName } = router.query;
  console.log(data);
  return (
    <div>
      <p>Coin: {coinName} </p>
    </div>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const urlParam = context.query;
  const coinName = urlParam.coinName as string;

  const data = await fetchHistoricalCryptoData(coinName, "1");

  // Return a list of possible value for id
  return { props: { data } };
}
