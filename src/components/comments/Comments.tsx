import Image from "next/image";
import Link from "next/link";
import React from "react";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="py-10">
      <h1 className="text-2xl text-[#626262] font-bold ">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center gap-5 py-10 ">
          <textarea
            className="flex-1 py-5 px-2 border border-slate-200"
            placeholder="write a comment..."
          />
          <button className="w-fit flex-none px-5 py-4 bg-emerald-600 text-white rounded-[10px]">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-5">
            <div className="relative w-[60px] h-[60px]">
              <Image src="/p1.jpeg" alt="image" fill className="rounded-full" />
            </div>
            <div className="flex flex-col gap-2 ">
              <span>Jone Doe</span>
              <span>01.01.2023</span>
            </div>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
