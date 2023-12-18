import StandartButton from "@/presentation/components/button/standart-button-component/standart-button-component";
import TextButton from "@/presentation/components/button/text-button-component/text-button-component";
import InputText from "@/presentation/components/input/input-text/input-text-component";
import React from "react";
import { Container, ContentPage, Footer, Header } from "./login-styles";

export default function LoginPage(): React.ReactElement {
  return (
    <Container>
      <Header>
        <h1>4Ds</h1>
      </Header>
      <ContentPage>
        <form>
          <h2>Login</h2>
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
        </form>
      </ContentPage>
      <Footer></Footer>
    </Container>
  );
}
