"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
  }
  return data;
};
const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };
  return (
    <div className="py-10">
      <h1 className="text-2xl text-[#626262] font-bold ">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center gap-5 py-10 ">
          <textarea
            className="flex-1 py-5 px-2 border border-slate-200"
            placeholder="write a comment..."
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="w-fit flex-none px-5 py-4 bg-emerald-600 text-white rounded-[10px]"
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="flex flex-col gap-10">
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className="flex flex-col gap-6" key={item.id}>
                <div className="flex gap-5">
                  <div className="relative w-[60px] h-[60px]">
                    <Image
                      src={item.user.image}
                      alt="image"
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <span>{item.user.name}</span>
                    <span>{item.createdAt.substring(0, 10)}</span>
                  </div>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
