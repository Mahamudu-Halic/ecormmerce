import { render, screen, fireEvent } from "@testing-library/react";
import ItemDetails from "@/components/item-details";
import "@testing-library/jest-dom";
import SizeList from "@/components/size-list";
import AvailableColorList from "@/components/available-color-list";
import SizeItem from "@/components/size-item";

jest.mock("../../constant", () => ({
  ItemInfo: {
    category: "Category",
    name: "Product Name",
    old_price: 100,
    current_price: 90,
    discount: 10,
    stars: 4,
    reviews: 100,
    description: "Lorem ipsum dolor sit amet.",
  },
  Sizes: ["S", "M", "L", "XL", "XXL"],
  Colors: ["red", "blue", "green"],
}));
describe("ItemDetails Component", () => {
  it("renders item details correctly", () => {
    render(<ItemDetails />);

    expect(screen.getByText(/cate/i)).toBeInTheDocument();
    expect(screen.getByText(/product/i)).toBeInTheDocument();
    expect(screen.getByText(/100.00/i)).toBeInTheDocument();
    expect(screen.getByText(/90.00/i)).toBeInTheDocument();
    expect(screen.getByText(/10%/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
    expect(screen.getByText(/100\ reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/lorem/i)).toBeInTheDocument();
  });

  it("renders size options", () => {
    render(<SizeList />);

    expect(screen.getByText("M")).toBeInTheDocument();
    expect(screen.getByText("S")).toBeInTheDocument();
    expect(screen.getByText("XXL")).toBeInTheDocument();
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("XL")).toBeInTheDocument();
  });

  it("highlights the initially selected size", () => {
    render(<SizeList />);

    const selectedButton = screen.getByText("S");
    expect(selectedButton).toHaveClass("border-black bg-black text-white");
  });

  it("changes the selected size when clicked", () => {
    render(<SizeList />);

    const newSizeButton = screen.getByText("M");
    fireEvent.click(newSizeButton);

    expect(newSizeButton).toHaveClass("border-black bg-black text-white");

    const previousSizeButton = screen.getByText("S");
    expect(previousSizeButton).not.toHaveClass(
      "border-black bg-black text-white"
    );
  });

  it("renders color options", () => {
    render(<AvailableColorList />);

    expect(screen.getByLabelText(/red/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/blue/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/green/i)).toBeInTheDocument();
  });

  it("highlight the initially selected color", () => {
    render(<AvailableColorList />);

    const selectedButton = screen.getByLabelText(/red/i);
    expect(selectedButton).toHaveClass("border-black");
  })

  it("chnages selected color when clicked", () => {
    render(<AvailableColorList />);

    const newColorButton = screen.getByLabelText(/blue/i);
    fireEvent.click(newColorButton);

    expect(newColorButton).toHaveClass("border-black");

    const previousColorButton = screen.getByLabelText(/red/i);
    expect(previousColorButton).not.toHaveClass("border-black");
  })
});
