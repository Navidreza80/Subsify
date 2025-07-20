"use client";

import heroImage from "@/assets/images/man-working.png";
import { Button } from "@/components/common/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const HeroSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#hero-image",
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      ["#hero-title", "#hero-subtitle"],
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      "#hero-button",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.6,
        duration: 1.2,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      "#underline",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="w-full md:px-[128px] px-4 grid md:grid-cols-2 grid-cols-1 mt-[20px]">
      <div className="pt-8 ">
        <h1
          id="hero-title"
          className="section-title md:text-left relative leading-[55px] w-full text-center"
        >
          Track Your Subscriptions, <br /> Stay in Control.
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 blur-2xl" />
          <div
            id="underline"
            className="absolute md:block hidden border origin-left border-secondary left-1/3 w-[260px] top-13"
          />
        </h1>
        <h4
          id="hero-subtitle"
          className="md:text-2xl  text-secondary font-bold mt-4 leading-[35px] md:w-auto w-full md:text-left text-center"
        >
          Never lose track of where your money’s <br /> going. Subsify helps you
          manage, monitor, <br /> and cancel all your subscriptions in one{" "}
          <br /> clean dashboard.
        </h4>
        <Button id="hero-button" className="mt-4 md:w-auto w-full !px-8">
          Get Started for Free
        </Button>
      </div>
      <div className="w-full" dir="rtl">
        <div id="hero-image">
          <Image src={heroImage} width={565} height={489} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
