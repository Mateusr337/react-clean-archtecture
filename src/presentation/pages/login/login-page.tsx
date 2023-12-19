import {
  Form,
  FormStatus,
  InputText,
  StandartButton,
  TextButton,
} from "@/presentation/components";
import { FormContext, FormStates } from "@/presentation/contexts";
import React, { useState } from "react";
import { Footer, Header } from "./components";
import { ButtonsBox, Container, ContentPage } from "./login-styles";

export default function LoginPage(): React.ReactElement {
  const [state] = useState<FormStates>({
    isLoading: false,
    error: null,
  });

  return (
    <Container>
      <Header />
      <ContentPage>
        <FormContext.Provider value={state}>
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
