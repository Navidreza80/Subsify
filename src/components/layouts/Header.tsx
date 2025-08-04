"use client";

import Logo from "@/assets/images/subsify.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../common/Button";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#logo",
      { scale: 0.7, rotate: -15, opacity: 0 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  return (
    <header className="w-full md:px-[128px] px-4 py-[25px] flex justify-between items-center">
      <Link href="/" aria-label="Subsify Home">
        <div id="logo">
          {mounted ? (
            <Image
              width={isMobile ? 90 : 124}
              height={isMobile ? 80 : 124}
              src={Logo}
              alt="Subsify Logo"
              className="object-contain"
            />
          ) : (
            <Image
              width={124}
              height={124}
              src={Logo}
              alt="Subsify Logo"
              className="object-contain"
            />
          )}
        </div>
      </Link>

      <div className="flex items-center md:space-x-4">
        <Link href="/authentication?mode=login">
          <Button>Login</Button>
        </Link>
        <Link href="/authentication?mode=register" className="md:block hidden">
          <Button>Register</Button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
