import { FormContext } from "@/presentation/pages/login/contexts";
import React, { useContext } from "react";
import { SmallMessage, Spinner } from "..";
import { Container } from "./form-status-styles";

export default function FormStatus(): React.ReactElement {
  const { state } = useContext(FormContext);
  const { isLoading, error } = state;

  return (
    <Container data-testid='form-states'>
      {error && <SmallMessage>{error}</SmallMessage>}
      {isLoading && <Spinner />}
    </Container>
  );
}
