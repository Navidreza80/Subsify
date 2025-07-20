"use client"

import React, { useRef } from "react";
import gsap from "gsap";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onCustomClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onCustomClick,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (btnRef.current) {
      gsap.fromTo(
        btnRef.current,
        { scale: 1 },
        { scale: 1.1, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.inOut" }
      );
    }
    if (onCustomClick) onCustomClick(e);
    if (props.onClick) props.onClick(e);
  };

  return (
    <button
      ref={btnRef}
      className={`py-[14px] px-[20px] cursor-pointer rounded-[16px] bg-primary text-lg font-semibold ${className}`}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
