import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("greeting componet", () => {
  test("Greeting test", () => {
    render(<Greeting />);

    const greetElement = screen.getByText("Greetings to all!", {
      exact: false,
    });
    expect(greetElement).toBeInTheDocument();
  });

  test("renders unchanged text", () => {
    render(<Greeting />);

    const paraElement = screen.getByText("Will this test work or not?");
    expect(paraElement).toBeInTheDocument();
  });

  test("renders unchanged test", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    const changedElement = screen.getByText("Change Text!");
    expect(changedElement).toBeInTheDocument();




  })
});
