import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import { HeroIcon, HeroIconSecond } from "../common/Icons";

const Hero2 = () => {
  // gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    toggleActions: "play complete none reverse",
  });
  useLayoutEffect(() => {
    gsap.to(".mainBg #bg2", {
      top: 0,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <div className=" relative mainBg overflow-hidden">
      <div className="heroImage relative bg-[#ff98a2] min-h-screen ">
        <span className="relative z-10 " id="image1">
          <HeroIcon />
        </span>
      </div>
      <div id="bg2" className="  absolute min-h-screen bg-black w-full">
        <HeroIconSecond />
      </div>
    </div>
  );
};

export default Hero2;
