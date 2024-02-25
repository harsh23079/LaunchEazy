import React from "react";

const InputField = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f8f8] px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          Say goodbye 👋 to excessive spending on designers, experts, and
          multiple tools
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Say hello to Launcheazy - your superstar marketer in your pocket!
        </p>
      </div>
      <div className="mt-8">
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your work email"
            type="email"
          />
          <button className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded-md">
            Join the waitlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputField;
