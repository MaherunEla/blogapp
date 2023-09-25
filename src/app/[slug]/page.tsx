import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-between gap-16">
        <h1 className="flex-1 text-5xl font-black  leading-[70px] pb-1">
          Lorem ipsum dolor sit amet consectetur adipising elit.
          <div className="flex gap-2 pt-3">
            <div className="relative w-[60px] h-[60px]">
              <Image
                src="/culture.png"
                fill
                alt="image"
                className="rounded-full"
              />
            </div>
            <div className="text-xl font-normal">
              <p>William Randolph</p>
              <p>25 April 2023</p>
            </div>
          </div>
        </h1>

        <div className="relative flex-1 h-[300px]">
          <Image
            src="/culture.png"
            fill
            alt="image"
            className="rounded-[10px]"
          />
        </div>
      </div>

      <div className="flex justify-between gap-20 py-20">
        <div className="flex-1">
          <p className="font-normal text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cupiditate,
            quam nisi magni ea laborum inventore voluptatum laudantium repellat
            ducimus unde aspernatur fuga. Quo, accusantiu quisquam! Harum unde
            sit culpa debitis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.Cupiditate, quam nisi magni ea laborum inventore
            voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo,
            accusantiu quisquam! Harum unde sit culpa debitis. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit.Cupiditate, quam nisi magni
            ea laborum inventore voluptatum laudantium repellat ducimus unde
            aspernatur fuga. Quo, accusantiu quisquam! Harum unde sit culpa
            debitis.
          </p>
          <Comments />
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default page;
