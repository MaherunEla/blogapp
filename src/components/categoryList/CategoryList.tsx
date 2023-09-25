import React from "react";
import { CategoryListData } from "./CategoryListData";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div>
      <h1 className="my-[50px] text-3xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {CategoryListData.map((item, index) => (
          <Link
            href={item.href}
            className={`flex items-center gap-[10px] font-semibold sm:w-[15%] w-full md:w-[25%] lg:w-[50%] xl:w-[15%] h-[80px] justify-center rounded-[10px] ${item.color}`}
            key={index}
          >
            <div className="relative w-[32px] h-[32px]">
              <Image
                src={item.image}
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
