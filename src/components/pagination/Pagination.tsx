"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext }: any) => {
  const router = useRouter();
  return (
    <div className="flex justify-between py-10">
      <button
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
        className="disabled:bg-red-950 disabled:cursor-none  w-[120px] py-[10px] px-[20px] bg-red-500 text-white"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
        className="disabled:bg-red-950 disabled:cursor-none w-[120px] py-[10px] px-[20px] bg-red-500 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
