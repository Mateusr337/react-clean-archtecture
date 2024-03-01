import { AuthenticationSpy, ValidationSpy } from "@/presentation/test";
import { faker } from "@faker-js/faker";
import {
  RenderResult,
  cleanup,
  fireEvent,
  render,
} from "@testing-library/react";
import { LoginPage } from "..";
import { LoginMessages } from "./login-messages";

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
  authenticationSpy: AuthenticationSpy;
};

const messages = LoginMessages;

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const authenticationSpy = new AuthenticationSpy();
  const sut = render(
    <LoginPage validation={validationSpy} authentication={authenticationSpy} />
  );
  return { sut, validationSpy, authenticationSpy };
};

const simulateValidFormSubmit = (
  sut: RenderResult,
  email: string = faker.internet.email(),
  password: string = faker.internet.password()
): void => {
  populateEmailField(sut, email);
  populatePasswordField(sut, password);
  const button = sut.getByTestId("submit-btn") as HTMLButtonElement;
  fireEvent.click(button);
};

const populateEmailField = (
  sut: RenderResult,
  email: string = faker.internet.email()
) => {
  const inputEmail = sut.getByTestId("input-email") as HTMLInputElement;
  fireEvent.input(inputEmail, { target: { value: email } });
};

const populatePasswordField = (
  sut: RenderResult,
  password: string = faker.internet.password()
) => {
  const inputPassword = sut.getByTestId("input-password") as HTMLInputElement;
  fireEvent.input(inputPassword, { target: { value: password } });
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

  test("Should show email error if Validation fails", async () => {
    const { sut, validationSpy } = makeSut();
    validationSpy.errorMessage = messages.EmailNotValid;
    populateEmailField(sut);
    const emailError = sut.getByTestId("email-small-error") as HTMLSpanElement;
    expect(emailError.textContent).toBe(validationSpy.errorMessage);
  });

  test("Should show password error if Validation fails", async () => {
    const { sut, validationSpy } = makeSut();
    validationSpy.errorMessage = messages.PasswordNotValid;
    populatePasswordField(sut);
    const paswwordErrorId = "password-small-error";
    const passwordError = sut.getByTestId(paswwordErrorId) as HTMLSpanElement;
    expect(passwordError.textContent).toBe(validationSpy.errorMessage);
  });

  test("Should enable submit button if form is valid", async () => {
    const { sut } = makeSut();
    simulateValidFormSubmit(sut);
    const button = sut.getByTestId("submit-btn") as HTMLButtonElement;
    expect(button.disabled).toBe(false);
  });

  test("Should show spinner on submit", async () => {
    const { sut } = makeSut();
    simulateValidFormSubmit(sut);
    const spinner = sut.getByTestId("circles-loading");
    expect(spinner).toBeTruthy();
  });

  test("Should call Authentication with correct values", async () => {
    const { sut, authenticationSpy } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    simulateValidFormSubmit(sut, email, password);
    expect(authenticationSpy.params).toEqual({ email, password });
  });
});
