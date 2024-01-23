import React from "react";
import { Message } from "./small-message-styles";

type SmallMessageParams = {
  children: string | string[];
  name?: string;
};

export default function Smallchildren({
  children,
  name = "generic",
}: SmallMessageParams): React.ReactElement {
  return <Message data-testid={`${name}-small-error`}>{children}</Message>;
}
