"use client";

import { Button } from "@/components/common/Button";
import { loginFields, registerFields } from "@/constants";
import useAuthAnimations from "@/hooks/useAuthAnimations";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Refs for GSAP
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useAuthAnimations({
    cardRef,
    titleRef,
    formRef,
    activeTab,
  });

  const formFields = activeTab === "register" ? registerFields : loginFields;

  return (
    <div className="h-screen flex items-center justify-center bg-background">
      <div className="relative p-4 rounded-2xl bg-[#191919]">
        {/* Background Accent */}
        <div className="bg-secondary rounded-xl top-4 left-4 w-[280px] md:w-[340px] h-[420px] absolute" />

        {/* Switch Tab Button */}
        <button
          className={`px-4 py-2 text-xs absolute z-10 -top-[15px] rounded-t-lg font-medium bg-secondary transition-all ease-in-out cursor-pointer ${
            activeTab === "register" ? "left-[110px]" : "left-[95px]"
          }`}
          onClick={() =>
            setActiveTab((prev) => (prev === "register" ? "login" : "register"))
          }
        >
          {activeTab === "register" ? "Login" : "Register"}
        </button>

        {/* Main Card */}
        <div
          ref={cardRef}
          className="rounded-xl relative z-40 bg-[#181818] border border-secondary/50 shadow-lg w-[280px] md:w-[340px] h-[420px] px-4 py-6 flex flex-col items-center"
        >
          {/* Active Tab Button */}
          <button
            className="px-4 ease-in-out cursor-pointer py-2 text-xs absolute z-20 -top-[33px] border border-secondary border-b-[#191919] left-4 rounded-t-lg font-medium bg-[#191919] transition-all ease-in-out"
            onClick={() =>
              setActiveTab((prev) =>
                prev === "register" ? "register" : "login"
              )
            }
          >
            {activeTab === "register" ? "Register" : "Login"}
          </button>

          {/* Card Content */}
          <div className="w-full pt-4 pb-2 px-2">
            <h2
              ref={titleRef}
              className="text-center text-primary font-semibold text-lg mb-4 tracking-wide"
            >
              Subsify<span className="text-secondary">.</span>
            </h2>

            <form ref={formRef} className="flex flex-col gap-2">
              {formFields.map((field) => (
                <Fragment key={field.name}>
                  <label className="text-xs font-medium">{field.name}</label>
                  <input
                    type={field.type}
                    className="rounded-lg bg-secondary/70 placeholder:text-xs  px-3 py-2 text-xs outline-none"
                    placeholder={field.placeholder}
                  />
                </Fragment>
              ))}
              <Button className="w-full mt-2 bg-primary font-semibold text-sm">
                {activeTab === "register" ? "Register" : "Login"}
              </Button>
              {activeTab === "login" ? (
                <Link
                  href="#"
                  className="text-[10px] text-blue-400 mt-1 text-left"
                >
                  Forgot password?
                </Link>
              ) : (
                <span
                  className="text-[10px] text-blue-400 mt-1 text-left block cursor-pointer"
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
