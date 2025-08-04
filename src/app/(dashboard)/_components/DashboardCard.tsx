"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const DashboardCard = ({
  image,
  title,
  subtitle,
  icon,
  href,
}: {
  image: StaticImageData;
  title: string;
  subtitle: string;
  icon: StaticImageData;
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
    <div className="w-[23.5%] relative h-[268px] border rounded-2xl border-secondary flex justify-center items-center flex-col">
      <div className="h-[150px] aspect-square rounded-full border border-secondary flex justify-center items-center">
        <Image
          src={image}
          alt="Profile Picture"
          className="animatedImage"
          width={67}
          height={67}
        />
      </div>
      <span className="title animatedTitle mt-1">{title}</span>
      <p className="w-[200px] text-ellipsis whitespace-nowrap overflow-hidden subtitle animatedSubtitle">
        {subtitle}
      </p>
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
