import React from "react";
import { Input } from "./input-text-styles";

interface InputParams {
  type?: "text" | "password" | "email";
  name?: string;
  placeholder?: string;
}

export default function InputText(params: InputParams): React.ReactElement {
  return <Input type={params.type || "text"} {...params} />;
}
