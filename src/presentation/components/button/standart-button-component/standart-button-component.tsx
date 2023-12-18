import React from "react";
import { Container } from "./standart-button-styles";

export type ButtonParams = {
  children?: string | React.ReactElement;
  type?: "submit" | "button";
};

export default function StandartButton({
  children,
  type = "button",
}: ButtonParams): React.ReactElement {
  return <Container type={type}>{children}</Container>;
}
