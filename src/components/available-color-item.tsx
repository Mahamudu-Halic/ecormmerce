import React from "react";

const AvailableColorItem = ({
  color,
  selectedColor,
  changeSelectedColor,
}: {
  color: string;
  selectedColor: string;
  changeSelectedColor: (value: string) => void;
}) => {
  return (
    <button
      className={`border ${
        selectedColor === color ? "border-black" : "border-[#b6b8b8]"
      } rounded-lg p-1`}
      onClick={() => changeSelectedColor(color)}
      aria-label={color}
    >
      <span
        className={"w-7 h-7 rounded-lg block"}
        style={{ background: color }}
      ></span>
    </button>
  );
};

export default AvailableColorItem;
