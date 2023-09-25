import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-5 xl:flex-row  xl:gap-[100px] ">
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="relative w-[60px] h-[60px]">
              <Image
                src="/culture.png"
                fill
                alt="image"
                className="rounded-full "
              />
            </div>
            <h1 className="text-3xl font-bold">Elablog</h1>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <div className="flex  gap-[10px]">
            <Image src="/facebook.png" alt="facebook" width={24} height={24} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={24}
              height={24}
            />
            <Image src="/tiktok.png" alt="facebook" width={24} height={24} />
            <Image src="/youtube.png" alt="youtube" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-1 justify-start xl:justify-end gap-5 xl:gap-20 ">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Links</h4>
            <Link href="">Homepage</Link>
            <Link href="">Blog</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Tags</h4>
            <Link href="">Style</Link>
            <Link href="">Fashion</Link>
            <Link href="">Coding</Link>
            <Link href="">Travel</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Social</h4>
            <Link href="">FaceBook</Link>
            <Link href="">Instagram</Link>
            <Link href="">Tiktok</Link>
            <Link href="">Youtube</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
