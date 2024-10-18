import React, { useState } from "react";
import ItemImageList from "./item-image-list";
import ImageItem from "./image-item";
import { ItemInfo } from "../../constant";

const ItemDisplayContainer = () => {
  const [currentImage, setCurrentImage] = useState(ItemInfo.images[0])
  return (
    <div className="flex gap-3 flex-1 lg:flex-row flex-col-reverse">
      <ItemImageList setCurrentImage={setCurrentImage} />
      <ImageItem currentImage={currentImage}/>
    </div>
  );
};

export default ItemDisplayContainer;
