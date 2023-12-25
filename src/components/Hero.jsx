import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HeroIcon, HeroIconSecond } from "../common/Icons";
const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    toggleActions: "play complete none reverse",
  });
  useLayoutEffect(() => {
    let icons = gsap.matchMedia();
    icons.add("(max-width:767.98px)", () => {
      let revenue = gsap.timeline({
        scrollTrigger: {
          trigger: ".iconsbar_parent",
          start: "top 30%",
          end: "bottom center",
          scrub: 3,
          pin: true,
        },
      });

      revenue.fromTo(
        ".icons_img",
        {
          xPercent: 0,
        },
        {
          xPercent: -120,
        }
      );
    });
  }, []);
  return (
    <>
      <div className="bg[#ff98a2]">
        <div>
          <HeroIcon />
          <HeroIconSecond />
        </div>
      </div>
    </>
  );
};

export default Hero;
