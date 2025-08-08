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
  { image: Subscription, text: "Subscriptions", href: "/dashboard/subscriptions" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <aside
      className={`${
        isOpen ? "w-[17.5%]" : "w-[7%]"
      } transition-all duration-300 sticky h-[calc(100vh-74px)] top-[37px] border border-secondary rounded-2xl px-[14px] py-[23px]`}
    >
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
          alt="Close Sidebar"
        />
      </div>

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
                    className="flex items-center justify-center gap-2 py-2"
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
  );
};
export default Sidebar;
