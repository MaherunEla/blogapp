"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { QueryClient, useQueryClient, useQuery } from "@tanstack/react-query";

import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { uploadImages } from "@/utils/uploadImage";
import axios from "axios";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const fetchCategory = () => {
  return axios.get("/api/categories");
};

// const getData = async () => {
//   const res = await fetch("/api/categories", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed");
//   }
//   return res.json();
// };

const Page = () => {
  const { status } = useSession();
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState<string>();
  const { data } = useQuery({
    queryKey: ["category-data"],
    queryFn: fetchCategory,
  });
  console.log(data?.data?.categories);

  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status != "authenticated") {
    router.push("/");
  }
  const addSelect = (e: any) => {
    setCategory(e.target.value);
    console.log(setCategory);
  };
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: category,
      }),
    });
    console.log(res);
  };
  console.log({
    title,
    desc: value,
    img: media,
    slug: slugify(title),
    catSlug: category,
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="p-[50px] text-5xl border-none outline-none bg-transparent placeholder-[#b3b3b1]"
      />

      <div className="flex items-start justify-start gap-5 h-[300px] md:h-[400px] xl:h-[700px] relative">
        <button
          className="border-[#1a8917] w-[36px] h-[36px] flex items-center justify-center rounded-[50%] bg-transparent border border-[var(--textColor)]"
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className="  flex gap-5 bg-[var(--bg)] absolute z-[999] w-[200px]  xl:w-[500px] left-[50px]">
            <input
              type="file"
              id="image"
              onChange={async (e: any) => {
                const file = e.target.files[0];

                // setFile(e.target.files[0]);

                const res = await uploadImages(file, () => {});
                console.log(res);
                setPreview(URL.createObjectURL(file));

                setMedia(res?.url);
              }}
              style={{ display: "none" }}
            />
            <button className="border-[#1a8917] w-[36px] h-[36px] flex items-center justify-center rounded-[50%] bg-transparent border border-[var(--textColor)]">
              <label htmlFor="image">
                <div className="relative w-[16px] h-[16px]">
                  <Image src="/image.png" fill alt="image" />
                </div>
              </label>
            </button>
            <button className="border-[#1a8917] w-[36px] h-[36px] flex items-center justify-center rounded-[50%] bg-transparent border border-[var(--textColor)]">
              <div className="relative w-[16px] h-[16px]">
                <Image src="/external.png" fill alt="image" />
              </div>
            </button>
            <button className="border-[#1a8917] w-[36px] h-[36px] flex items-center justify-center rounded-[50%] bg-transparent border border-[var(--textColor)]">
              <div className="relative w-[16px] h-[16px]">
                <Image src="/plus.png" fill alt="image" />
              </div>
            </button>
          </div>
        )}

        <ReactQuill
          className="w-[200px] lg:w-[300px] xl:w-[600px] mt-10"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
        {preview && (
          <div className="relative hidden lg:flex lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] my-10">
            <Image src={preview} fill alt="image" />
          </div>
        )}
      </div>
      {preview && (
        <div className="relative w-full h-[300px] lg:hidden my-10">
          <Image src={preview} fill alt="image" />
        </div>
      )}

      <select
        className="px-5 py-5 text-red-500 font-bold mt-5"
        // onClick={async () => {
        //   const data = await getData();
        //   setCategory(data);
        //   console.log(category);
        // }}
        onChange={addSelect}
      >
        <option selected value="0">
          Select Category
        </option>
        {/* <option value="travel">travel</option> */}
        {data?.data?.categories.map((item: any, index: number) => (
          <option value={item.slug} key={index}>
            {item.title}
          </option>
        ))}
      </select>

      <button
        onClick={handleSubmit}
        className="absolute top-8 right-5 py-[10px] px-5 bg-green-700 rounded-[20px] text-white"
      >
        Publish
      </button>
    </div>
  );
};

export default Page;
