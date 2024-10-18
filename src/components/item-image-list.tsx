import Image from "next/image";
import React from "react";
import { ItemInfo } from "../../constant";

const ItemImageList = ({
  setCurrentImage,
}: {
  setCurrentImage: (value: string) => void;
}) => {
  return (
    <div className="flex lg:flex-col gap-3 justify-between">
      {ItemInfo.images.map((item, index) => {
        return (
          <div
            key={item}
            className="relative lg:w-[120px] md:w-full w-[100px] lg:h-full md:h-[100px] h-[100px] rounded-xl bg-[#F2F2F2]"
            onMouseOver={() => setCurrentImage(item)}
          >
            <Image
              fill
              src={item}
              alt="item"
              className="object-center"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemImageList;
