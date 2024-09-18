"use client";
import { COINS } from "@/app/(page section 2)/your-wallet/helper";
import moment from "moment";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

const CoinCurrentPrice = () => {
  const [findCoin, setFindCoin] = useState("");
  const COINS_KEY = Object.keys(COINS);

  return (
    <section className="text-secondaryGray bg-primaryBg p-2">
      <div>
        <label>Find coin:</label>
        <input
          type="text"
          placeholder="Enter coin..."
          value={findCoin && ""}
          onChange={({ target }) => setFindCoin(target.value)}
        />
      </div>
      <span>{moment().format("ddd, MMM Do YYYY, h:mm a")}</span>
      <div>
        <div className="text-lg  text-secondaryText flex justify-between items-center p-2">
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Ticker</TableHead>
                <TableHead>Price today</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {COINS_KEY.map((key) => {
                // @ts-ignore
                const { ticker, current_price, logoLink } = COINS[key];
                // @ts-ignore
                const filteredCoin = COINS[findCoin.toUpperCase()];
                return (
                  <TableRow key={ticker}>
                    <TableCell>
                      <img className="size-8" src={logoLink} alt={ticker} />
                    </TableCell>
                    <TableCell>{ticker}</TableCell>
                    <TableCell>{current_price}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default CoinCurrentPrice;
