import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [hasFormData, setHasFormData] = useState(false);

  return (
    <FormContext.Provider value={{ hasFormData, setHasFormData }}>
      {children}
    </FormContext.Provider>
  );
}
