import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  item: any;
};
const Card = ({ item }: Props) => {
  return (
    <div>
      <div className="relative hidden lg:flex flex-1 h-[400px]">
        <Image src={item.img} fill alt="image" />
      </div>
      <div className="flex flex-col flex-1 gap-5">
        <p className="uppercase text-[#626262]">
          {item.createdAt.substring(0, 10)} -
          <span className="text-red-500 font-semibold">{item.catSlug}</span>
        </p>
        <Link href={`/post/${item.slug}`}>
          {" "}
          <h2 className="font-bold text-4xl">{item.title}</h2>
        </Link>
        <p className="text-[#626262]">{item.desc}</p>
        <Link
          href={`/post/${item.slug}`}
          className="w-fit p-1 font-semibold border-b-4 border-b-red-500"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
