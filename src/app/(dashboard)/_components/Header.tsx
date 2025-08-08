"use client";

import Bell from "@/assets/images/icons/bell.png";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div
      ref={headerRef}
      className="
        w-full z-30 sticky top-[37px] 
        rounded-2xl border border-secondary
        px-4 sm:px-6 lg:px-8 py-4
        flex justify-between
        gap-4 sm:gap-0
        backdrop-blur-2xl bg-gradient-to-r from-background via-secondary/10 to-background shadow-lg
      "
    >
      <Sidebar sideBarResponsive="hidden" />

      {/* User Info */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary flex items-center justify-center text-title text-lg sm:text-2xl font-bold shadow-md">
          N
        </div>
        <div className="truncate">
          <h1 className="title leading-tight text-base sm:text-lg">
            Navidreza
          </h1>
          <p className="text-sm sm:text-base text-secondary truncate max-w-[150px] sm:max-w-none">
            navidrezaabbaszadeh89@gmail.com
          </p>
        </div>
      </div>

      {/* Notifications */}
      <div className="flex items-center justify-center sm:justify-end">
        <div className="relative cursor-pointer">
          <Image src={Bell} alt="Notifications" width={28} height={28} />
          <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] sm:text-xs rounded-full px-1 py-0.5 border-2 border-background">
            3
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
