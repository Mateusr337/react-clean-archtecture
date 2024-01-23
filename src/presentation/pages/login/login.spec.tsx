import { ValidationSpy } from "@/presentation/test";
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

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const sut = render(<LoginPage validation={validationSpy} />);
  return { sut, validationSpy };
};

describe("LoginPage component", () => {
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

  test("Shoud call Validation with correct email", async () => {
    const { sut, validationSpy } = makeSut();
    const email = faker.internet.email();
    const inputEmail = sut.getByTestId("input-email") as HTMLInputElement;
    fireEvent.input(inputEmail, { target: { value: email } });
    expect(validationSpy.fieldName).toBe(inputEmail.name);
    expect(validationSpy.fieldValue).toBe(email);
  });

  test("Should call Validation with correct password", async () => {
    const { sut, validationSpy } = makeSut();
    const password = faker.internet.password();
    const inputPassword = sut.getByTestId("input-password") as HTMLInputElement;
    fireEvent.input(inputPassword, { target: { value: password } });
    expect(validationSpy.fieldName).toBe(inputPassword.name);
    expect(validationSpy.fieldValue).toBe(password);
  });
});
