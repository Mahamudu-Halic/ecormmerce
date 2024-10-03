import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RecommendedItemsContainer from "@/components/recommended-items-container";
import { RecommendedItemsList } from "../../constant";

describe("RecommendedItems Component", () => {
  test("should render items correctly", () => {
    render(<RecommendedItemsContainer />);

    RecommendedItemsList.forEach((item) => {
      const itemElement = screen.getByTestId(item.name);
      expect(itemElement).toBeInTheDocument();

      const heartButton = screen.getByLabelText(item.name);
      expect(heartButton).toBeInTheDocument();

      const image = screen.getByAltText(item.name);
      expect(image).toBeInTheDocument();

      const name = screen.getByText(item.name);
      expect(name).toBeInTheDocument();

      const price = screen.getByText(`$${item.price}.00`);
      expect(price).toBeInTheDocument();
    });
  });

  test("should have update favorite when heart is clicked", () => {
    render(<RecommendedItemsContainer />);

    RecommendedItemsList.forEach((item) => {
      const heartButton = screen.getByLabelText(item.name);
      if (item.favorite) {
        expect(heartButton).toHaveAttribute("fill", "red");
        fireEvent.click(heartButton);

        expect(heartButton).toHaveAttribute("fill", "white");
      } else {
        expect(heartButton).toHaveAttribute("fill", "white");
        fireEvent.click(heartButton);

        expect(heartButton).toHaveAttribute("fill", "red");
      }
    });
  });
});
