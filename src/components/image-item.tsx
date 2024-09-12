import Image from "next/image";
import React from "react";

const ImageItem = () => {
  return (
    <div className="relative w-full md:h-full h-[500px] bg-[#F2F2F2] rounded-xl">
      <Image
        fill
        src={"/assets/img05 1.png"}
        alt="item"
        className="object-center object-cover"
      />
    </div>
  );
};

export default ImageItem;
