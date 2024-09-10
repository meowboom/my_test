"use client";

import {
  ArrowRightLeft,
  Bitcoin,
  Bot,
  ChartCandlestick,
  ChartPie,
  ChevronsLeft,
  ChevronsRight,
  CirclePlus,
  Clock,
  CloudLightning,
  Gamepad2,
  Grip,
  LayoutDashboard,
  LogIn,
  LogOut,
  Send,
  Wallet,
  Waypoints,
  X,
  Zap,
} from "lucide-react";
import React, { FC, useState } from "react";

interface ISideBar {}

const SideBar: FC<ISideBar> = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="fixed left-10 top-1/2 transform -translate-y-1/2 h-3/4 bg-primaryBg text-primaryText text-xl rounded-3xl flex flex-col gap-4 justify-between px-6 py-12">
      <section className="w-full flex gap-4 items-center justify-center">
        <Bitcoin className="size-11 border border-[#e47248] p-1 text-[#e47248] rounded-full" />
        {isOpen && <h2 className="text-2xl">Bitcoin</h2>}
      </section>
      <section className="flex flex-col justify-start mt-10 mb-5">
        <div
          className={`${
            isOpen ? "justify-start" : "justify-center"
          } flex items-center gap-4 mb-10 py-1 px-2 pl-4 pr-5 w-full duration-300 ease-in-out cursor-pointer hover:bg-secondaryGray/40 hover:text-secondaryText rounded-xl `}
        >
          <LayoutDashboard
            className={`size-7 relative ${
              isOpen
                ? ""
                : "hover:after:content-['Dashboard'] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2"
            }`}
          />
          {isOpen && <h4>Dashboard</h4>}
        </div>
        <section className="py-2 pl-2 pr-3 rounded-2xl bg-secondaryGray/30 flex flex-col justify-center items-start gap-2">
          <div
            className={`${
              isOpen ? "justify-start" : "justify-center"
            } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryGreen hover:text-secondaryText rounded-xl py-1 px-2`}
          >
            <ArrowRightLeft className="size-7" />
            {isOpen && <h4>Swap</h4>}
          </div>
          <div
            className={`${
              isOpen ? "justify-start" : "justify-center"
            } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryGreen hover:text-secondaryText rounded-xl py-1 px-2`}
          >
            <CirclePlus className="size-7" />
            {isOpen && <h4>Add liquidity</h4>}
          </div>
          <div
            className={`${
              isOpen ? "justify-start" : "justify-center"
            } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryGreen hover:text-secondaryText rounded-xl py-1 px-2`}
          >
            <Waypoints className="size-7" />
            {isOpen && <h4>Manage liquidity</h4>}
          </div>
          <div
            className={`${
              isOpen ? "justify-start" : "justify-center"
            } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryGreen hover:text-secondaryText rounded-xl py-1 px-2`}
          >
            <Zap className="size-7" />
            {isOpen && <h4>Bitcoin Stake</h4>}
          </div>
          <div
            className={`${
              isOpen ? "justify-start" : "justify-center"
            } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryGreen hover:text-secondaryText rounded-xl py-1 px-2`}
          >
            <Clock className="size-7" />
            {isOpen && <h4>Pending liquidity</h4>}
          </div>
        </section>
      </section>
      <section className="mb-14 pl-2 pr-3 flex flex-col justify-center items-center gap-2 ">
        <div
          className={`${
            isOpen ? "justify-start" : "justify-center"
          } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryBlue hover:text-secondaryText rounded-xl py-1 px-2`}
        >
          <ChartPie className="size-7" />
          {isOpen && <h4>Vesting</h4>}
        </div>
        <div
          className={`${
            isOpen ? "justify-start" : "justify-center"
          } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryBlue hover:text-secondaryText rounded-xl py-1 px-2`}
        >
          <Wallet className="size-7" />
          {isOpen && <h4>Your Wallet</h4>}
        </div>
        <div
          className={`${
            isOpen ? "justify-start" : "justify-center"
          } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryBlue hover:text-secondaryText rounded-xl py-1 px-2`}
        >
          <CloudLightning className="size-7" />
          {isOpen && <h4>Thorned</h4>}
        </div>
        <div
          className={`${
            isOpen ? "justify-start" : "justify-center"
          } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryBlue hover:text-secondaryText rounded-xl py-1 px-2`}
        >
          <ChartCandlestick className="size-7" />
          {isOpen && <h4>Stats</h4>}
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? "justify-start" : "justify-center"
          } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryBlue hover:text-secondaryText rounded-xl py-1 px-2`}
        >
          {isOpen ? (
            <LogIn className="size-7" />
          ) : (
            <LogOut className="size-7" />
          )}
          {isOpen && <h4>Collapse sidebar</h4>}
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-3">
          {isOpen ? (
            <>
              <div className="cursor-pointer shadow-sm hover:shadow-secondaryText/50 duration-300 flex items-center justify-center border-2 rounded-2xl p-2 border-sky-900/70">
                <Send className="size-9 stroke-1 pr-1 pt-1 text-zinc-900/30 fill-sky-600" />
              </div>
              <div className="cursor-pointer shadow-sm hover:shadow-secondaryText/50 duration-300 flex items-center justify-center border-2 rounded-2xl p-2 border-sky-900/70">
                <X className="border size-9 p-1 rounded-full bg-zinc-950/70 text-secondaryText border-zinc-950/70 text-center" />
              </div>
              <div className="cursor-pointer shadow-sm hover:shadow-secondaryText/50 duration-300 flex items-center justify-center border-2 rounded-2xl p-2 border-sky-900/70">
                <Gamepad2 className="size-9 rounded-full  text-[#cb41ae]  text-center" />
              </div>
              <div className="cursor-pointer shadow-sm hover:shadow-secondaryText/50 duration-300 flex items-center justify-center border-2 rounded-2xl p-2 border-sky-900/70">
                <Bot className="size-9 rounded-full  text-[#e47248]  text-center" />
              </div>
            </>
          ) : (
            <Grip className="size-10 hover:text-secondaryText duration-300 ease-in-out cursor-pointer" />
          )}
        </div>
      </section>
    </div>
  );
};

export default SideBar;
