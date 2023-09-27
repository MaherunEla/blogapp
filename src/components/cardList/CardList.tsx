import React from "react";

import Pagination from "../pagination/Pagination";
import { CardListData } from "./CardListData";
import Image from "next/image";
import Card from "../card/Card";
const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || " "}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  console.log(posts);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex-1 w-full ">
      <h1 className="pb-10 font-bold text-3xl">Recent Post</h1>
      <div className="flex flex-col gap-10">
        {posts.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
