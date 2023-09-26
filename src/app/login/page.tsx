"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const { data, status } = useSession();
  // console.log(data, status);
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-[500px] flex flex-col gap-10 bg-[var(--softBg)] p-20 rounded-[10px]">
        <div
          onClick={() => signIn("google")}
          className="px-5 md:px-10 py-5 bg-red-400 rounded-[10px] text-white flex items-center justify-center cursor-pointer"
        >
          Sign in with Google
        </div>
        <div className="px-5 md:px-10 py-5 bg-black rounded-[10px] text-white flex items-center justify-center cursor-pointer">
          Sign in with Github
        </div>
        <div className="px-5 md:px-10 py-5 bg-blue-500 rounded-[10px] text-white flex items-center justify-center cursor-pointer">
          Sign in with FaceBook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
