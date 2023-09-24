import Image from "next/image";
import React from "react";


const Featured = () => {
  return <div className="mt-[30px]">
    <h1 className="text-[96px] font-[300] ">
      <b>Hey, lama dev here!</b>Discover my stories and creative ideas.
    </h1>
    <div className="mt-[60px] flex items-center gap-[50px]">
      <div className="  ">
        <Image src="/p1.jpeg" alt="" width={500} height={500}/>
      </div>
      <div>
        <h1>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.</p>
            <button>Read More</button>
      </div>

    </div>
  </div>;
};

export default Featured;
