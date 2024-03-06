import { Authentication } from "@/domain/usecases";
import {
  Form,
  FormStatus,
  InputText,
  StandartButton,
  TextButton,
} from "@/presentation/components";
import { Validation } from "@/presentation/protocols";
import React, { useEffect, useState } from "react";
import { Footer, Header } from "./components";
import { FormContext, FormStates } from "./contexts";
import { ButtonsBox, Container, ContentPage } from "./login-styles";

type Params = {
  validation: Validation;
  authentication: Authentication;
};

const emptyFormStates: FormStates = {
  isLoading: false,
  error: null,
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
};

export default function LoginPage({
  validation,
  authentication,
}: Params): React.ReactElement {
  const [state, setState] = useState<FormStates>(emptyFormStates);

  useEffect(() => {
    setState({
      ...state,
      emailError: validation?.validate("email", state.email),
    });
  }, [state.email]);

  useEffect(() => {
    setState({
      ...state,
      passwordError: validation?.validate("password", state.password),
    });
  }, [state.password]);

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      state.isLoading ||
      state.error ||
      state.emailError ||
      state.passwordError
    ) {
      return;
    }
    setState({ ...state, isLoading: true });
    const { email, password } = state;
    await authentication.auth({ email, password });
  };

  return (
    <Container>
      <Header />
      <ContentPage>
        <FormContext.Provider value={{ state, setState }}>
          <Form testId="login-form" title="Login" onSubmit={handleSubmitForm}>
            <InputText
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
            <InputText
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
            <ButtonsBox>
              <TextButton>Cadastrar-me</TextButton>
              <StandartButton
                disabled={
                  !!state.emailError ||
                  !!state.passwordError ||
                  !state.email ||
                  !state.password
                }
                type="submit"
              >
                Entrar
              </StandartButton>
            </ButtonsBox>
            <FormStatus />
          </Form>
        </FormContext.Provider>
      </ContentPage>
      <Footer />
    </Container>
  );
}
