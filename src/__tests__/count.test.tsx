import Collections from "@/app/collections/page";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Counter", () => {
  it("count value should initialy be equal to 0", () => {
    render(<Collections />);

    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("should increase count by one when button is clicked", () => {
    render(<Collections />);

    const addButton = screen.getByRole("button", { name: /add/i });
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(addButton);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("should decrement count by one when button is clicked", () => {
    render(<Collections />);

    const addButton = screen.getByRole("button", { name: /add/i });
    const countValue1 = Number(screen.getByTestId("count").textContent);

    expect(countValue1).toEqual(0);

    fireEvent.click(addButton);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(1);

    const subtractButton = screen.getByRole("button", { name: /subtract/i });

    fireEvent.click(subtractButton);
    const countValue3 = Number(screen.getByTestId("count").textContent);
    expect(countValue3).toEqual(0);

    fireEvent.click(subtractButton);
    const countValue4 = Number(screen.getByTestId("count").textContent);
    expect(countValue4).toEqual(-1);
  });

  it("should set count to 0 when button is clicked", () => {
    render(<Collections />);

    const subractButton = screen.getByRole("button", { name: /subtract/i });
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);

    fireEvent.click(subractButton);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(-1);

    fireEvent.click(subractButton);
    const countValue3 = Number(screen.getByTestId("count").textContent);
    expect(countValue3).toEqual(-2);

    const restartButton = screen.getByRole("button", { name: /restart/i });
    fireEvent.click(restartButton);
    const countValue4 = Number(screen.getByTestId("count").textContent);
    expect(countValue4).toEqual(0);
  });

  it("should switch operator sign when button is clicked", () => {
    render(<Collections />);

    const subractButton = screen.getByRole("button", { name: /subtract/i });
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);

    fireEvent.click(subractButton);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(-1);

    fireEvent.click(subractButton);
    const countValue3 = Number(screen.getByTestId("count").textContent);
    expect(countValue3).toEqual(-2);

    const switchButton = screen.getByRole("button", { name: /switch/i });
    fireEvent.click(switchButton);
    const countValue4 = Number(screen.getByTestId("count").textContent);
    expect(countValue4).toEqual(2);
  });
});
