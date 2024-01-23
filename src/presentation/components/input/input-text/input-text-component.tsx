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

  const enableInput = (event: FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

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
        readOnly
        required={requiredValue}
        data-testid={`input-${params.name}`}
        onFocus={enableInput}
        onChange={handleChange}
      />
      {error && <SmallMessage> {`Erro: ${error}`} </SmallMessage>}
    </InputContainer>
  );
}
