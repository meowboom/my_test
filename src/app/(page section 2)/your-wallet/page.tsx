"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useState } from "react";
import { COINS_COLOR, COINS_TICKER, getRandomColor, MY_WALLET } from "./helper";
import CoinCurrentPrice from "@/components/coin_current_price/CoinCurrentPrice";
import ChartWallet from "./(ui)/chart_wallet";

const page = () => {
  const [myPortfolio, setMyPortfolio] = useState({
    chartData: MY_WALLET,
    chartConfig: {
      amount: {
        label: "Ticker",
      },
      BTC: {
        label: COINS_TICKER.BTC,
        color: COINS_COLOR.BTC,
      },
      ETH: {
        label: COINS_TICKER.ETH,
        color: COINS_COLOR.ETH,
      },
      XRP: {
        label: COINS_TICKER.XRP,
        color: COINS_COLOR.XRP,
      },
      TON: {
        label: COINS_TICKER.TON,
        color: COINS_COLOR.TON,
      },
      UNI: {
        label: COINS_TICKER.UNI,
        color: COINS_COLOR.UNI,
      },
    },
  });

  return (
    <div className="flex flex-col items-center h-full ">
      <div className="relative w-full h-1/2 flex justify-start items-center">
        <div className="w-full h-5/6">
          {/* Chart */}
          <ChartWallet
            chartConfig={myPortfolio.chartConfig}
            chartData={myPortfolio.chartData}
          />
        </div>
        {/* Coin Actual Price */}
        <CoinCurrentPrice />
      </div>
      <div className=" w-full h-1/2 flex flex-col justify-center">
        <div className="w-full text-center text-2xl text-secondaryText/50 py-2">
          Table
        </div>
        <div>
          <Table className="text-center">
            <TableCaption>A list of your actives.</TableCaption>
            <TableHeader>
              <TableRow className="text-center text-xl text-primaryText">
                <TableHead className="text-center">Actives</TableHead>
                <TableHead className="text-center">Amount actives</TableHead>
                <TableHead className="text-center">Amount in USD</TableHead>
                <TableHead className="text-center">Buy price</TableHead>
                <TableHead className="text-center">%</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {myPortfolio.chartData.map(({ assets, fill, value, amount }) => (
                <TableRow key={value} className="text-lg">
                  <TableCell className={`text-[${fill}]`}>{assets}</TableCell>
                  <TableCell>byu price/value</TableCell>
                  <TableCell>{value}</TableCell>
                  <TableCell>Buy price</TableCell>
                  <TableCell>% count</TableCell>

                  <TableCell>
                    <button className="py-1 px-3 rounded-lg bg-[#F3161E]/60 text-zinc-800 hover:bg-[#F3161E]/90 transition duration-300">
                      Remove
                    </button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="text-lg hover:bg-transparent">
                <TableCell>
                  <input
                    type="text"
                    placeholder="BTC"
                    className="placeholder:text-secondaryGray p-1 overflow-hidden bg-primaryBg/20 w-24 text-center rounded-lg outline-none"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    placeholder="0.2234"
                    className="placeholder:text-secondaryGray p-1 overflow-hidden bg-primaryBg/20 w-24 text-center rounded-lg outline-none"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    placeholder="3999"
                    className="placeholder:text-secondaryGray p-1 overflow-hidden bg-primaryBg/20 w-24 text-center rounded-lg outline-none"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    placeholder="3999"
                    className="placeholder:text-secondaryGray p-1 overflow-hidden bg-primaryBg/20 w-24 text-center rounded-lg outline-none"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    placeholder="3999"
                    className="placeholder:text-secondaryGray p-1 overflow-hidden bg-primaryBg/20 w-24 text-center rounded-lg outline-none"
                  />
                </TableCell>
                <TableCell>
                  <button
                    // onClick={first}
                    className="py-1 px-3 rounded-lg bg-[#49c049] text-zinc-800 hover:bg-primaryGreen transition duration-300"
                  >
                    Add
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
