"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { QueryClient, useQueryClient, useQuery } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { uploadImages } from "@/utils/uploadImage";
import axios from "axios";

const fetchCategory = () => {
  return axios.get("http://localhost:3000/api/categories");
};

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
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
  const [preview, setPreview] = useState(null);
  const categoryresult = useQuery({
    queryKey: ["category-data"],
    queryFn: fetchCategory,
  });
  console.log(categoryresult?.data?.data);
  // console.log(data, status);
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status != "authenticated") {
    router.push("/");
  }
  const addSelect = (e) => {
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

      <div className="flex items-start justify-start gap-5 h-[700px] relative">
        <button className=" " onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className="flex gap-5 bg-[var(--bg)] absolute z-[999] w-full left-[50px]">
            {preview && (
              <Image src={preview} width={400} height={400} alt="image" />
            )}
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
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <select
        className="px-5 py-5 text-red-500 font-bold"
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
        {categoryresult?.data?.data.map((item, index) => (
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
