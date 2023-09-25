import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between py-10">
      <button className="w-[120px] py-[10px] px-[20px] bg-red-500 text-white">
        Previous
      </button>
      <button className="w-[120px] py-[10px] px-[20px] bg-red-500 text-white">
        Next
      </button>
    </div>
  );
};

export default Pagination;
