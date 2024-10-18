import Image from "next/image";
import React from "react";

const ImageItem = ({ currentImage }: { currentImage: string }) => {
  return (
    <div className="w-full md:h-full h-[500px] bg-[#F2F2F2] rounded-xl flex justify-center items-center p-5 lg:p-10">
      <div className="relative w-full h-full md:w-[80%]">
        <Image
          fill
          src={currentImage}
          alt="item"
          quality={100}
          className="object-center"
        />
      </div>
    </div>
  );
};

export default ImageItem;
