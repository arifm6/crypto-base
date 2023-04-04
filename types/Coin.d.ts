export type Coin = {
  id: string;
  name: string;
  rank: string;
  priceUsd: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
  marketCapUsd: string;
  symbol: string;

  [others: string]: any;
};
