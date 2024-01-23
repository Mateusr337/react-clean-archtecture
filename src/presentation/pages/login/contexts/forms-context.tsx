import { createContext } from "react";

export type FormStates = {
  isLoading: boolean;
  error: string | null;
  email: string;
  emailError: string | null;
  password: string;
  passwordError: string | null;
};

export type FormsContext = {
  state: FormStates;
  setState: (data: FormStates) => void;
};

export default createContext<FormsContext>(null);
