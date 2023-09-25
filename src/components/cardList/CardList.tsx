import React from "react";

import Pagination from "../pagination/Pagination";
import { CardListData } from "./CardListData";
import Image from "next/image";

const CardList = () => {
  return (
    <div className="flex-1 w-full ">
      <h1 className="pb-10 font-bold text-3xl">Recent Post</h1>
      <div className="flex flex-col gap-10">
        {CardListData.map((item, index) => (
          <div className="flex gap-10" key={index}>
            <div className="relative hidden lg:flex flex-1 h-[400px]">
              <Image src={item.image} fill alt="image" />
            </div>
            <div className="flex flex-col flex-1 gap-5">
              <p className="uppercase text-[#626262]">
                {item.date} -
                <span className="text-red-500 font-semibold">
                  {item.caption}
                </span>
              </p>
              <h2 className="font-bold text-4xl">{item.title}</h2>
              <p className="text-[#626262]">{item.subtitle}</p>
              <button className="w-fit p-1 font-semibold border-b-4 border-b-red-500">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default CardList;
