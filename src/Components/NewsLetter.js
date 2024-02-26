import React, { useState } from "react";

const NewsLetter = () => {
  const [inputEmail, setInputEmail] = useState("");
  return (
    <div className="bg-[#29303c] p-7 rounded-3xl flex items-center flex-col lg:flex-row ">
      <div className="lg:w-6/12 w-full flex flex-col gap-3">
        <div className="text-gray-400">NEWSLETTER</div>
        <div className="lg:text-4xl font-semibold text-2xl ">
          The AI Launch<span className="text-[#4589FF]">pad 🚀</span>
        </div>
        <div className="text-gray-400 sm:text-[15px] md:text-xl">
          Receive must-read articles and trends on marketing and artificial
          intelligence, from leading publications in your inbox.
        </div>
      </div>
      <div className="lg:w-6/12 w-full mt-4 lg:ml-28 ml-0 lg:mt-0">
        <div className="flex gap-2 sm:flex-col">
          <input
            value={inputEmail}
            placeholder="Enter your email"
            onChange={(e) => setInputEmail(e.target.value)}
            className="border-2  p-2 w-full h-12 outline-none focus:outline-gray-400 rounded-lg text-black"
          />
          <button className="bg-[#4589FF] p-2 md:px-4 lg:px-8 rounded-lg">
            Subscribe
          </button>
        </div>
        <div className="text-gray-400 mt-2">
          By signing up, you are agreeing to our{" "}
          <span className="text-[#4589FF]">privacy statement.</span>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
