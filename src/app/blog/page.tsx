import Menu from "@/components/Menu/Menu";
import CardList from "@/components/cardList/CardList";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="bg-[#ff7857] p-2 flex items-center justify-center font-bold text-white text-3xl">
        Style Blog
      </h1>
      <div className="flex py-10 justify-between gap-10">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default page;
