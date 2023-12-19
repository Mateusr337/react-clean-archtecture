import { render } from "@testing-library/react";
import { LoginPage } from "..";

describe("Login component", () => {
  test("Should not render spinner and error on start", async () => {
    const { getByTestId } = render(<LoginPage />);
    const component = getByTestId("form-states");
    expect(component.childElementCount).toBe(0);
  });
});
