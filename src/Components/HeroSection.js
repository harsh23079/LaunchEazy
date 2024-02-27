import React from "react";
import backGround from "../assets/img/BG.png";
import home1 from "../assets/img/home1.png";
import home2 from "../assets/img/home2.png";
import home3 from "../assets/img/home3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ishover, setHover] = useState("false");
  const arr = [
    " Explore AI-recommended marketing recipes to effectively market your business",
    "Auto-generate conversion focussed content for ready-to-use marketing recipes with",
    "Execute the campaign in a click and let AI handle the scheduling and optimization",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,

    pauseOnHover: true,
    adaptiveHeight: true,
    afterChange: (index) => {
      console.log(index);
      setCurrentSlide(index);
    },
  };

  return (
    <div>
      <div
        className="w-full bg-gradient-to-tr from-indigo-500 from-10% via-purple-200 via-30% to-deep-orange-700 to-90% hover:mx-40 hover:rounded-md hover:w-[1200px] hover:h-[850px] mb-20 "
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div className=" mx-28">
          {ishover ? (
            <div className="flex pt-20 justify-between mx-8 gap-14 ">
              <div className="w-7/12">
                <p className="text-white font-bold text-2xl">
                  {arr[currentSlide]}
                </p>
              </div>
              <div className="flex w-5/12 justify-between">
                <button className="bg-blue-300 p-4 rounded-xl ">Explore</button>
                <button className="bg-blue-300 p-4 rounded-xl ">
                  Personalize
                </button>
                <button className="bg-blue-300 p-4 rounded-xl ">Execute</button>
              </div>
            </div>
          ) : (
            ""
          )}
          <Slider
            {...settings}
            className={`${ishover ? `top-12 ` : `-top-24`} `}
          >
            <div>
              <img src={home1} alt="image 1" className="w-full object-cover" />
            </div>
            <div>
              <img src={home2} alt="image 2" className="w-full object-cover" />
            </div>
            <div>
              <img src={home3} alt="image 3" className="w-full object-cover" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
