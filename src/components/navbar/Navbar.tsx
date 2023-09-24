import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="hidden lg:flex flex-1  gap-[10px]">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="facebook" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-1 items-center lg:left-0 xl:text-[32px] md:text-2xl text-4xl font-bold" >elablog</div>
      <div className="flex items-center sm:items-end gap-5 xl:gap-[15px] flex-1 text-xl xl:text-lg ">
        <ThemeToggle />
        <Link href="/" className="hidden sm:flex">Homepage</Link>
        <Link href="/" className="hidden sm:flex">Contact</Link>
        <Link href="/" className="hidden sm:flex">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
