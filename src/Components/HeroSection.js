import React from "react";
import backGround from "../assets/img/BG.png";
import home1 from "../assets/img/home1.png";
import home2 from "../assets/img/home2.png";
import home3 from "../assets/img/home3.png";

import { Carousel } from "@material-tailwind/react";

const HeroSection = () => {
  return (
    <div
      className="w-full"
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
        <div>
          <p>
            Explore AI-recommended marketing recipes to effectively market your
            business
          </p>
          <img src={home1} alt="image 1" className="h-40 w-full object-cover" />
        </div>
        <img src={home2} alt="image 2" className="h-40 w-full object-cover" />
        <img src={home3} alt="image 3" className="h-40 w-full object-cover" />
      </Carousel>
    </div>
  );
};

export default HeroSection;

// Explore
// Personalize
// Execute
// Explore AI-recommended marketing recipes to effectively market your business
// Auto-generate conversion focussed content for ready-to-use marketing recipes with
// Execute the campaign in a click and let AI handle the scheduling and optimization
