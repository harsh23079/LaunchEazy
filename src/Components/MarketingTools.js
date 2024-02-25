import React, { useState } from "react";
import MainButton from "./MainButton";
import { marketingToolInfo } from "../utils/constant";

const MarketingTools = () => {
  return (
    <div className="m-16 mb-0 flex gap-8 h-[640px] justify-between">
      <div className="w-5/12 flex flex-col gap-10">
        <div className="text-gray-500 uppercase">Marketing Tools</div>
        <div className="text-5xl -mt-5">
          Skyrocket{" "}
          <span className="inline-block animate-bounce ml-2">🚀 </span>
          <br></br>
          your growth with advanced marketing tools
        </div>
        <div className="text-gray-500 -mt-5">
          A library of ready-to -use marketing campaigns, workflows and program
          to accelerate your growth, maizmize savings and reduce efforts.
        </div>
        <div></div>
        <MainButton />
      </div>
      <div className="overflow-hidden w-fit   ">
        <div className="overflow-y-auto max-h-[640px] scrollbar-hide">
          {marketingToolInfo.map((data) => (
            <div
              key={data.name}
              className={`border p-5 h-[305px] rounded-2xl mb-5 ${
                data.color === "#a1c4fb"
                  ? "bg-[#a1c4fb]"
                  : data.color === "#fec57b"
                  ? "bg-[#fec57b]"
                  : data.color === "#6fdd8c"
                  ? "bg-[#6fdd8c]"
                  : data.color === "#ffb3b8"
                  ? "bg-[#ffb3b8]"
                  : "bg-[#e0e0e0]"
              }`}
            >
              <div className="font-bold text-2xl">{data.name}</div>
              <div className="text-gray-400 mt-5">{data.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingTools;