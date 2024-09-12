import ItemDetails from "./item-details";
import ItemDisplayContainer from "./item-display-container";

const ItemDetailsContainer = () => {
  return (
    <div className="px-5 flex gap-5 md:flex-row flex-col">
      <ItemDisplayContainer />
      <ItemDetails />
    </div>
  );
};

export default ItemDetailsContainer;
