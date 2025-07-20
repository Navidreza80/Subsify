"use client";

import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Secure from "@/assets/images/icons/verified.png";
import Subscribe from "@/assets/images/icons/subscription.png";
import Calender from "@/assets/images/icons/calendar.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Secure Auth",
    description: "Sign in safely with modern, encrypted authentication.",
    icon: Secure,
  },
  {
    title: "Easy Subscription Logging",
    description:
      "Add subscriptions in seconds, complete with pricing and billing cycle.",
    icon: Subscribe,
  },
  {
    title: "Renewal Reminders",
    description: "Never forget a renewal date again.",
    icon: Calender,
  },
];

const Features = () => {
  useGSAP(() => {
    // Border animations
    gsap.fromTo(
      "#border",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#border",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      "#border2",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#border2",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
    // Features fade up animation
    gsap.fromTo(
      "#features-list > div",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#features-list",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="w-full flex justify-center flex-wrap my-16">
      <div className="w-full flex justify-center relative">
        <video
          playsInline
          preload="auto"
          src="/videos/eyes.mp4"
          autoPlay
          loop
          muted
          className="md:h-[184px] md:w-[363px] h-[90px] w-[200px] z-10"
        />
        <div
          id="border"
          className="absolute md:block hidden top-1/2 left-0 w-full h-[1px] bg-secondary origin-center"
          style={{ zIndex: 1 }}
        />
      </div>
      <h2 className="my-10 relative">
        <span className="section-title relative bg-background z-10 px-2">
          Features Preview
        </span>
        <div
          id="border2"
          className="absolute md:block hidden left-1/2 top-1/2 w-[150%] h-[1px] bg-secondary origin-center"
          style={{ transform: "translate(-50%, -50%)", zIndex: 1 }}
        />
      </h2>
      <div
        id="features-list"
        className="my-10 w-full md:px-[128px] px-4 flex flex-wrap md:justify-between justify-center gap-y-8"
      >
        {features.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-y-2 relative items-center justify-center w-[275px] aspect-square flex-wrap flex-col rounded-2xl border-secondary border md:border-b-0"
            >
              <div className="relative">
                <Image
                  width={70}
                  height={70}
                  src={item.icon}
                  alt={item.title}
                  className="object-contain"
                />
                <div
                  style={{ transform: "translate(-50%, -50%)", zIndex: 1 }}
                  className="bg-title top-10 absolute left-1/2 w-16 aspect-square opacity-50 blur-2xl"
                />
              </div>
              <h3 className="w-full text-center title">{item.title}</h3>
              <p className="w-full text-center text-secondary font-semibold text-base">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Features;
