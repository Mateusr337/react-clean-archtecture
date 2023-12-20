import { render } from "@testing-library/react";
import { LoginPage } from "..";

describe("Login component", () => {
  test("Spinner and error shouldn't render on start", async () => {
    const { getByTestId } = render(<LoginPage />);
    const component = getByTestId("form-states");
    expect(component.childElementCount).toBe(0);
  });

  test("Submit button should starts disabled", async () => {
    const { getByTestId } = render(<LoginPage />);
    const button = getByTestId("submit-btn") as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });
});
