import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileSidebar from "@/components/mobile-sidebar";
import Navbar from "@/components/navbar";

describe("Mobile component", () => {
  test("should render correctly", () => {
    render(<MobileSidebar showSidebar={false} toggleSidebar={() => {}} />);

    const categoriesLink = screen.getByText(/categories/i);
    expect(categoriesLink).toBeInTheDocument();

    const collectionLink = screen.getByText(/collection/i);
    expect(collectionLink).toBeInTheDocument();

    const storeLink = screen.getByText("store");
    expect(storeLink).toBeInTheDocument();

    const findStoreLink = screen.getByText(/find/i);
    expect(findStoreLink).toBeInTheDocument();

    const loginButton = screen.getByText(/login/i);
    expect(loginButton).toBeInTheDocument();

    const closeButton = screen.getByLabelText(/close/i);
    expect(closeButton).toBeInTheDocument();

    const overlay = screen.getByLabelText("overlay");
    expect(overlay).toBeInTheDocument();

    const sidebar = screen.getByLabelText("sidebar");
    expect(sidebar).toBeInTheDocument();
  });

  test("should be hidden initially", () => {
    render(<MobileSidebar showSidebar={false} toggleSidebar={() => {}} />);

    const overlay = screen.getByLabelText("overlay");
    expect(overlay).toHaveClass("right-[-800px]");

    const sidebar = screen.getByLabelText("sidebar");
    expect(sidebar).toHaveClass("right-[-800px]");
  });

  test("should close sidebar when close button is clicked", () => {
    const toggleSidebar = jest.fn();

    render(<MobileSidebar showSidebar={true} toggleSidebar={toggleSidebar} />);

    const closeButton = screen.getByLabelText(/close/i)
    const sidebar = screen.getByLabelText(/sidebar/i);

    expect(sidebar).toHaveClass("right-0")
    fireEvent.click(closeButton)
    
    expect(toggleSidebar).toHaveBeenCalled()
  })

  test("should close sidebar when overlay is clicked", () => {
    const toggleSidebar = jest.fn();

    render(<MobileSidebar showSidebar={true} toggleSidebar={toggleSidebar} />);

    const overlay = screen.getByLabelText(/overlay/i)
    const sidebar = screen.getByLabelText(/sidebar/i);

    expect(sidebar).toHaveClass("right-0")
    fireEvent.click(overlay)
    
    expect(toggleSidebar).toHaveBeenCalled()
  })

  // test("testing", () => {
  //   const toggleSidebar = jest.fn();

  //   render(
  //     <div>
  //       <Navbar toggleSidebar={toggleSidebar}/>
  //         <MobileSidebar showSidebar={false} toggleSidebar={toggleSidebar} />
  //     </div>
  //   )

  //   const menuButton = screen.getByRole("button", {name: /menu/i});
  //   expect(menuButton).toBeInTheDocument()

  //   const closeButton = screen.getByLabelText(/close/i);
  //   expect(closeButton).toBeInTheDocument();

  //   const overlay = screen.getByLabelText("overlay");
  //   expect(overlay).toBeInTheDocument();

  //   const sidebar = screen.getByLabelText("sidebar");
  //   expect(sidebar).toBeInTheDocument();

  //   fireEvent.click(menuButton);
  //   expect(toggleSidebar).toHaveBeenCalledTimes(1);

  //   fireEvent.click(closeButton);
  //   expect(toggleSidebar).toHaveBeenCalledTimes(2)

  //   fireEvent.click(menuButton);
  //   expect(toggleSidebar).toHaveBeenCalledTimes(3)

  //   fireEvent.click(overlay);
  //   expect(toggleSidebar).toHaveBeenCalledTimes(4)
  // })
});
