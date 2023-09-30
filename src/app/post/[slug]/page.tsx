import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";
import Image from "next/image";
import React from "react";
const getData = async (slug: any) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
type Props = {
  params: any;
};
const page = async ({ params }: Props) => {
  const { slug } = params;
  const data = await getData(slug);
  console.log(data?.post);

  return (
    <div>
      <div className="flex justify-between gap-16">
        <h1 className="flex-1 text-5xl font-black  leading-[70px] pb-1">
          {data?.post.title}
          <div className="flex gap-2 pt-3">
            <div className="relative w-[60px] h-[60px]">
              <Image
                src={data?.post.user?.image}
                fill
                alt="image"
                className="rounded-full"
              />
            </div>
            <div className="text-xl font-normal">
              <p className="font-medium">{data?.post.user?.name}</p>
              <p>{data?.post.user?.emailVerified}</p>
            </div>
          </div>
        </h1>

        <div className="relative flex-1 h-[300px]">
          <Image
            src={data?.post.img}
            fill
            alt="image"
            className="rounded-[10px]"
          />
        </div>
      </div>

      <div className="flex justify-between gap-20 py-20">
        <div className="flex-1">
          <div className="font-normal text-lg"></div>
          <Comments postSlug={slug} />
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default page;
