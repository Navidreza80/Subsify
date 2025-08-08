/* eslint-disable */

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Image from "next/image";
import Link from "next/link";

const DashboardCard = ({
  image,
  title,
  subtitle,
  icon,
  href,
}: {
  image: any;
  title: string;
  subtitle: string;
  icon: any;
  href: string;
}) => {
  useGSAP(() => {
    gsap.fromTo(
      [".animatedTitle", ".animatedSubtitle"],
      { y: -20, opacity: 0, duration: 0.5 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        scrub: true,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div className="
      w-full sm:w-[48%] lg:w-[23.5%]
      relative
      border rounded-2xl border-secondary
      flex flex-col justify-center items-center
      p-4 sm:p-5
      h-auto min-h-[250px]
    ">
      {/* Image container */}
      <div className="
        h-[120px] sm:h-[150px] aspect-square
        rounded-full border border-secondary
        flex justify-center items-center
      ">
        <Image
          src={image}
          alt="Profile Picture"
          className="animatedImage"
          width={67}
          height={67}
        />
      </div>

      {/* Title */}
      <span className="title animatedTitle mt-2 text-center text-base sm:text-lg">
        {title}
      </span>

      {/* Subtitle */}
      <p className="
        w-[90%] sm:w-[200px]
        text-ellipsis whitespace-nowrap overflow-hidden
        subtitle animatedSubtitle text-sm sm:text-base text-center
      ">
        {subtitle}
      </p>

      {/* Edit Icon */}
      <Link href={href}>
        <Image
          className="top-2 right-2 absolute"
          src={icon}
          width={24}
          height={24}
          alt="Edit icon"
          aria-label="Click to edit your profile picture"
        />
      </Link>
    </div>
  );
};
export default DashboardCard;
