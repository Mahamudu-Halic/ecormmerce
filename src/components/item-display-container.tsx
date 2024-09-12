import React from "react";
import ItemImageList from "./item-image-list";
import ImageItem from "./image-item";

const ItemDisplayContainer = () => {
  return (
    <div className="flex gap-3 flex-1 lg:flex-row flex-col-reverse">
      <ItemImageList />
      <ImageItem />
    </div>
  );
};

export default ItemDisplayContainer;
