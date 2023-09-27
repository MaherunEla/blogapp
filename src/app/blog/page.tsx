import Menu from "@/components/Menu/Menu";
import CardList from "@/components/cardList/CardList";
import React from "react";

const page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div>
      <h1 className="bg-[#ff7857] p-2 flex items-center justify-center font-bold text-white text-3xl">
        {cat} Blog
      </h1>
      <div className="flex py-10 justify-between gap-10">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default page;
