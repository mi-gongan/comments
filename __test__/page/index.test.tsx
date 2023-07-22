import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import { RecoilRoot } from "recoil";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a title", () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    const heading = screen.getByRole("title");

    expect(heading).toHaveTextContent("나를 소개하는 새로운 방법,코멘션");
  });
  it("renders a subtitle", () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    const heading = screen.getByRole("subtitle");

    expect(heading).toHaveTextContent("지금 바로 받아보세요!");
  });
});
