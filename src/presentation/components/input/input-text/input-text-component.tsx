import React from "react";
import SmallMessage from "../../small-message/small-message-component";
import { InputContainer } from "../global-inputs-styles";
import { Input } from "./input-text-styles";

interface InputParams {
  name: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export default function InputText(params: InputParams): React.ReactElement {
  const requiredValue = params.required == false ? false : true;

  return (
    <InputContainer>
      <Input
        {...params}
        required={requiredValue}
        data-testid={`input-${params.name}`}
      />
      {params.error && <SmallMessage> {`Erro: ${params.error}`} </SmallMessage>}
    </InputContainer>
  );
}
