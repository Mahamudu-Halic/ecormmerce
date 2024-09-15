import React from "react";

const TimerComponent = () => {
  return (
    <div className="z-50 text-xs md:text-sm bg-black text-white w-full p-3 flex items-center justify-center gap-3 sticky top-0">
      <p>New Season Coming! Discount 10% for all product! Check out now!</p>{" "}
      <span className="bg-[#2F2F2F] py-1 px-2 rounded-xl text-xs">20:48</span>
    </div>
  );
};

export default TimerComponent;
