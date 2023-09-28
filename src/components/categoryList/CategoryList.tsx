import React from "react";
import { CategoryListData } from "./CategoryListData";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div>
      <h1 className="my-[50px] text-3xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {data?.categories?.map((item: any) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`flex items-center gap-[10px] font-semibold sm:w-[15%] w-full md:w-[25%] lg:w-[50%] xl:w-[15%] h-[80px] justify-center rounded-[10px] ${item.slug}`}
            key={item.id}
          >
            <div className="relative w-[32px] h-[32px]">
              <Image
                src={item.img}
                fill
                alt="image"
                className="rounded-[50%]"
              />
            </div>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
