"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useRef, useState } from "react";
import { LabelList, Pie, PieChart } from "recharts";
import { getRandomColor } from "./helper";

const page = () => {
  const [aboutChart, setAboutChart] = useState({
    chartData: [
      { assets: "BTC", value: 4000, amount: 500, fill: "#FD7F20" },
      { assets: "ETH", value: 2000, amount: 100, fill: "#FC2E20" },
      { assets: "XRP", value: 8000, amount: 245, fill: "#5DF15D" },
      { assets: "TON", value: 5000, amount: 330, fill: "#AE388B" },
      { assets: "UNI", value: 500, amount: 90, fill: "#11A7BB" },
    ],
    chartConfig: {
      amount: {
        label: "Amount",
      },
      BTC: {
        label: "BTC",
        color: "#FD7F20",
      },
      ETH: {
        label: "ETH",
        color: "#FC2E20",
      },
      XRP: {
        label: "XRP",
        color: "#5DF15D",
      },
      TON: {
        label: "TON",
        color: "#AE388B",
      },
      UNI: {
        label: "UNI",
        color: "#11A7BB",
      },
    },
  });

  const activesRef = useRef<HTMLInputElement>(null);
  const amountActiveRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const addToChartData = () => {
    setAboutChart((prev) => {
      const updatedChartData = prev.chartData.map((item) => {
        if (
          item.assets.toLowerCase() === activesRef.current?.value?.toLowerCase()
        ) {
          return {
            ...item,
            value: item.value + Number(amountRef.current?.value) || 0,
            amount: item.amount + Number(amountActiveRef.current?.value) || 0,
          };
        }
        return item;
      });

      const exists = prev.chartData.some(
        ({ assets }) =>
          assets.toLowerCase() === activesRef.current?.value?.toLowerCase()
      );

      if (!exists) {
        const newAsset = {
          assets: activesRef.current?.value || "",
          value: Number(amountRef.current?.value) || 0,
          amount: Number(amountActiveRef.current?.value) || 0,
          fill: getRandomColor(),
        };
        return {
          ...prev,
          chartData: [...prev.chartData, newAsset],
        };
      }
      return {
        ...prev,
        chartData: updatedChartData,
      };
    });
    if (amountActiveRef.current) amountActiveRef.current.value = "0";
    if (amountRef.current) amountRef.current.value = "0";
  };

  return (
    <div className="flex flex-col items-center h-full ">
      <div className="relative w-full h-1/2 flex flex-col justify-start">
        <div className="w-full h-5/6">
          <ChartContainer
            config={aboutChart.chartConfig}
            className="mx-auto aspect-square h-full"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="assets" hideLabel />}
              />
              <Pie
                data={aboutChart.chartData}
                dataKey="value"
                nameKey="assets"
                fill="fill"
              >
                <LabelList
                  dataKey="assets"
                  stroke="none"
                  fontSize={12}
                  formatter={(value: keyof typeof aboutChart.chartConfig) =>
                    aboutChart.chartConfig[value]?.label
                  }
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
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
                <TableHead className="text-center">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
            
              {aboutChart.chartData.map(({ assets, fill, value, amount }) => (
                <TableRow key={value} className="text-lg">
                  <TableCell className={`text-[${fill}]`}>{assets}</TableCell>
                  <TableCell>{amount}</TableCell>
                  <TableCell>{value}</TableCell>
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
                    ref={activesRef}
                    type="text"
                    placeholder="BTC"
                    className="placeholder:text-secondaryGray p-1 overflow-hidden bg-primaryBg/20 w-24 text-center rounded-lg outline-none"
                  />
                </TableCell>
                <TableCell>
                  <input
                    ref={amountActiveRef}
                    type="number"
                    placeholder="0.2234"
                    className="placeholder:text-secondaryGray p-1 overflow-hidden bg-primaryBg/20 w-24 text-center rounded-lg outline-none"
                  />
                </TableCell>
                <TableCell>
                  <input
                    ref={amountRef}
                    type="number"
                    placeholder="3999"
                    className="placeholder:text-secondaryGray p-1 overflow-hidden bg-primaryBg/20 w-24 text-center rounded-lg outline-none"
                  />
                </TableCell>
                <TableCell>
                  <button
                    onClick={addToChartData}
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
