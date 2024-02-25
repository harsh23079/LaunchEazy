import React from "react";

const ValueSection = () => {
  return (
    <div className="  m-4 lg:m-20">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 items-center ">
        <div className="flex lg:flex-col sm:flex-col">
          <h2 className="text-3xl font-bold text-gray-900">
            Accelerate growth.
          </h2>
          <p className="text-3xl font-bold text-gray-900">Maximize savings.</p>
          <p className="text-3xl font-bold text-gray-900">Reduce efforts.</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="mb-2 text-5xl  tracking-tight text-gray-900">
            160%
          </div>
          <div className="font-normal text-gray-400">
            Increase in revenue generated for your business
          </div>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="mb-2 text-5xl  tracking-tight text-gray-900">
            $60K
          </div>
          <div className="font-normal text-gray-700">
            Saved on annual marketing expenditure
          </div>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="mb-2 text-5xl tracking-tight text-gray-900">12</div>
          <div className="font-normal text-gray-700">
            hours saved on marketing efforts weekly
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
