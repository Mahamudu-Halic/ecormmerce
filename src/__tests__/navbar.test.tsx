import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import Navbar from "@/components/navbar";
import MobileSidebar from "@/components/mobile-sidebar";

jest.mock("../../constant", () => ({
  NavItems: [
    { name: "Home", url: "/", active: true },
    { name: "About", url: "/about", active: false },
    { name: "Contact", url: "/contact", active: false },
  ],
}));

describe("Navbar Component", () => {
  it("renders the Navbar elements correctly", () => {
    render(<Navbar toggleSidebar={() => {}} />);

    const brandName = screen.getByText("Jolt");
    expect(brandName).toBeInTheDocument();

    const homeLink = screen.getByText("Home");

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveClass("font-bold");

    const aboutLink = screen.getByText("About");

    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText("Contact");

    expect(contactLink).toBeInTheDocument();
  });

  it("displays sidebar when the menu icon is clicked", () => {
    const toggleSidebar = jest.fn();
    render(
      <Navbar
        toggleSidebar={toggleSidebar}
      />
    );

    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });
});
