import { createContext } from "react";

export type FormStates = {
  isLoading: boolean;
  error: string | null;
};

export default createContext<FormStates>(null);
