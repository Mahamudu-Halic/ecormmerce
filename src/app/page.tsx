"use client";
import ItemDetailsContainer from "@/components/item-details-container";
import MobileSidebar from "@/components/mobile-sidebar";
import Navbar from "@/components/navbar";
import RecommendedItemsContainer from "@/components/recommended-items-container";
import TimerComponent from "@/components/timer";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<[]>([]);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const getCartItems = () => {
    const items = sessionStorage.getItem("items");
    items && setCartItems(JSON.parse(items));
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log(cartItems);
  return (
    <div className="">
      <TimerComponent />
      <Navbar toggleSidebar={toggleSidebar} cartItems={cartItems} />
      <MobileSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <ItemDetailsContainer setCartItems={setCartItems} cartItems={cartItems} />
      <RecommendedItemsContainer />
    </div>
  );
}
