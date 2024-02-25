import React from "react";
import backGround from "../assets/img/BG.png";
import home1 from "../assets/img/home1.png";
import { Carousel } from "@material-tailwind/react";

const HeroSection = () => {
  return (
    <div className="w-full"
    // Apply hover effect for background size change
    >
      <img src={backGround} className="w-full " />
      {/* <div className="relative mx-36">
        <img
          src={home1}
          className="transition-all duration-500 absolute -top-[115px] hover:top-0" // Adjust transition duration and add hover effect
        />
      </div> */}
      <Carousel className="rounded-xl relative -top-[115px]">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-40 w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-40 w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-40 w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default HeroSection;
