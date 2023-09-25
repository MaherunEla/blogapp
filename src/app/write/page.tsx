"use client";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <input type="text" placeholder="Title" />
      <div>
        <button>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div>
            <button>
              <div className="relative w-[16px] h-[16px]">
                <Image src="/image.png" fill alt="image" />
              </div>
            </button>
            <button>
              <div className="relative w-[16px] h-[16px]">
                <Image src="/external.png" fill alt="image" />
              </div>
            </button>
            <button>
              <div className="relative w-[16px] h-[16px]">
                <Image src="/plus.png" fill alt="image" />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
