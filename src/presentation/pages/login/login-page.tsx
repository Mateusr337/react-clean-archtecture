import {
  Form,
  FormStatus,
  InputText,
  StandartButton,
  TextButton,
} from "@/presentation/components";
import { Validation } from "@/presentation/protocols/validation";
import React, { useEffect, useState } from "react";
import { Footer, Header } from "./components";
import { FormContext, FormStates } from "./contexts";
import { ButtonsBox, Container, ContentPage } from "./login-styles";

type Params = {
  validation: Validation;
};

export const emptyFormStates: FormStates = {
  isLoading: false,
  error: null,
  email: "",
  emailError: null,
  password: "",
  passwordError: null,
};

export default function LoginPage({ validation }: Params): React.ReactElement {
  const [state, setState] = useState<FormStates>(emptyFormStates);

  useEffect(() => {
    validation.validate({ email: state.email });
  }, [state.email]);

  useEffect(() => {
    validation.validate({ password: state.password });
  }, [state.password]);

  return (
    <Container>
      <Header />
      <ContentPage>
        <FormContext.Provider value={{ state, setState }}>
          <Form title='Login'>
            <InputText
              type='email'
              name='email'
              placeholder='Digite seu e-mail'
            />
            <InputText
              type='password'
              name='password'
              placeholder='Digite sua senha'
            />
            <ButtonsBox>
              <TextButton>Cadastrar-me</TextButton>
              <StandartButton disabled type='submit'>
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
