"use client"
import React, { Fragment, useState } from "react";
import { ItemInfo } from "../../constant";
import { Star } from "lucide-react";
import AvailableColorList from "./available-color-list";
import SizeList from "./size-list";

const ItemDetails = ({
  setCartItems,
  cartItems,
}: {
  setCartItems: (value: any) => void;
  cartItems: [];
}) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [adding, setAdding] = useState(false)
  const addToCart = () => {
    setAdding(true)
    const newItem = { ...ItemInfo, size, color };
    setTimeout(() => {

      const items = [...cartItems, newItem];
      sessionStorage.setItem("items", JSON.stringify(items));
      setCartItems(items);
      setAdding(false);
    }, 3000)
  };
  return (
    <div className="flex-1 flex flex-col gap-3">
      <h4 className="text-sm text-[#b8b6b6]">{ItemInfo?.category}</h4>
      <h1 className="md:text-3xl text-2xl">{ItemInfo?.name}</h1>
      <div className="flex gap-3 items-end">
        <p className="text-[#b8b6b6] line-through text-xl">
          &#36;{ItemInfo?.old_price}.00
        </p>
        <div className="flex gap-2 items-center">
          <p className="md:text-4xl text-3xl font-bold">
            &#36;{ItemInfo?.current_price}.00
          </p>
          <span className="bg-black px-2 py-1 rounded-md text-white text-center text-xs">
            {ItemInfo?.discount}% Disc
          </span>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <div className="flex items-center gap-1">
          {Array.from({ length: ItemInfo?.stars }).map((i, index) => {
            return (
              <Fragment key={index}>
                <Star
                  aria-label={`star ${index}`}
                  size={15}
                  color="black"
                  fill="black"
                />
              </Fragment>
            );
          })}
          {Array.from({ length: 5 - ItemInfo?.stars }).map((i, index) => {
            return (
              <Fragment key={index}>
                <Star size={15} color="gray" fill="gray" />
              </Fragment>
            );
          })}
          <p className="text-xs">({ItemInfo?.stars})</p>
        </div>
        <p className="text-xs">{ItemInfo?.reviews} Reviews</p>
      </div>

      <div>
        <h3 className="text-black mb-3">Descriptions</h3>
        <p className="text-[#b8b6b6] text-base w-[90%]">
          {ItemInfo?.description}
        </p>
      </div>

      <div>
        <h3 className="text-black mb-3">Available Color</h3>
        <AvailableColorList color={setColor}/>
      </div>
      <div>
        <h3 className="text-black mb-3">Size</h3>
        <SizeList size={setSize}/>
      </div>

      <div className="flex gap-3 w-full">
        <button
          onClick={addToCart}
          className="md:text-base text-lg rounded-3xl w-full p-2 bg-[#f2f2f2] text-[#b8b6b6] hover:bg-black hover:text-white transition-all"
          aria-label="add-to-cart"
          disabled={adding}
        >
          {adding ? "Adding to cart..." : "Add To Cart"}
        </button>
        <button aria-label="checkout" disabled={adding} className="md:text-base text-lg rounded-3xl w-full p-2 bg-black text-white hover:bg-[#f2f2f2] hover:text-black transition-all">
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
