import React from "react";
import { MenuData } from "./MenuData";
import { CategoryListData } from "../categoryList/CategoryListData";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/popularpost", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const getCatData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const Menu = async () => {
  const data = await getData();
  console.log(data);
  const catdata = await getCatData();
  console.log(catdata);
  return (
    <div className="hidden md:flex flex-col w-full xl:w-[400px]  ">
      <h6>What&apos;s hot</h6>
      <h1 className="text-3xl font-bold pb-5">Most Popular</h1>
      <div className="flex flex-col gap-10 pb-10">
        {data.map((item, index) => (
          <Link href={`/post/${item.slug}`} key={index}>
            <div className="flex flex-col gap-2">
              <p
                className={`${item.catSlug} w-fit py-2 px-4 text-white  rounded-[50px]`}
              >
                {item.catSlug}
              </p>
              <h4 className="font-semibold text-lg">{item.desc}</h4>
              <h6>
                <span className="font-medium">{item.user.name}</span>-
                <span className="text-[var(--textColor)] font-normal">
                  {item.createdAt.substring(0, 10)}
                </span>
              </h6>
            </div>
          </Link>
        ))}
      </div>
      <div className="pb-10">
        <h6 className="pb-1 text-[#626262] font-normal">Discover by topic</h6>
        <h1 className="text-3xl font-bold pb-10">Categories</h1>
        <div className="grid grid-cols-3 gap-10 ">
          {catdata.map((item, index) => (
            <Link href={`/blog?cat=${item.slug}`} key={index}>
              <p
                className={`${item.slug} p-4 rounded-[10px] font-medium flex items-center justify-center`}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="">
        <h6 className="pb-2">Chosen by the editor</h6>
        <h1 className="pb-10 font-bold text-2xl ">Editors Pick</h1>
        <div className="flex flex-col gap-10">
          {MenuData.map((item, index) => (
            <div className="flex gap-4" key={index}>
              <div className="relative w-[80px] h-[60px]">
                <Image
                  src={item.image}
                  fill
                  alt="image"
                  className="rounded-full border-4 border-slate-200"
                />
              </div>
              <div className="flex flex-col gap-1" key={index}>
                <p
                  className={`${item.color} w-fit px-2 text-sm text-white  rounded-[50px]`}
                >
                  {item.title}
                </p>
                <h4 className="font-semibold text-lg leading-4">
                  {item.subtitle}
                </h4>
                <h6 className="text-sm">
                  <span className="font-medium">{item.author}</span>-
                  <span className="text-[var(--textColor)] font-normal">
                    {item.date}
                  </span>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
