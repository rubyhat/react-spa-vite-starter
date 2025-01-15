import { render, screen } from "@testing-library/react";
import { Login } from "../Login";

describe("Page Login", () => {
  it("renders the Login page", () => {
    render(<Login />);

    const rootElement = screen.getByTestId("pageLogin");
    expect(rootElement).toBeInTheDocument();
  });
});
