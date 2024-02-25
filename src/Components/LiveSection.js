import React, { useEffect, useState } from "react";
import MainButton from "./MainButton";

const LiveSection = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [heroTitleIndex, setHeroTitleIndex] = useState(0);
  const HeroTitle = ["Generate leads", "Convert prospects", "Retain customers"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroTitleIndex((prevIndex) => (prevIndex + 1) % HeroTitle.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [HeroTitle.length]);
  return (
    <div className="">
      <div className="flex gap-2 border border-blue-300 rounded-full font-bold p-2  w-[420px]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className=" text-red-500 font-bold">Live</span>
        </div>
        <div>
          Our exclusive beta is live.
          <a className="text-blue-400 cursor-pointer">
            &nbsp;Sign up for free {">"}
          </a>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-7xl font-bold text-blue-400">
          {HeroTitle[heroTitleIndex]}
        </div>
        <div className="text-7xl font-bold">in 3 clicks for your business</div>
        <svg
          className="animate-bounce relative -top-1 left-[310px]"
          width="48"
          height="52"
          viewBox="0 0 48 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_672_8)">
            <path
              d="M11.3683 5.1513L16.6335 31.5322C16.9551 33.1436 19.1726 33.5425 20.0828 32.1526L24.5609 25.3142C24.8928 24.8075 25.4652 24.491 26.0894 24.4691L34.5122 24.1742C36.2241 24.1142 36.9722 22.0756 35.6758 21.0031L14.4529 3.44577C13.1003 2.32683 11.0328 3.47002 11.3683 5.1513Z"
              fill="#4589FF"
            />
            <path
              d="M9.89732 5.44488L15.1625 31.8258C15.7607 34.8232 19.7309 35.4279 21.3377 32.9743L25.8158 26.136C25.871 26.0517 25.9867 25.9736 26.1419 25.9682L34.5647 25.6732C37.5219 25.5697 39.0934 21.8836 36.632 19.8473L15.409 2.29C14.2029 1.29223 12.6704 1.3172 11.5517 1.93576C10.427 2.55765 9.58248 3.86735 9.89732 5.44488Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_672_8"
              x="0.329559"
              y="0.000732422"
              width="47.035"
              height="51.9929"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0.16 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_672_8"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_672_8"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className="mt-5 text-2xl">
          Simplify your marketing efforts with Al. Use a collection of
          ready-made, successful marketing<br></br> strategies that practically
          run themselves.
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <div className="flex flex-col gap-4">
          <div className="">
            <input
              value={inputEmail}
              placeholder="Enter your work email"
              onChange={(e) => setInputEmail(e.target.value)}
              className="border-2  p-2 w-full h-12 outline-none focus:outline-gray-400 rounded-lg"
            />
          </div>
          <div className="text-gray-400">
            Get access to a comprehensive directory of{" "}
            <a className="text-orange-400">Al Tools</a> and
            <br></br> <a className="text-green-500">ChatGPT Prompts</a> to
            elevate your business.
          </div>
        </div>
        <div>
          <MainButton />
        </div>
      </div>
    </div>
  );
};

export default LiveSection;
