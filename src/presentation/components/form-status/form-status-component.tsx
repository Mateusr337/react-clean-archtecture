import { FormContext } from "@/presentation/contexts";
import React, { useContext } from "react";
import { SmallMessage, Spinner } from "..";
import { Container } from "./form-status-styles";

export default function FormStatus(): React.ReactElement {
  const { isLoading, error } = useContext(FormContext);

  return (
    <Container data-testid='form-states'>
      {error && <SmallMessage>{error}</SmallMessage>}
      {isLoading && <Spinner />}
    </Container>
  );
}
