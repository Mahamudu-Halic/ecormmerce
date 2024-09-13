"use client";
import ItemDetailsContainer from "@/components/item-details-container";
import MobileSidebar from "@/components/mobile-sidebar";
import Navbar from "@/components/navbar";
import RecommendedItemsContainer from "@/components/recommended-items-container";
import TimerComponent from "@/components/timer";
import { useState } from "react";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className="">
      <TimerComponent />
      <Navbar toggleSidebar={toggleSidebar}/>
      <MobileSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <ItemDetailsContainer />
      <RecommendedItemsContainer />
    </div>
  );
}
