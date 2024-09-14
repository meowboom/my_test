import { Component } from "@/components/ui/piechart";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col justify-between items-center h-full border border-green-600">
      <div className="relative border border-red-500 w-full h-2/3">
        <div className="w-full text-center py-2">
          Switcher All/Crypto/Traditional
        </div>
        <div className="border relative w-full"></div>
      </div>
      <div className="border border-sky-500 w-full h-1/3">
        Table
        <Component />
      </div>
    </div>
  );
};

export default page;
