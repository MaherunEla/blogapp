"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
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
    <div>
      <input
        type="text"
        placeholder="Title"
        className="p-[50px] text-5xl border-none outline-none bg-transparent placeholder-[#b3b3b1]"
      />
      <div className="flex items-start justify-start gap-5 h-[700px] relative">
        <button className=" " onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className="flex gap-5 bg-[var(--bg)] absolute z-[999] w-full left-[50px]">
            <button className="border-[#1a8917] w-[36px] h-[36px] flex items-center justify-center rounded-[50%] bg-transparent border border-[var(--textColor)]">
              <div className="relative w-[16px] h-[16px]">
                <Image src="/image.png" fill alt="image" />
              </div>
            </button>
            <button className="border-[#1a8917] w-[36px] h-[36px] flex items-center justify-center rounded-[50%] bg-transparent border border-[var(--textColor)]">
              <div className="relative w-[16px] h-[16px]">
                <Image src="/external.png" fill alt="image" />
              </div>
            </button>
            <button className="border-[#1a8917] w-[36px] h-[36px] flex items-center justify-center rounded-[50%] bg-transparent border border-[var(--textColor)]">
              <div className="relative w-[16px] h-[16px]">
                <Image src="/plus.png" fill alt="image" />
              </div>
            </button>
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className="absolute top-8 right-5 py-[10px] px-5 bg-green-700 rounded-[20px] text-white">
        Publish
      </button>
    </div>
  );
};

export default page;
