import React from "react";
import RecommendedItem from "./recommended-item";
import { RecommendedItemsList } from "../../constant";

const RecommendedItemsContainer = () => {
  return (
    <div className="flex items-center flex-wrap gap-4 w-full p-5 mt-10">
      {RecommendedItemsList.map((item, index) => {
        return <RecommendedItem key={index} item={item} />;
      })}
    </div>
  );
};

export default RecommendedItemsContainer;
