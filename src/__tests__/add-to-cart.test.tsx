import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

  test("should disable button when adding to cart", () => {
    render(<ItemDetails setCartItems={jest.fn} cartItems={cartItems} />);

    const addToCartBtn = screen.getByRole("button", { name: /add-to-cart/i });
    const checkoutBtn = screen.getByRole("button", { name: /checkout/i });

    fireEvent.click(addToCartBtn);
    expect(addToCartBtn).toBeDisabled();
    expect(checkoutBtn).toBeDisabled();
  });

  test("should render adding to cart", () => {
    render(<ItemDetails setCartItems={jest.fn} cartItems={cartItems} />);

    const addToCartBtn = screen.getByRole("button", { name: /add-to-cart/i });

    expect(addToCartBtn).toHaveTextContent(/add to cart/i);

    fireEvent.click(addToCartBtn);

    expect(addToCartBtn).toHaveTextContent(/adding to cart/i);
  });

  test("should enable button after adding to cart", async () => {
    render(<ItemDetails setCartItems={jest.fn} cartItems={cartItems} />);

    const addToCartBtn = screen.getByRole("button", { name: /add-to-cart/i });
    const checkoutBtn = screen.getByRole("button", { name: /checkout/i });

    expect(addToCartBtn).toHaveTextContent(/add to cart/i);
    fireEvent.click(addToCartBtn);

    expect(addToCartBtn).toBeDisabled();
    expect(checkoutBtn).toBeDisabled();

    // await waitFor(() => expect(addToCartBtn).not.toBeDisabled())

    setTimeout(() => {
      expect(addToCartBtn).not.toBeDisabled();
      expect(checkoutBtn).not.toBeDisabled();
    }, 3000);
  });

  test("should increment cartItem by 1 when button is clicked", () => {
    render(<Home />);

    const cartItem = screen.getByLabelText("cartItem").textContent;
    expect(cartItem).toEqual("0");

    const addToCartBtn = screen.getByRole("button", { name: /add-to-cart/i });
    fireEvent.click(addToCartBtn);

    setTimeout(() => {
      expect(cartItem).toEqual("1");
    }, 3000);
  });
});
