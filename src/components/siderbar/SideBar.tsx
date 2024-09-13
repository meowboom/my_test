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

const svgImgComponent = {
  section1: [
    { title: "Swap", svg: <ArrowRightLeft className="size-7" /> },
    { title: "Add liquidity", svg: <CirclePlus className="size-7" /> },
    { title: "Manage liquidity", svg: <Waypoints className="size-7" /> },
    { title: "Bitcoin Stake", svg: <Zap className="size-7" /> },
    { title: "Pending liquidity", svg: <Clock className="size-7" /> },
  ],
  section2: [
    { title: "Vesting", svg: <ChartPie className="size-7" /> },
    { title: "Your Wallet", svg: <Wallet className="size-7" /> },
    { title: "Thorned", svg: <CloudLightning className="size-7" /> },
    { title: "Stats", svg: <ChartCandlestick className="size-7" /> },
  ],
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMenuFull, setIsMenuFull] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) return setIsVisible(false);
  }, [isOpen]);

  useEffect(() => {
    let timer: number;

    if (isOpen) {
      timer = window.setTimeout(() => {
        setIsMenuFull(true);
      }, 120);
    } else {
      setIsMenuFull(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    <div
      className={`${
        isOpen ? "w-72" : "w-28"
      } transition-all z-[9999] fixed left-10 top-1/2 -translate-y-1/2 h-3/4 bg-primaryBg text-primaryText text-xl rounded-3xl flex flex-col gap-4 justify-between px-6 py-12`}
    >
      <section className="w-full flex gap-4 items-center justify-center">
        <Bitcoin className="size-11 border border-[#e47248] p-1 text-[#e47248] rounded-full" />
        {isMenuFull && <h2 className="text-2xl">Bitcoin</h2>}
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
          {isMenuFull && <h4>Dashboard</h4>}
        </div>
        <section className="py-2 pl-2 pr-3 rounded-2xl bg-secondaryGray/30 flex flex-col justify-center items-start gap-2">
          {svgImgComponent.section1.map(({ svg, title }) => (
            <div
              key={title}
              className={`${
                isOpen ? "justify-start" : "justify-center"
              } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryGreen hover:text-secondaryText rounded-xl py-1 px-2`}
            >
              {svg}
              {isMenuFull && <h4>{title}</h4>}
            </div>
          ))}
        </section>
      </section>
      <section className="mb-14 pl-2 pr-3 flex flex-col justify-center items-center gap-2 ">
        {svgImgComponent.section2.map(({ svg, title }) => (
          <div
            key={title}
            className={`${
              isOpen ? "justify-start" : "justify-center"
            } w-full duration-300 ease-in-out cursor-pointer flex gap-4  items-center hover:bg-primaryBlue hover:text-secondaryText rounded-xl py-1 px-2`}
          >
            {svg}
            {isMenuFull && <h4>{title}</h4>}
          </div>
        ))}
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
          {isMenuFull && <h4>Collapse sidebar</h4>}
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-3">
          {isMenuFull ? (
            <SocialMedia />
          ) : (
            <div>
              <Grip
                onClick={() => setIsVisible(!isVisible)}
                className="size-10 hover:text-secondaryText duration-300 ease-in-out cursor-pointer"
              />

              <div className="relative">
                <div
                  className={`${
                    isVisible
                      ? "translate-x-16 opacity-100"
                      : "translate-x-10 opacity-0"
                  } ease-in-out transform transition-all duration-500 -top-12 absolute flex bg-primaryBg p-2 pr-4 gap-2 rounded-r-2xl`}
                >
                  <SocialMedia />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SideBar;
