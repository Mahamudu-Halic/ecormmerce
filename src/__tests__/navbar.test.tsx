import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import Navbar from "@/components/navbar";


describe("Navbar component", () => {
  const cartItems: [] = [];
  test("should render correctly", () => {
    render(<Navbar toggleSidebar={() => {}} cartItems={cartItems}/>)

    const brandName = screen.getByText(/jolt/i)
    expect(brandName).toBeInTheDocument()

    const categoriesLink = screen.getByText(/categories/i);
    expect(categoriesLink).toBeInTheDocument();

    const collectionLink = screen.getByText(/collection/i);
    expect(collectionLink).toBeInTheDocument();

    const storeLink = screen.getByText("store");
    expect(storeLink).toBeInTheDocument();

    const findStoreLink = screen.getByText(/find/i);
    expect(findStoreLink).toBeInTheDocument();

    const searchButton = screen.getByRole("button", {name: /search/i});
    expect(searchButton).toBeInTheDocument();

    const cartButton = screen.getByRole("button", {name: /cart/i});
    expect(cartButton).toBeInTheDocument();

    const loginButton = screen.getByText(/login/i);
    expect(loginButton).toBeInTheDocument();

    const menuButton = screen.getByRole("button", {name: /menu/i});
    expect(menuButton).toBeInTheDocument();
  })

  test("should display the sidebar when clicked", () => {
    const toggleSidebar = jest.fn();
    render(<Navbar toggleSidebar={toggleSidebar} cartItems={cartItems}/>)

    const menuButton = screen.getByRole("button", {name: /menu/i});
    fireEvent.click(menuButton);

    expect(toggleSidebar).toHaveBeenCalled();
  })
})