"use client";

import React, { useState } from "react";

const Collections = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  }
  const decrement = () => {
    setCount(prev => prev - 1);
  }
  const restart = () => {
    setCount(prev => prev * 0);
  }
  const switchSigns = () => {
    setCount(prev => prev * -1);
  }
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="flex flex-col gap-4 justify-center items-center">
        <span data-testid="count">{count}</span>
        <div className="flex gap-3">
          <button className="bg-black rounded-lg p-3 text-white" onClick={increment}>Add</button>
          <button className="bg-black rounded-lg p-3 text-white" onClick={decrement}>
            Subtract
          </button>
          <button className="bg-black rounded-lg p-3 text-white" onClick={restart}>
            Restart
          </button>
          <button className="bg-black rounded-lg p-3 text-white" onClick={switchSigns}>
            Switch Sign
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
