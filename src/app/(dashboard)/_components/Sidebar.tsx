"use client";

import Subscription from "@/assets/images/icons/bell.png";
import Close from "@/assets/images/icons/close.png";
import Dashboard from "@/assets/images/icons/menu.png";
import Open from "@/assets/images/icons/open.png";
import Logo from "@/assets/images/subsify.png";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const dashboardItems = [
  { image: Dashboard, text: "Dashboard", href: "/dashboard" },
  {
    image: Subscription,
    text: "Subscriptions",
    href: "/dashboard/subscriptions",
  },
];

const Sidebar = ({
  responsive,
  sideBarResponsive,
}: {
  responsive?: string;
  sideBarResponsive?: string;
}) => {
  const [isOpen, setIsOpen] = useState(true); // desktop collapse
  const [isMobileOpen, setIsMobileOpen] = useState(false); // mobile drawer

  return (
    <>
      {/* Mobile hamburger */}
      <div className={`lg:hidden ${responsive} flex items-center`}>
        <Image
          onClick={() => setIsMobileOpen(true)}
          className="cursor-pointer"
          src={Open}
          width={32}
          height={32}
          alt="Open Sidebar"
        />
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`
        ${sideBarResponsive}
           flex-col
          transition-all duration-300
          ${isOpen ? "w-[17.5%]" : "w-[7%]"}
          sticky top-[37px]
          h-[calc(100vh-74px)]
          border border-secondary
          rounded-2xl px-[14px] py-[23px]
        `}
      >
        {/* Header */}
        <div
          className={`w-full flex ${
            isOpen ? "justify-between" : "justify-center"
          }`}
        >
          {isOpen && (
            <Link href={"/home"}>
              <Image
                src={Logo}
                width={94}
                height={94}
                alt="Logo Image - Get back to home"
              />
            </Link>
          )}

          <Image
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer"
            src={isOpen ? Close : Open}
            width={43}
            height={43}
            alt="Toggle Sidebar"
          />
        </div>

        {/* Menu */}
        <ul className={`mt-[63px] ${!isOpen && "space-y-2"}`}>
          {dashboardItems.map((item, index) => (
            <li key={index}>
              {isOpen ? (
                <Link
                  className="flex items-center gap-2 py-2 text-2xl"
                  href={item.href}
                >
                  <Image
                    src={item.image}
                    width={24}
                    height={24}
                    alt={item.text}
                  />
                  <span>{item.text}</span>
                </Link>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex items-center justify-center py-2"
                      href={item.href}
                    >
                      <Image
                        src={item.image}
                        width={32}
                        height={32}
                        alt={item.text}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.text}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="bg-background w-[75%] max-w-[300px] h-screen p-4">
            <div className="flex justify-between items-center mb-6">
              <Image src={Logo} width={94} height={94} alt="Logo" />
              <Image
                onClick={() => setIsMobileOpen(false)}
                className="cursor-pointer"
                src={Close}
                width={32}
                height={32}
                alt="Close Sidebar"
              />
            </div>
            <ul className="space-y-4">
              {dashboardItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className="flex items-center gap-3 text-lg"
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <Image
                      src={item.image}
                      width={24}
                      height={24}
                      alt={item.text}
                    />
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
