import React from "react";
import logo from "../assets/img/footerLogo.png";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className="text-white flex flex-col p-32 gap-14 ">
      <div className="grid grid-cols-2 w-full  text-lg">
        <div className="flex flex-col gap-5">
          <div>
            <img src={logo} />
          </div>
          <div className="text-gray-400">
            Engage customers, convert prospects effortlessly
          </div>
          <div className="mt-4 flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-600"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-600"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-600"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-600"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-600"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-3 ">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p className="text-gray-400">AI Tools </p>
              <span className="bg-[#F18D13] px-2 rounded-lg">Free</span>
            </div>
            <div>ChatGPT Prompts</div>
            <div>AI Tools Directory</div>
            <div>AI QR Generator</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-400">Resources</div>
            <div>Marketplace</div>
            <div>Blogs</div>
            <div>Help Center</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-400">Company</div>
            <div>About Us</div>
            <div>Pricing</div>
            <div>Contact Us</div>
          </div>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
      <div className="  border-t border-t-gray-400 w-full text-gray-400 flex justify-between items-center">
        <div className="mt-5">
          Copyright 2023 Launcheazy AI Private Limited. All rights reserved.
        </div>
        <div className="flex gap-2">
          <div>Privacy Policy</div>
          <div className="border border-gray-400"></div>
          <div>Terms of Service</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
