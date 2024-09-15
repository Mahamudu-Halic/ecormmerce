import Image from "next/image";
import React from "react";

const ItemImageList = () => {
  return (
    <div className="flex lg:flex-col gap-3 justify-between">
      {Array.from({ length: 4 }).map((item, index) => {
        return (
          <div
            key={index}
            className="relative lg:w-[120px] md:w-full w-[100px] lg:h-full md:h-[100px] h-[100px] rounded-xl bg-[#F2F2F2]"
          >
            <Image
              fill
              src={"/assets/img05 1.png"}
              alt="item"
              className="object-center object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemImageList;
