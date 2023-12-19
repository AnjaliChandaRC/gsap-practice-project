import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
      // },
    });
  }, []);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Hero;
