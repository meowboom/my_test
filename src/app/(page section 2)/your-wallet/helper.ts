export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// BE emulation

export enum COINS_TICKER {
  BTC = "BTC",
  ETH = "ETH",
  XRP = "XRP",
  TON = "TON",
  UNI = "UNI",
  PEPE = "PEPE",
  SOL = "SOL",
  BNB = "BNB",
}

export enum COINS_COLOR {
  BTC = "#3F51B5",
  ETH = "#FF5722",
  XRP = "#4CAF50",
  TON = "#FFC107",
  UNI = "#9C27B0",
  PEPE = "#2196F3",
  SOL = "#FF9800",
  BNB = "#00BCD4",
}

export const MY_WALLET = [
  {
    assets: COINS_TICKER.BTC,
    value: 4000,
    amount: 500,
    buy_price: 23000,
    fill: COINS_COLOR.BTC,
  },
  {
    assets: COINS_TICKER.ETH,
    value: 2000,
    amount: 100,
    buy_price: 1800,
    fill: COINS_COLOR.ETH,
  },
  {
    assets: COINS_TICKER.XRP,
    value: 8000,
    amount: 245,
    buy_price: 0.0012,
    fill: COINS_COLOR.XRP,
  },
  {
    assets: COINS_TICKER.TON,
    value: 5000,
    amount: 330,
    buy_price: 6,
    fill: COINS_COLOR.TON,
  },
  {
    assets: COINS_TICKER.UNI,
    value: 500,
    amount: 90,
    buy_price: 1,
    fill: COINS_COLOR.UNI,
  },
];

export const COINS = {
  BTC: {
    ticker: COINS_TICKER.BTC,
    current_price: 60213,
    logoLink: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=035",
  },
  ETH: {
    ticker: COINS_TICKER.ETH,
    current_price: 2542,
    logoLink: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035",
  },
  XRP: {
    ticker: COINS_TICKER.XRP,
    current_price: 0.02,
    logoLink: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=035",
  },
  TON: {
    ticker: COINS_TICKER.TON,
    current_price: 4.4,
    logoLink: "https://cryptologos.cc/logos/toncoin-ton-logo.svg?v=035",
  },
  UNI: {
    ticker: COINS_TICKER.UNI,
    current_price: 12,
    logoLink: "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=035",
  },
  PEPE: {
    ticker: COINS_TICKER.PEPE,
    current_price: 0.12,
    logoLink: "https://cryptologos.cc/logos/pepe-pepe-logo.svg?v=035",
  },
  SOL: {
    ticker: COINS_TICKER.SOL,
    current_price: 13,
    logoLink: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=035",
  },
  BNB: {
    ticker: COINS_TICKER.BNB,
    current_price: 589,
    logoLink: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=035",
  },
} as const;
