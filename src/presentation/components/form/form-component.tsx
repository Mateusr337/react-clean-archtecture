import React from "react";

type FormParams = {
  title?: string;
  children: React.ReactElement | React.ReactElement[];
  onSubmit?: (data: any) => void | Promise<void>;
};

export default function Form({
  children,
  title,
  onSubmit,
}: FormParams): React.ReactElement {
  return (
    <form onSubmit={onSubmit}>
      {title && <h2>{title}</h2>}
      {children}
    </form>
  );
}
