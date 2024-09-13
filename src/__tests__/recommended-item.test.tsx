
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RecommendedItem from "@/components/recommended-item";

describe("RecommendedItem Component", () => {
  const item = {
    image: "/sample.jpg",
    name: "Sample Item",
    price: 99,
    favorite: false,
  };

  it("renders the item details correctly", () => {
    render(<RecommendedItem item={item} />);

    const image = screen.getByAltText("item");
    expect(image).toBeInTheDocument();

    const name = screen.getByText(item.name);
    expect(name).toBeInTheDocument();

    const price = screen.getByText(`$${item.price}.00`);
    expect(price).toBeInTheDocument();
  });

  it("changes favorite state when the heart button is clicked", () => {
    render(<RecommendedItem item={item} />);

    const heartButton = screen.getByRole("button");

    expect(heartButton.firstChild).toHaveAttribute("fill", "white");

    fireEvent.click(heartButton);

    expect(heartButton.firstChild).toHaveAttribute("fill", "red");

    fireEvent.click(heartButton);

    expect(heartButton.firstChild).toHaveAttribute("fill", "white");
  });
});
