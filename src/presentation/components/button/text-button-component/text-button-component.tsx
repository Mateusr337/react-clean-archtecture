import React from "react";
import { Container } from "./text-button-styles";

export type ButtonParams = {
  children?: string | React.ReactElement;
  type?: "submit" | "button";
};

export default function TextButton({
  children,
  type = "button",
}: ButtonParams): React.ReactElement {
  return <Container type={type}>{children}</Container>;
}
