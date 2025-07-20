"use client";

import Image from "next/image";
import PeopleTalking from "@/assets/images/chart-analysing.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const WhySubsify = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".underline",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".underline",
        },
      }
    );
  }, []);
  return (
    <div className="flex flex-wrap justify-center my-20">
      <h2 className="section-title relative md:mb-16 mb-10">
        Why Subsify?
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50 blur-2xl" />
        <div className="underline absolute border origin-left border-secondary left-[95px] w-[150px] top-12" />
      </h2>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:px-[128px] px-4">
        <div className="md:mt-10 md:w-auto w-full md:text-left text-center ">
          <h2 className="md:text-[30px] text-2xl font-bold md:leading-[40px] relative">
            One Dashboard. <br /> Total Clarity.
            <div className="underline absolute md:block hidden border origin-left border-secondary left-[90px] w-[110px]" />
          </h2>
          <h4 className="text-secondary font-semibold md:text-2xl text-lg mt-4">
            From Netflix to Spotify to niche SaaS tools,{" "}
            <br className="md:block hidden" /> subscriptions pile up fast.
            Subsify brings them all <br className="md:block hidden" /> together
            so you can see what you’re paying,{" "}
            <br className="md:block hidden" /> when, and why — and cut what you
            don’t need.
          </h4>
        </div>
        <div dir="rtl" className="md:mt-0 mt-8">
          <Image
            src={PeopleTalking}
            width={558}
            height={372}
            alt="People managing subscriptions"
          />
        </div>
      </div>
    </div>
  );
};
export default WhySubsify;
