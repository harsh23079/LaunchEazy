import React, { useState } from "react";
import hello from "../assets/img/hello.png";
import MainButton from "./MainButton";

const InputField = () => {
  const [inputEmail, setInputEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center   m-36">
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          Say goodbye{" "}
          <img
            src={hello}
            className="inline hand-animation -mx-3"
            alt="Hand waving"
          />{" "}
          to excessive spending<br></br> on designers, experts, and multiple tools
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Say hello to Launcheazy - your superstar marketer in your pocket!
        </p>
      </div>
      <div className="mt-8 flex w-[500px]  gap-2 items-center">
        <input
          value={inputEmail}
          placeholder="Enter your work email"
          onChange={(e) => setInputEmail(e.target.value)}
          className="border-2  p-2 w-full h-12 outline-none focus:outline-gray-400 rounded-lg"
        />
        <div className="w-[250px]">
          <MainButton />
        </div>
      </div>
    </div>
  );
};

export default InputField;
