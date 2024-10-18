import ItemDetails from "./item-details";
import ItemDisplayContainer from "./item-display-container";

const ItemDetailsContainer = ({
  setCartItems,
  cartItems,
}: {
  setCartItems: (value: any) => void;
  cartItems: [];
}) => {
  return (
    <div className="px-5 flex gap-5 md:flex-row flex-col">
      <ItemDisplayContainer />
      <ItemDetails setCartItems={setCartItems} cartItems={cartItems}/>
    </div>
  );
};

export default ItemDetailsContainer;
