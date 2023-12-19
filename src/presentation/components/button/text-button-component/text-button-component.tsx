import React from "react";
import { ButtonParams } from "../interfaces";
import { Container } from "./text-button-styles";

export default function TextButton(params: ButtonParams): React.ReactElement {
  return <Container {...params}>{params.children}</Container>;
}
