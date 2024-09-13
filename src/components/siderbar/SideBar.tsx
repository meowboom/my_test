"use client";

import {
  ArrowRightLeft,
  Bitcoin,
  ChartCandlestick,
  ChartPie,
  CirclePlus,
  Clock,
  CloudLightning,
  Grip,
  LayoutDashboard,
  PanelLeftOpen,
  PanelRightOpen,
  Wallet,
  Waypoints,
  Zap,
} from "lucide-react";
import React, { FC, useEffect, useState } from "react";
import SocialMedia from "../ui/socialmedia";

interface ISideBar {}

const SideBar: FC<ISideBar> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isOpen) return setIsVisible(false);
  }, [isOpen]);
  console.log(isVisible);

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
            <PanelRightOpen className="size-7" />
          ) : (
            <PanelLeftOpen className="size-7" />
          )}
          {isOpen && <h4>Collapse sidebar</h4>}
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-3">
          {isOpen ? (
            <SocialMedia />
          ) : (
            <div>
              <Grip
                onClick={() => setIsVisible(!isVisible)}
                className="size-10 hover:text-secondaryText duration-300 ease-in-out cursor-pointer"
              />
              {isVisible ? (
                <div className="relative">
                  <div className="absolute flex -top-12 left-16 bg-primaryBg p-2 pr-4 gap-2 rounded-r-2xl  ">
                    <SocialMedia />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SideBar;
