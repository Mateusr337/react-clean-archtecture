import React from "react";
import { Message } from "./small-message-styles";

type SmallMessageParams = {
  children: string | string[];
};

export default function Smallchildren({
  children,
}: SmallMessageParams): React.ReactElement {
  return <Message data-testid='small-msg'>{children}</Message>;
}
