import { render, screen } from "@testing-library/react";

import { Header } from "../components/Header";

describe("Component Header", () => {
  it("renders the Header component", () => {
    render(<Header />);

    const rootElement = screen.getByTestId("header");
    expect(rootElement).toBeInTheDocument();
  });

  it("renders the Header component without throwing", () => {
    expect(() => render(<Header />)).not.toThrow();
  });
});
