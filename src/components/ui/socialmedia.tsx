import { Send, X, Gamepad2, Bot } from "lucide-react";
import React from "react";

const SocialMedia = () => {
  return (
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
  );
};

export default SocialMedia;
