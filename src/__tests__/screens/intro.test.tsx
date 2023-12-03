import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { IntroScreen } from "../../screens/Intro/IntroScreen";

describe("Intro", () => {
  it("renders a heading", () => {
    render(
      <BrowserRouter>
        <IntroScreen />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading", {
      name: "Unlimited movies, TV shows, and more.",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a get started button", () => {
    render(
      <BrowserRouter>
        <IntroScreen />
      </BrowserRouter>
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Get started");
  });

  it("renders intro unchanged", () => {
    const { container } = render(
      <BrowserRouter>
        <IntroScreen />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
