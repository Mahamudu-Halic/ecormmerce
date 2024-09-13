import React from "react";

const SizeItem = ({ size, selectedSize, changeSelectedSize }: { size: string; selectedSize: string; changeSelectedSize: (value: string) => void; }) => {
  return (
    <button aria-label={size} className={`border ${selectedSize === size ? "border-black bg-black text-white" : "border-[#f2f2f2] bg-[#f2f2f2]"} rounded-lg p-2 w-[40px] h-fit text-center`} onClick={() => changeSelectedSize(size)}>
      {size}
    </button>
  );
};

export default SizeItem;
