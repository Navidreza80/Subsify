"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../common/Button";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#footer-border",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#footer",
        },
      }
    );
    gsap.fromTo(
      ["#footerTitle", "#footerSubtitle"],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#footerTitle",
        },
      }
    );
  }, []);

  return (
    <footer
      id="footer"
      className="pt-[46px] pb-4 md:px-[128px] px-4 flex flex-wrap justify-center relative"
    >
      <div
        id="footer-border"
        className="absolute top-0 left-0 w-full h-[1px] bg-secondary origin-left"
        style={{ zIndex: 1 }}
      />
      <div className="w-full flex justify-between md:flex-nowrap flex-wrap items-center">
        <div className="leading-[30px]">
          <h1 className="title" id="footerTitle">
            Ready to take control of your subscriptions?
          </h1>
          <h3 className="subtitle" id="footerSubtitle">
            Sign up and start saving in under a minute.
          </h3>
        </div>
        <Button className="md:w-auto w-full md:mt-0 mt-4">Try Subsify</Button>
      </div>
      <span className="mt-[40px] text-secondary font-light">
        © 2025 Subsify. All rights reserved.
      </span>
    </footer>
  );
};
export default Footer;
