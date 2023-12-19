import {
  Form,
  InputText,
  Spinner,
  StandartButton,
  TextButton,
} from "@/presentation/components";
import React from "react";
import { Container, ContentPage, Footer, Header } from "./login-styles";

export default function LoginPage(): React.ReactElement {
  return (
    <Container>
      <Header>
        <h1>4Ds</h1>
      </Header>
      <ContentPage>
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
          <StandartButton>Entrar</StandartButton>
          <TextButton>Criar conta</TextButton>
          <Spinner />
        </Form>
      </ContentPage>
      <Footer></Footer>
    </Container>
  );
}
