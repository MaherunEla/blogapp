"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="w-10 h-5 rounded-[50px] cursor-pointer flex items-center justify-between  relative"  style={theme === "dark" ? {background:"white"}: {background:"#0f172a"}}onClick={toggle}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className="w-[15px] h-[15px] rounded-[50px]  absolute "
      style={theme === "dark" ? {left:1, background:"#0f172a"}: {right:1,background:"white"}}></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
