"use client";
import ItemDetailsContainer from "@/components/item-details-container";
import Navbar from "@/components/navbar";
import RecommendedItemsContainer from "@/components/recommended-items-container";
import TimerComponent from "@/components/timer";

export default function Home() {
  return (
    <div className="">
      <TimerComponent />
      <Navbar />
      <ItemDetailsContainer />
      <RecommendedItemsContainer />
    </div>
  );
}
