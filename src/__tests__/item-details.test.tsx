import { render, screen, fireEvent } from "@testing-library/react";
import { ItemInfo, Sizes, Colors } from "../../constant";
import ItemDetails from "@/components/item-details";
import SizeList from "@/components/size-list";
import AvailableColorList from "@/components/available-color-list";

describe("ItemDetails Component", () => {
  it("renders item details correctly", () => {
    render(<ItemDetails />);

    expect(screen.getByText(ItemInfo.category)).toBeInTheDocument();
    expect(screen.getByText(ItemInfo.name)).toBeInTheDocument();
    expect(screen.getByText(`$${ItemInfo.old_price}.00`)).toBeInTheDocument();
    expect(screen.getByText(`$${ItemInfo.current_price}.00`)).toBeInTheDocument();
    expect(screen.getByText(`${ItemInfo.discount}% Disc`)).toBeInTheDocument();
    expect(screen.getByText(`${ItemInfo.stars}`)).toBeInTheDocument();
    expect(screen.getByText(`${ItemInfo.reviews} Reviews`)).toBeInTheDocument();
    expect(screen.getByText(ItemInfo.description)).toBeInTheDocument();
  });

  it("renders size options and handles selection", () => {
    render(<SizeList />);

    Sizes.forEach((size) => {
      const sizeButton = screen.getByRole("button", {name: size});
      expect(sizeButton).toBeInTheDocument();

      fireEvent.click(sizeButton);
      expect(sizeButton).toHaveClass("border-black bg-black text-white");
    });
  });

  it("renders color options and handles selection", () => {
    render(<AvailableColorList />);

    Colors.forEach((color) => {
      const colorButton = screen.getByRole("button", { name: color });
      expect(colorButton).toBeInTheDocument();

      fireEvent.click(colorButton);
      expect(colorButton).toHaveClass("border-black");
    });
  });
});
