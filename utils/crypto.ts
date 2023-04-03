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
  return Math.round((percentage + Number.EPSILON) * 100) / 100;
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
