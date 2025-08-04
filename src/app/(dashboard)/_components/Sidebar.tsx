"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/subsify.png";
import Open from "@/assets/images/icons/open.png";
import Close from "@/assets/images/icons/close.png";
import { useState } from "react";
import Dashboard from "@/assets/images/icons/menu.png";
import Subscription from "@/assets/images/icons/bell.png";
import Calendar from "@/assets/images/icons/calendar-2.png";
import Profile from "@/assets/images/icons/people.png";

const dashboardItems = [
  { image: Dashboard, text: "Dashboard", href: "/dashboard" },
  { image: Subscription, text: "Subscriptions", href: "/subscriptions" },
  { image: Calendar, text: "Calendar", href: "/calendar" },
  { image: Profile, text: "Profile", href: "/profile" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <aside className="w-[17.5%] sticky top-[37px] border border-secondary rounded-2xl px-[14px] py-[23px]">
      <div className="w-full flex justify-between">
        <Link href={"/home"}>
          <Image
            src={Logo}
            width={94}
            height={94}
            alt="Logo Image - Get back to home"
          />
        </Link>

        <Image
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer"
          src={isOpen ? Close : Open}
          width={43}
          height={43}
          alt="Close Sidebar"
        />
      </div>

      <ul className="mt-[63px]">
        {dashboardItems.map((item, index) => (
          <li key={index}>
            <Link className="flex items-center gap-2 py-2" href={item.href}>
              <Image src={item.image} width={24} height={24} alt={item.text} />
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;
