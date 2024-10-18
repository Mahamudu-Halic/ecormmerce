import { render, screen, fireEvent } from "@testing-library/react";
import ItemDetails from "@/components/item-details";
import "@testing-library/jest-dom";
import SizeList from "@/components/size-list";
import AvailableColorList from "@/components/available-color-list";
import SizeItem from "@/components/size-item";
import { Colors, ItemInfo, Sizes } from "../../constant";

describe("ItemDetails Component", () => {
  test("should render correctly", () => {
    const setCartItems = jest.fn();
    const cartItems: [] = [];
    render(<ItemDetails setCartItems={setCartItems} cartItems={cartItems} />);

    const category = screen.getByText(ItemInfo.category);
    expect(category).toBeInTheDocument();

    const name = screen.getByText(ItemInfo.name);
    expect(name).toBeInTheDocument();

    const oldPrice = screen.getByText(`$${ItemInfo.old_price}.00`);
    expect(oldPrice).toBeInTheDocument();

    const currentPrice = screen.getByText(`$${ItemInfo.current_price}.00`);
    expect(currentPrice).toBeInTheDocument();

    const discount = screen.getByText(ItemInfo.discount, { exact: false });
    expect(discount).toBeInTheDocument();

    const stars = screen.getByText(ItemInfo.stars, { exact: false });
    expect(stars).toBeInTheDocument();

    Array.from({ length: ItemInfo?.stars }).forEach((i, index) => {
      const star = screen.getByLabelText(`star ${index}`);
      expect(star).toBeInTheDocument();
    });

    const reviews = screen.getByText(`${ItemInfo.reviews} Reviews`);
    expect(reviews).toBeInTheDocument();

    Colors.forEach((color) => {
      const colorButton = screen.getByRole("button", { name: color });
      expect(colorButton).toBeInTheDocument();
    });

    Sizes.forEach((size) => {
      const sizeButton = screen.getByRole("button", { name: size });
      expect(sizeButton).toBeInTheDocument();
    });
  });

  test("should render color list correctly", () => {
    render(<AvailableColorList color={jest.fn}/>);

    let selectedColor = Colors[0];

    Colors.forEach((color) => {
      const colorButton = screen.getByRole("button", { name: color });
      if (color !== selectedColor) {
        expect(colorButton).not.toHaveClass("border-black");

        fireEvent.click(colorButton);
        expect(colorButton).toHaveClass("border-black");
        selectedColor = color;
      } else {
        expect(colorButton).toHaveClass("border-black");

        fireEvent.click(colorButton);
        expect(colorButton).toHaveClass("border-black");
      }
    });
  });

  test("should render size list correctly", () => {
    render(<SizeList size={jest.fn}/>);

    let selectedSize = Sizes[0];

    Sizes.forEach((size) => {
      const sizeButton = screen.getByRole("button", { name: size });

      if (selectedSize === size) {
        expect(sizeButton).toHaveClass("border-black");

        fireEvent.click(sizeButton);
        expect(sizeButton).toHaveClass("border-black");
        selectedSize = size;
      } else {
        expect(sizeButton).not.toHaveClass("border-black");

        fireEvent.click(sizeButton);
        expect(sizeButton).toHaveClass("border-black");
        selectedSize = size;
      }
    });
  });
});
