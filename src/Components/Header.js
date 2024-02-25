import React, { useState } from "react";
import MainButton from "./MainButton";
import logo from "../assets/img/Logo.png";
import dropdown from "../assets/img/dropdown.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-2 p-2 ">
      <div className="flex-grow justify-between lg:flex lg:justify-between lg:items-center lg:mx-32  font-bold text-lg  mx-4">
        <div className="flex justify-between lg:w-4/12">
          <div className="">
            <img src={logo} alt="logo" className=" h-8 w-36" />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-7 w-7 hover:bg-slate-200   ${
                  isOpen ? "hidden" : "block"
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-7 w-7 ${
                  isOpen ? "block" : "hidden"
                }`}
                viewBox="md:0 0 20 20 "
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:justify-evenly lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center cursor-pointer">
            <div className="">
              <span className="mr-2 bg-orange-400 text-white px-2 rounded-lg ">
                free
              </span>
              <span> AI Tools</span>
            </div>
            <div>
              <img src={dropdown} alt="dropdown-img" className="h-6" />
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <div>Product</div>

            <div>
              <img src={dropdown} alt="dropdown-img" className="h-6" />
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <div>Resources</div>
            <div>
              <img src={dropdown} alt="dropdown-img" className="h-6" />
            </div>
          </div>
          <div className="cursor-pointer">Pricing</div>
          <div className="cursor-pointer">Contact Us</div>
          <MainButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
