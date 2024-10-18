"use client";

import { useEffect, useState } from "react";
import { ItemInfo } from "../../constant";
import SizeItem from "./size-item";

const SizeList = ({ size }: { size: (value: string) => void }) => {
  const [selectedSize, setSelectedSize] = useState<string>(ItemInfo.size[0]);

  const changeSelectedSize = (value: string) => {
    setSelectedSize(value);
  };

  useEffect(() => {
    size(selectedSize);
  }, [selectedSize]);
  return (
    <div className="flex gap-2 items-center mb-3">
      {ItemInfo.size.map((size) => {
        return (
          <SizeItem
            key={size}
            size={size}
            selectedSize={selectedSize}
            changeSelectedSize={changeSelectedSize}
          />
        );
      })}
    </div>
  );
};

export default SizeList;
