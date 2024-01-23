import {
  Form,
  FormStatus,
  InputText,
  StandartButton,
  TextButton,
} from "@/presentation/components";
import React, { useState } from "react";
import { Footer, Header } from "./components";
import { FormContext, FormStates } from "./contexts";
import { ButtonsBox, Container, ContentPage } from "./login-styles";

const initialFormState: FormStates = {
  isLoading: false,
  error: null,
  emailError: null,
  passwordError: null,
};

export default function LoginPage(): React.ReactElement {
  const [state] = useState<FormStates>(initialFormState);

  const onSubmit = () => {};

  return (
    <Container>
      <Header />
      <ContentPage>
        <FormContext.Provider value={state}>
          <Form title='Login' onSubmit={onSubmit}>
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
