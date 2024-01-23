import { FormContext } from "@/presentation/pages/login/contexts";
import React, { FocusEvent, useContext } from "react";
import SmallMessage from "../../small-message/small-message-component";
import { InputContainer } from "../global-inputs-styles";
import { Input } from "./input-text-styles";

interface InputParams {
  name: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  required?: boolean;
}

export default function InputText(params: InputParams): React.ReactElement {
  const { state, setState } = useContext(FormContext);
  const error = state[`${params.name}Error`];

  const requiredValue = params.required == false ? false : true;

  const handleChange = (event: FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <InputContainer>
      <Input
        {...params}
        required={requiredValue}
        data-testid={`input-${params.name}`}
        onChange={handleChange}
      />
      {error && <SmallMessage> {`Erro: ${error}`} </SmallMessage>}
    </InputContainer>
  );
}
