import React from "react";
import { ErrorMessage } from "../global-inputs-styles";
import { Input } from "./input-text-styles";

interface InputParams {
  type?: "text" | "password" | "email";
  name?: string;
  placeholder?: string;
  error?: string;
}

export default function InputText(params: InputParams): React.ReactElement {
  return (
    <>
      <Input {...params} />
      {!!params.error && <ErrorMessage>{params.error}</ErrorMessage>}
    </>
  );
}
