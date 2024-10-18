import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";
import Navbar from "@/components/navbar";
import ItemDetails from "@/components/item-details";

describe("Add item to cart", () => {
  const cartItems: [] = [];
  const toggleSidebar = jest.fn();
  test("items in cart should initially be empty", () => {
    render(<Navbar toggleSidebar={toggleSidebar} cartItems={cartItems} />);

    const cartItem = screen.getByLabelText("cartItem").textContent;
    expect(cartItem).toEqual("0");
  });

  test("should increment cartItem by 1 when button is clicked", () => {
    render(<Home />)

    const cartItem1 = screen.getByLabelText("cartItem").textContent;
    expect(cartItem1).toEqual("0");

    const addToCartBtn = screen.getByRole("button", { name: /add/i });
    fireEvent.click(addToCartBtn);

    const cartItem2 = screen.getByLabelText("cartItem").textContent;
    expect(cartItem2).toEqual("1");

  });
});
