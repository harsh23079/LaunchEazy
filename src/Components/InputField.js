import React, { useState } from "react";
import hello from "../assets/img/hello.png";
import MainButton from "./MainButton";

const InputField = () => {
  const [inputEmail, setInputEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center  m-36 sm:m-4 ">
      <div className="text-center">
        <img
          src={hello}
          className="inline hand-animation -mx-3 lg:hidden md:hidden"
          alt="Hand waving"
        />
        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-3xl  ">
          Say goodbye{" "}
          <img
            src={hello}
            className="inline hand-animation -mx-3 sm:hidden md:h-12"
            alt="Hand waving"
          />{" "}
          to excessive spending<br></br> on designers, experts, and multiple
          tools
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Say hello to Launcheazy - your superstar marketer in your pocket!
        </p>
      </div>
      <div className="mt-8 flex w-[500px]  gap-2 items-center sm:flex-col sm:w-full">
        <input
          value={inputEmail}
          placeholder="Enter your work email"
          onChange={(e) => setInputEmail(e.target.value)}
          className="border-2  p-2 w-full h-12 outline-none focus:outline-gray-400 rounded-lg"
        />
        <div className="w-[250px] sm:w-full ">
          <button className="bg-black p-3 text-white sm:w-full  rounded-lg hover:bg-gray-800 hover:shadow-lg hover:text-gray-200">
            Join the waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
