import React from "react";

type FormParams = {
  title?: string;
  children: React.ReactElement | React.ReactElement[];
};

export default function Form({
  children,
  title,
}: FormParams): React.ReactElement {
  return (
    <form>
      {title && <h2>{title}</h2>}
      {children}
    </form>
  );
}
