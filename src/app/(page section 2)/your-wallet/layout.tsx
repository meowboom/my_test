import React, { ReactNode } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full ml-72 mr-20 pb-9 h-full">
      <h1 className="text-3xl text-center">Wallet</h1>
      {children}
    </div>
  );
};

export default layout;
