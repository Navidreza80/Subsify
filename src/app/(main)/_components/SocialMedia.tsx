"use client"

import netflix from "@/assets/images/social-media/netflix.png";
import spotify from "@/assets/images/social-media/spotify.png";
import amazon from "@/assets/images/social-media/social.png";
import youtube from "@/assets/images/social-media/youtube.png";
import disney from "@/assets/images/social-media/Disney+_logo.svg.png";
import instagram from "@/assets/images/social-media/instagram.png";
import facebook from "@/assets/images/social-media/communication.png";
import discord from "@/assets/images/social-media/discord.png";
import reddit from "@/assets/images/social-media/reddit.png";
import x from "@/assets/images/social-media/twitter.png";
import telegram from "@/assets/images/social-media/telegram.png";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialMediaItems = [
  { image: netflix },
  { image: spotify },
  { image: youtube },
  { image: amazon },
  { image: disney },
  { image: instagram },
  { image: facebook },
  { image: discord },
  { image: reddit },
  { image: x },
  { image: telegram },
];

const SocialMedia = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { x: -500 },
      {
        x: -100, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true, 
        },
      }
    );
  }, []);

  const items = [...socialMediaItems, ...socialMediaItems,];

  return (
    <div
      ref={containerRef}
      className="md:flex hidden gap-8 px-7 my-30"
    >
      {items.map((item, index) => (
        <Image
          width={62}
          height={62}
          src={item.image}
          className="w-16 h-16 inline-block"
          alt={`Social Media ${index}`}
          key={index}
        />
      ))}
    </div>
  );
};
export default SocialMedia;