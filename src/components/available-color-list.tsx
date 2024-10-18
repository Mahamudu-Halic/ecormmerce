"use client"

import { useEffect, useState } from "react";
import { ItemInfo } from "../../constant";
import AvailableColorItem from "./available-color-item";

const AvailableColorList = ({color}:{color: (value: string)=> void}) => {
    const [selectedColor, setSelectedColor] = useState<string>(ItemInfo.color[0])

    const changeSelectedColor = (value:string) => {
        setSelectedColor(value)
    }

    useEffect(() => {
      color(selectedColor);
    }, [selectedColor])
  return (
    <div className="flex gap-2 items-center">
      {ItemInfo.color.map((color) => {
        return <AvailableColorItem key={color} color={color} selectedColor={selectedColor} changeSelectedColor={changeSelectedColor} />;
      })}
    </div>
  );
};

export default AvailableColorList;
