"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="w-10 h-5 rounded-[50px] cursor-pointer flex items-center justify-between bg-black relative">
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className="w-[15px] h-[15px] rounded-[50px] bg-white absolute left-[1px]"></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
