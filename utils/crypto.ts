export function roundCryptoPrice(price: number) {
  //logic for rounding crypto prices

  //if price > 1, round to 2, otherwise don't round
  var ret = price;
  if (price > 1) {
    ret = Math.round((price + Number.EPSILON) * 100) / 100;
  } else if (price > 0) {
    ret = Math.round((price + Number.EPSILON) * 100000000) / 100000000;
  }
  return ret;
}

export function roundCryptoPercentage(percentage: number) {
  return (Math.round((percentage + Number.EPSILON) * 100) / 100).toFixed(2);
}

export function currencyFormat(num: number) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function cryptoNumberFormatter(number: number, digits: number) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return number >= item.value;
    });
  return item
    ? (number / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}
export async function fetchBasicCryptoData(limit: number, offset: number) {
  const options = {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.COINCAP_PRIVATE_API_KEY}`,
    },
  };
  const res = await fetch(
    `https://api.coincap.io/v2/assets?limit=${limit}&offset=${offset}`,
    options
  );
  const data = await res.json();
  return data.data;
}
//gives global data
export async function fetchCryptoOverviewData() {
  const res = await fetch(
    `https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_PRIVATE_API_KEY}`
  );
  const data = await res.json();
  return data.data;
}

export async function fetchTrendingCryptoData() {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const data = await res.json();
  return data.coins;
}
//https://api.coinpaprika.com/v1/global coinpaprika for new last api (other than coingecko ) coinpap for historical good
//https://api.coinpaprika.com/

export async function fetchHistoricalCryptoData(
  coin: string,
  days: string,
  currency = "usd"
) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}`
  );
  const data = await res.json();
  //now clean the data
  return data;
}
