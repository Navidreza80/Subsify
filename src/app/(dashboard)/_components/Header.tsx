"use client";

import Bell from "@/assets/images/icons/bell.png";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
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
      className="w-full z-10 backdrop-blur-2xl sticky top-[37px] rounded-2xl border border-secondary px-8 py-5 flex justify-between items-center bg-gradient-to-r from-background via-secondary/10 to-background shadow-lg overflow-hidden"
    >
      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-title text-2xl font-bold shadow-md">
          N
        </div>
        <div>
          <h1 className="title leading-tight">Navidreza</h1>
          <p className="text-base text-secondary">
            navidrezaabbaszadeh89@gmail.com
          </p>
        </div>
      </div>
      {/* Dashboard Title & Subtitle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="title text-2xl">{title}</div>
        <span className="text-sm text-secondary mt-1">
          {description}
        </span>
      </div>
      {/* Logo & Notifications */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <Image src={Bell} alt="Notifications" width={32} height={32} />
          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full px-1.5 py-0.5 border-2 border-background">
            3
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
