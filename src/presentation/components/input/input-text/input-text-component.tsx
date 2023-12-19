import React from "react";
import SmallMessage from "../../small-message/small-message-component";
import { InputContainer } from "../global-inputs-styles";
import { Input } from "./input-text-styles";

interface InputParams {
  type?: "text" | "password" | "email";
  name?: string;
  placeholder?: string;
  error?: string;
}

export default function InputText(params: InputParams): React.ReactElement {
  return (
    <InputContainer>
      <Input {...params} />
      {params.error && <SmallMessage> {`Erro: ${params.error}`} </SmallMessage>}
    </InputContainer>
  );
}
