"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const AuthLinks = () => {
  const status = "authenticated";
  const [open, setOpen] = useState(false);
  return (
    <>
      {status != "authenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write" className="hidden sm:flex">
            Write
          </Link>
          <span className=" hidden sm:flex cursor-pointer">Logout</span>
        </>
      )}
      <div className="flex sm:hidden w-5 h-4" onClick={() => setOpen(!open)}>
        <BiMenu size={20} />
      </div>
      {open && (
        <div
          className={`absolute flex flex-col items-center justify-center gap-[50px] text-4xl z-[999] top-[100px] left-0 bg-white h-[calc(100vh-100px)] w-full `}
        >
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status != "authenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="cursor-pointer">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default AuthLinks;
