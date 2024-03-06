import React from "react";

type FormParams = {
  title?: string;
  children: React.ReactElement | React.ReactElement[];
  onSubmit?: (data: any) => void | Promise<void>;
  testId: string;
};

export default function Form({
  children,
  title,
  onSubmit,
  testId,
}: FormParams): React.ReactElement {
  return (
    <form onSubmit={onSubmit} data-testid={testId}>
      {title && <h2>{title}</h2>}
      {children}
    </form>
  );
}
