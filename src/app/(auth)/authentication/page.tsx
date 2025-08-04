"use client";

import Link from "next/link";
import { Fragment, useState, useRef } from "react";
import { Button } from "@/components/common/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSearchParams } from "next/navigation";

const loginFields = [
  {
    name: "username",
    type: "text",
    placeholder: "Enter your username",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
];

const registerFields = [
  {
    name: "username",
    type: "text",
    placeholder: "Choose a username",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Create a password",
  },
];

const Page = () => {
  const searchParams = useSearchParams();
  const modeParam = searchParams.get("mode");
  const initialTab = modeParam === "register" ? "register" : "login";
  const [activeTab, setActiveTab] = useState<"login" | "register">(initialTab);

  // Refs for GSAP
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95, x: 30, y: 30 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: 30, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    }
    // Form fields stagger
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.querySelectorAll("label, input, button, span"),
        { opacity: 0, x: 30, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          delay: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [activeTab]);

  const formFields = activeTab === "register" ? registerFields : loginFields;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="relative p-[26px] rounded-[48px] bg-[#191919]">
        <div className="bg-secondary rounded-2xl top-[35px] left-[35px] w-[350px] md:w-[446px] h-[539px] absolute" />
        <button
          className={`px-6 cursor-pointer absolute z-10 text-xl -top-[24px] pt-4 pb-6 rounded-t-2xl font-semibold bg-secondary transition-all ${
            activeTab == "register" ? "left-[160px]" : "left-[140px]"
          }`}
          onClick={() =>
            setActiveTab((prev) => (prev == "register" ? "login" : "register"))
          }
        >
          {activeTab == "register" ? "Login" : "Register"}
        </button>
        <div
          ref={cardRef}
          className="rounded-2xl relative z-40 bg-[#181818] border border-secondary shadow-lg w-[350px] md:w-[446px] h-[539px] px-6 py-8 flex flex-col items-center"
        >
          <button
            className="px-6 cursor-pointer absolute z-20 text-xl -top-[53px] border border-secondary border-b-[#191919] left-[21px] pt-4 pb-2 rounded-t-2xl font-semibold bg-[#191919]  transition-all"
            onClick={() =>
              setActiveTab((prev) =>
                prev == "register" ? "register" : "login"
              )
            }
          >
            {activeTab == "register" ? "Register" : "Login"}
          </button>

          {/* Card */}
          <div className="w-full pt-8 pb-2 px-2">
            <h2
              ref={titleRef}
              className="text-center text-primary font-bold text-2xl mb-6 font-poppins tracking-wide"
            >
              Subsify<span className="text-secondary">.</span>
            </h2>

            <form ref={formRef} className="flex flex-col gap-4">
              {formFields.map((field) => (
                <Fragment key={field.name}>
                  <label className="text-sm font-semibold">{field.name}</label>
                  <input
                    type={field.type}
                    className="rounded-xl bg-secondary/70 px-4 py-2 outline-none font-poppins"
                    placeholder={field.placeholder}
                  />
                </Fragment>
              ))}
              <Button className="w-full mt-2 bg-primary font-bold">
                {activeTab === "register" ? "Register" : "Login"}
              </Button>
              {activeTab === "login" ? (
                <Link href="#" className="text-xs text-blue-400 mt-2 text-left">
                  Forgot password?
                </Link>
              ) : (
                <span
                  className="text-xs text-blue-400 mt-2 text-left block cursor-pointer"
                  onClick={() => setActiveTab("login")}
                >
                  Already have an account? Login.
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
