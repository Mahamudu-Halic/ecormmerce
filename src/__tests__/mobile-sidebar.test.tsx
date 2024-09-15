import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileSidebar from "@/components/mobile-sidebar";

jest.mock("../../constant", () => ({
  NavItems: [
    { name: "Home", url: "/", active: true },
    { name: "About", url: "/about", active: false },
    { name: "Contact", url: "/contact", active: false },
  ],
}));

describe("Mobile sidebar Component", () => {
  const toggleSidebar = jest.fn();

  it("renders the sidebar elements correctly", () => {
    render(<MobileSidebar showSidebar={true} toggleSidebar={() => {}} />);

    const homeLink = screen.getByText("Home");

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveClass("font-bold");

    const aboutLink = screen.getByText("About");

    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText("Contact");

    expect(contactLink).toBeInTheDocument();
  });

  it("hides sidebar when overlay is clicked clicked", () => {
    render(<MobileSidebar showSidebar={true} toggleSidebar={toggleSidebar} />);

    const overlay = screen.getByLabelText("overlay");
    fireEvent.click(overlay);

    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });
  it("hides sidebar when X is clicked clicked", () => {
    render(<MobileSidebar showSidebar={true} toggleSidebar={toggleSidebar} />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(toggleSidebar).toHaveBeenCalledTimes(2);
  });
});
