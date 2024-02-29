import { ValidationSpy } from "@/presentation/test";
import { faker } from "@faker-js/faker";
import {
  RenderResult,
  cleanup,
  fireEvent,
  render,
} from "@testing-library/react";
import { LoginPage } from "..";
import { LoginMessages } from "./login-messages";
import { Authentication, AuthenticationParams } from "@/domain/usecases";
import { AccountModel } from "@/domain/models";
import { mockAccountModel } from "@/domain/tests";

class AuthenticationSpy implements Authentication {
  account: AccountModel;
  params: AuthenticationParams;

  constructor() {
    this.account = mockAccountModel();
  }

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params;
    return Promise.resolve(this.account);
  }
}

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
  authenticationSpy: AuthenticationSpy;
};

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const authenticationSpy = new AuthenticationSpy();
  const sut = render(
    <LoginPage validation={validationSpy} authentication={authenticationSpy} />
  );
  return { sut, validationSpy, authenticationSpy };
};

const messages = LoginMessages;

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
    const inputEmail = sut.getByTestId("input-email") as HTMLInputElement;
    fireEvent.input(inputEmail, { target: { value: faker.internet.email() } });
    const emailError = sut.getByTestId("email-small-error") as HTMLSpanElement;
    expect(emailError.textContent).toBe(validationSpy.errorMessage);
  });

  test("Should show password error if Validation fails", async () => {
    const { sut, validationSpy } = makeSut();
    const password = faker.internet.password();
    validationSpy.errorMessage = messages.PasswordNotValid;
    const inputPassword = sut.getByTestId("input-password") as HTMLInputElement;
    fireEvent.input(inputPassword, { target: { value: password } });
    const paswwordErrorId = "password-small-error";
    const passwordError = sut.getByTestId(paswwordErrorId) as HTMLSpanElement;
    expect(passwordError.textContent).toBe(validationSpy.errorMessage);
  });

  test("Should enable submit button if form is valid", async () => {
    const { sut } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const inputPassword = sut.getByTestId("input-password") as HTMLInputElement;
    fireEvent.input(inputPassword, { target: { value: password } });
    const inputEmail = sut.getByTestId("input-email") as HTMLInputElement;
    fireEvent.input(inputEmail, { target: { value: email } });
    const button = sut.getByTestId("submit-btn") as HTMLButtonElement;
    expect(button.disabled).toBe(false);
  });

  test("Should show spinner on submit", async () => {
    const { sut } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const inputPassword = sut.getByTestId("input-password") as HTMLInputElement;
    fireEvent.input(inputPassword, { target: { value: password } });
    const inputEmail = sut.getByTestId("input-email") as HTMLInputElement;
    fireEvent.input(inputEmail, { target: { value: email } });
    const button = sut.getByTestId("submit-btn") as HTMLButtonElement;
    fireEvent.click(button);
    const spinner = sut.getByTestId("circles-loading");
    expect(spinner).toBeTruthy();
  });

  test("Should call Authentication with correct values", async () => {
    const { sut, authenticationSpy } = makeSut();
    const inputPassword = sut.getByTestId("input-password") as HTMLInputElement;
    const password = faker.internet.password();
    fireEvent.input(inputPassword, { target: { value: password } });

    const inputEmail = sut.getByTestId("input-email") as HTMLInputElement;
    const email = faker.internet.email();
    fireEvent.input(inputEmail, { target: { value: email } });

    const button = sut.getByTestId("submit-btn") as HTMLButtonElement;
    fireEvent.click(button);
    expect(authenticationSpy.params).toEqual({ email, password });
  });
});
