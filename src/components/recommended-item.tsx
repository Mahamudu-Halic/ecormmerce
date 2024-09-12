import { BriefcaseBusiness, Heart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const RecommendedItem = ({
  item,
}: {
  item: { image: string; name: string; price: number; favorite: boolean };
}) => {
    const [favorite, setFavorite] = useState<boolean>(item?.favorite)
    const toggleFavorite = () => {
        setFavorite(prev => !prev)
    }
  return (
    <div className="relative cursor-pointer sm:w-fit w-full">
      <button className="absolute top-3 right-3 z-10 bg-[#fff] rounded-full p-2" onClick={toggleFavorite}>
        <Heart size={15} bbox={5} fill={`${favorite ? "red" : "white"}`} color={`${favorite ? "red" : "black"}`} />
      </button>
      <div className="relative sm:w-[220px] w-full h-[250px] rounded-xl bg-[#F2F2F2]">
        <Image fill src={item?.image} alt="item" className="object-center" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p>{item?.name}</p>
          <p>&#36;{item?.price}.00</p>
        </div>
        <BriefcaseBusiness />
      </div>
    </div>
  );
};

export default RecommendedItem;
