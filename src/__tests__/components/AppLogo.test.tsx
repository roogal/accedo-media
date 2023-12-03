import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppLogo } from "../../components/AppLogo/index";

describe("App Logo", () => {
  it("renders a link", () => {
    render(
      <BrowserRouter>
        <AppLogo />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/home");
  });
});
