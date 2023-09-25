import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-[30px]">
      <h1 className="text-4xl sm:text-5xl md:text-[64px] lg:text-[72px] xl:text-[96px] text-[var(--textColor)] font-[300] ">
        <b>Hey, lama dev here!</b>Discover my stories and creative ideas.
      </h1>
      <div className="mt-[60px] flex items-center gap-[50px]">
        <div className="relative hidden lg:flex flex-1 h-[500px]">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-[40px]  text-[var(--textColor)] ">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-xl font-[300] text-[color:var(--softTextColor)]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="py-[16px] px-[20px] rounded-[5px] w-fit  text-[var(--textColor)] bg-[var(--softBg)]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
