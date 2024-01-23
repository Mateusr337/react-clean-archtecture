import { Validation } from "@/presentation/protocols/validation";
import { faker } from "@faker-js/faker";
import {
  RenderResult,
  cleanup,
  fireEvent,
  render,
} from "@testing-library/react";
import { LoginPage } from "..";

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
};

class ValidationSpy implements Validation {
  errorMessage: string;
  input: object;

  validate(input: object): string {
    this.input = input;
    return this.errorMessage;
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const sut = render(<LoginPage validation={validationSpy} />);
  return { sut, validationSpy };
};

describe("Login component", () => {
  afterEach(cleanup);

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

  test("Shoukd call Validation with correct email", async () => {
    const { sut, validationSpy } = makeSut();
    const email = faker.internet.email();
    const inputEmail = sut.getByTestId("input-email") as HTMLInputElement;
    fireEvent.input(inputEmail, { target: { value: email } });
    expect(validationSpy.input).toEqual({ email: email });
  });

  test("Shoukd call Validation with correct password", async () => {
    const { sut, validationSpy } = makeSut();
    const password = faker.internet.password();
    const inputPassword = sut.getByTestId("input-password") as HTMLInputElement;
    fireEvent.input(inputPassword, { target: { value: password } });
    expect(validationSpy.input).toEqual({ password: password });
  });
});
