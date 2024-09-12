"use client"

import React, { useState } from "react";
import { Colors } from "../../constant";
import AvailableColorItem from "./available-color-item";

const AvailableColorList = () => {
    const [selectedColor, setSelectedColor] = useState<string>(Colors[0])

    const changeSelectedColor = (value:string) => {
        setSelectedColor(value)
    }
  return (
    <div className="flex gap-2 items-center">
      {Colors.map((color) => {
        return <AvailableColorItem key={color} color={color} selectedColor={selectedColor} changeSelectedColor={changeSelectedColor} />;
      })}
    </div>
  );
};

export default AvailableColorList;
