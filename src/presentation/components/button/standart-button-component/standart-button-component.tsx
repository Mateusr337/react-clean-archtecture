import React, { useState } from "react";
import { ButtonParams } from "../interfaces";
import { Container } from "./standart-button-styles";

export default function StandartButton(
  params: ButtonParams
): React.ReactElement {
  const [isSubmit] = useState(params.type === "submit");
  return (
    <Container {...params} data-testid={isSubmit ? "submit-btn" : "text-btn"}>
      {params.children}
    </Container>
  );
}
