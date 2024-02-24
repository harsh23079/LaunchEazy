import React from "react";
import MarketingCard from "./MarketingCard";
import { marketingCardInfo } from "../utils/constant";

const MarketingRecipes = () => {
  return (
    <div className="m-16 ">
      <div className="flex flex-col gap-5">
        <div className="text-gray-400">MARKETING RECIPES</div>
        <div className="font-medium text-5xl">Attract. Convert. Retain.</div>
        <div className="text-gray-400 text-2xl ">
          A library of ready-to-use marketing campaigns, workflows and programs
          to <br></br>accelerate your growth, maximize savings and reduce
          efforts.{" "}
        </div>
        <div>
          <button className="border-2 bg-gray-50 p-2 px-4 rounded-full text-sm">
            Visit the library ↗
          </button>
        </div>
      </div>
      <div className="mt-[20px]  grid grid-cols-1 md:grid-cols-3 gap-6">
        {marketingCardInfo.map((data) => (
          <MarketingCard key={data.name} value={data} />
        ))}
      </div>
    </div>
  );
};

export default MarketingRecipes;
