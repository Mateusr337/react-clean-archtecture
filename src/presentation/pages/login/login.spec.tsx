import { RenderResult, render } from "@testing-library/react";
import { LoginPage } from "..";

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<LoginPage />);
  return { sut };
};

describe("Login component", () => {
  test("Spinner and error shouldn't render on start", async () => {
    const { sut } = makeSut();
    const component = sut.getByTestId("form-states");
    expect(component.childElementCount).toBe(0);
  });

  test("Submit button should starts disabled", async () => {
    const { sut } = makeSut();
    const button = sut.getByTestId("submit-btn") as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });
});
